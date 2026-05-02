# VibeLock Demo Target

This is a deliberately vulnerable vibe-coded AI SaaS app used to demo VibeLock.

The app includes:
- public AI chat endpoint
- admin dashboard
- file upload flow
- Stripe-style webhook
- AI tool calling
- URL fetching tool
- API key based LLM calls
- planned payments
- no real authentication
- no authorization middleware
- no rate limiting
- no input validation
- no output validation
- no prompt injection protection
- no security headers
- no CSRF protection
- no audit logging
- no safe tool allowlist

Known risky flows:
1. `/api/chat` accepts arbitrary user input and sends it to an LLM.
2. The chat route exposes internal debug data.
3. AI tools can run admin-like actions without role checks.
4. URL fetching has no domain allowlist, creating SSRF risk.
5. Payment/refund tool has no authorization.
6. Upload route has no MIME or size validation.
7. Admin page is described but not protected server-side.
8. No middleware enforces authentication, rate limits, CSRF, or request guards.
9. Security headers are missing from Next.js config.
10. Environment variable guidance is incomplete.
