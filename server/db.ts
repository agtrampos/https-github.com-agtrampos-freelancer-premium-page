import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, subscriptions, payments, emailLeads } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

/**
 * Subscription queries
 */
export async function createSubscription(subscription: any) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(subscriptions).values(subscription);
  return result;
}

export async function getActiveSubscription(userId: number) {
  const db = await getDb();
  if (!db) return null;
  
  const result = await db
    .select()
    .from(subscriptions)
    .where(and(eq(subscriptions.userId, userId), eq(subscriptions.status, 'active')))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}

export async function updateSubscriptionStatus(subscriptionId: number, status: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db
    .update(subscriptions)
    .set({ status: status as any, updatedAt: new Date() })
    .where(eq(subscriptions.id, subscriptionId));
}

/**
 * Payment queries
 */
export async function createPayment(payment: any) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(payments).values(payment);
  return result;
}

export async function updatePaymentStatus(paymentId: number, status: string, infinitepayId?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const updateData: Record<string, any> = { status, updatedAt: new Date() };
  if (infinitepayId) updateData.infinitepayId = infinitepayId;
  
  await db
    .update(payments)
    .set(updateData)
    .where(eq(payments.id, paymentId));
}

export async function getPaymentByInfinitepayId(infinitepayId: string) {
  const db = await getDb();
  if (!db) return null;
  
  const result = await db
    .select()
    .from(payments)
    .where(eq(payments.infinitepayId, infinitepayId))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}

export async function getUserPayments(userId: number) {
  const db = await getDb();
  if (!db) return [];
  
  return db.select().from(payments).where(eq(payments.userId, userId));
}

/**
 * Email Lead queries
 */
export async function createOrUpdateEmailLead(lead: any) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const existing = await db
    .select()
    .from(emailLeads)
    .where(eq(emailLeads.email, lead.email))
    .limit(1);
  
  if (existing.length > 0) {
    await db
      .update(emailLeads)
      .set({ ...lead, updatedAt: new Date() })
      .where(eq(emailLeads.email, lead.email));
    return existing[0];
  } else {
    await db.insert(emailLeads).values(lead);
    return lead;
  }
}

export async function getEmailLead(email: string) {
  const db = await getDb();
  if (!db) return null;
  
  const result = await db
    .select()
    .from(emailLeads)
    .where(eq(emailLeads.email, email))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}
