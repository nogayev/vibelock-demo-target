export async function POST(request: Request) {
  const body = await request.json();

  // Deliberately vulnerable demo webhook:
  // - no Stripe signature verification
  // - no replay protection
  // - no event idempotency
  // - trusts client-provided event type

  return Response.json({
    received: true,
    type: body.type,
  });
}
