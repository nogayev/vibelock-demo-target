export async function runAdminTool(input: {
  action: string;
  userId?: string;
  amount?: number;
}) {
  // Deliberately vulnerable demo tool:
  // - no role check
  // - no action allowlist
  // - no amount validation
  // - no audit trail
  // - trusts user-controlled input

  return {
    ok: true,
    executed: input.action,
    userId: input.userId,
    amount: input.amount,
  };
}

export async function fetchAnyUrl(url: string) {
  // Deliberately vulnerable demo tool:
  // - no URL validation
  // - no domain allowlist
  // - no private IP blocking
  // - no timeout
  // - possible SSRF risk

  const response = await fetch(url);
  return response.text();
}

export async function refundCustomer(input: {
  customerId: string;
  amount: number;
}) {
  // Deliberately vulnerable demo payment tool:
  // - no authentication
  // - no authorization
  // - no amount bounds
  // - no idempotency key
  // - no audit log

  return {
    refunded: true,
    customerId: input.customerId,
    amount: input.amount,
  };
}

export async function runDatabaseQuery(sql: string) {
  // Deliberately vulnerable demo database helper:
  // - accepts raw SQL
  // - no query allowlist
  // - no parameterization
  // - no read/write separation

  return {
    query: sql,
    rows: [],
  };
}
