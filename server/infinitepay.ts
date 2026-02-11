/**
 * InfinitePay Integration Helper
 * 
 * Funções para integração com a API da InfinitePay
 * - Gerar links de checkout
 * - Validar webhooks
 * - Processar confirmações de pagamento
 */

import axios from 'axios';
import crypto from 'crypto';

const INFINITEPAY_API_URL = process.env.INFINITEPAY_API_URL || 'https://api.infinitepay.io';
const INFINITEPAY_API_KEY = process.env.INFINITEPAY_API_KEY;
const INFINITEPAY_CHECKOUT_ID = process.env.INFINITEPAY_CHECKOUT_ID;
const INFINITEPAY_WEBHOOK_SECRET = process.env.INFINITEPAY_WEBHOOK_SECRET;

interface CreateCheckoutParams {
  userId: number;
  email: string;
  amount: number;
  planType: string;
  returnUrl?: string;
}

interface CheckoutResponse {
  checkoutUrl: string;
  checkoutId: string;
  externalId: string;
}

interface WebhookPayload {
  id: string;
  status: string;
  amount: number;
  currency: string;
  externalId: string;
  [key: string]: any;
}

/**
 * Gera um link de checkout da InfinitePay
 */
export async function createCheckoutLink(params: CreateCheckoutParams): Promise<CheckoutResponse> {
  if (!INFINITEPAY_API_KEY || !INFINITEPAY_CHECKOUT_ID) {
    throw new Error('InfinitePay credentials not configured');
  }

  try {
    const externalId = `user-${params.userId}-${Date.now()}`;
    
    const payload = {
      checkoutId: INFINITEPAY_CHECKOUT_ID,
      amount: Math.round(params.amount * 100), // Converter para centavos
      currency: 'BRL',
      customer: {
        email: params.email,
        name: `User ${params.userId}`,
      },
      externalId,
      metadata: {
        userId: params.userId,
        planType: params.planType,
        timestamp: new Date().toISOString(),
      },
      redirectUrl: params.returnUrl || `${process.env.VITE_APP_URL || 'http://localhost:3000'}/dashboard`,
    };

    const response = await axios.post(
      `${INFINITEPAY_API_URL}/v1/checkouts`,
      payload,
      {
        headers: {
          'Authorization': `Bearer ${INFINITEPAY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      checkoutUrl: response.data.url,
      checkoutId: response.data.id,
      externalId,
    };
  } catch (error) {
    console.error('[InfinitePay] Error creating checkout:', error);
    throw new Error('Failed to create checkout link');
  }
}

/**
 * Valida a assinatura do webhook
 */
export function validateWebhookSignature(
  payload: string,
  signature: string
): boolean {
  if (!INFINITEPAY_WEBHOOK_SECRET) {
    console.warn('[InfinitePay] Webhook secret not configured');
    return false;
  }

  const hash = crypto
    .createHmac('sha256', INFINITEPAY_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');

  return hash === signature;
}

/**
 * Processa webhook de confirmação de pagamento
 */
export function processWebhookPayload(payload: WebhookPayload): {
  externalId: string;
  status: 'completed' | 'failed' | 'pending';
  amount: number;
  infinitepayId: string;
} {
  const statusMap: Record<string, 'completed' | 'failed' | 'pending'> = {
    'approved': 'completed',
    'completed': 'completed',
    'paid': 'completed',
    'declined': 'failed',
    'failed': 'failed',
    'pending': 'pending',
    'processing': 'pending',
  };

  return {
    externalId: payload.externalId,
    status: statusMap[payload.status] || 'pending',
    amount: payload.amount / 100, // Converter de centavos para reais
    infinitepayId: payload.id,
  };
}

/**
 * Extrai userId do externalId
 */
export function extractUserIdFromExternalId(externalId: string): number | null {
  const match = externalId.match(/^user-(\d+)-/);
  return match ? parseInt(match[1], 10) : null;
}
