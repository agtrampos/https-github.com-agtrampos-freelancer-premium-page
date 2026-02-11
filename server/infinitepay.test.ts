import { describe, it, expect } from 'vitest';
import { validateWebhookSignature, processWebhookPayload, extractUserIdFromExternalId } from './infinitepay';
import crypto from 'crypto';

describe('InfinitePay Integration', () => {
  describe('validateWebhookSignature', () => {
    it('should validate correct webhook signature', () => {
      const secret = 'test-secret';
      const payload = JSON.stringify({ id: '123', status: 'completed' });
      const signature = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');

      // Temporariamente sobrescrever env var para teste
      const originalSecret = process.env.INFINITEPAY_WEBHOOK_SECRET;
      process.env.INFINITEPAY_WEBHOOK_SECRET = secret;

      const result = validateWebhookSignature(payload, signature);
      expect(result).toBe(true);

      process.env.INFINITEPAY_WEBHOOK_SECRET = originalSecret;
    });

    it('should reject invalid webhook signature', () => {
      const secret = 'test-secret';
      const payload = JSON.stringify({ id: '123', status: 'completed' });
      const invalidSignature = 'invalid-signature';

      const originalSecret = process.env.INFINITEPAY_WEBHOOK_SECRET;
      process.env.INFINITEPAY_WEBHOOK_SECRET = secret;

      const result = validateWebhookSignature(payload, invalidSignature);
      expect(result).toBe(false);

      process.env.INFINITEPAY_WEBHOOK_SECRET = originalSecret;
    });
  });

  describe('processWebhookPayload', () => {
    it('should process completed payment', () => {
      const payload = {
        id: 'pay_123',
        status: 'approved',
        amount: 10000, // 100 reais em centavos
        currency: 'BRL',
        externalId: 'user-1-1234567890',
      };

      const result = processWebhookPayload(payload);

      expect(result.infinitepayId).toBe('pay_123');
      expect(result.status).toBe('completed');
      expect(result.amount).toBe(100); // Convertido de centavos
      expect(result.externalId).toBe('user-1-1234567890');
    });

    it('should process failed payment', () => {
      const payload = {
        id: 'pay_456',
        status: 'declined',
        amount: 5000,
        currency: 'BRL',
        externalId: 'user-2-1234567890',
      };

      const result = processWebhookPayload(payload);

      expect(result.status).toBe('failed');
      expect(result.amount).toBe(50);
    });

    it('should handle pending payment', () => {
      const payload = {
        id: 'pay_789',
        status: 'pending',
        amount: 15000,
        currency: 'BRL',
        externalId: 'user-3-1234567890',
      };

      const result = processWebhookPayload(payload);

      expect(result.status).toBe('pending');
    });
  });

  describe('extractUserIdFromExternalId', () => {
    it('should extract user ID from external ID', () => {
      const externalId = 'user-123-1234567890';
      const userId = extractUserIdFromExternalId(externalId);

      expect(userId).toBe(123);
    });

    it('should return null for invalid external ID', () => {
      const externalId = 'invalid-format';
      const userId = extractUserIdFromExternalId(externalId);

      expect(userId).toBeNull();
    });

    it('should handle large user IDs', () => {
      const externalId = 'user-999999-1234567890';
      const userId = extractUserIdFromExternalId(externalId);

      expect(userId).toBe(999999);
    });
  });

  describe('Environment Variables', () => {
    it('should have InfinitePay credentials configured', () => {
      // Este teste apenas verifica se as variáveis estão definidas
      // Não testa a validade das credenciais
      const hasApiKey = !!process.env.INFINITEPAY_API_KEY;
      const hasCheckoutId = !!process.env.INFINITEPAY_CHECKOUT_ID;
      const hasWebhookSecret = !!process.env.INFINITEPAY_WEBHOOK_SECRET;

      // Pelo menos uma deve estar configurada para o teste passar
      const hasAtLeastOne = hasApiKey || hasCheckoutId || hasWebhookSecret;
      expect(hasAtLeastOne).toBe(true);
    });
  });
});
