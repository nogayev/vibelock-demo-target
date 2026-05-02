export const aiConfig = {
  model: "gpt-4.1-mini",
  allowsUserProvidedPrompts: true,
  storesConversationHistory: true,
  usesExternalTools: true,
  allowsAdminToolCalling: true,
};

// Deliberately missing:
// - prompt injection policy
// - PII redaction
// - tool allowlist
// - model output validation
// - audit logging
// - per-user rate limits
// - moderation
// - safe system prompt boundaries
// - tool result filtering
