import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import {
  fetchAnyUrl,
  refundCustomer,
  runAdminTool,
  runDatabaseQuery,
} from "../../../lib/tools";

export async function POST(request: Request) {
  const body = await request.json();

  // Deliberately vulnerable demo code:
  // - no authentication
  // - no rate limiting
  // - no zod validation
  // - no prompt injection filtering
  // - no AI tool permission checks
  // - no audit logging
  // - returns debug data to client
  // - trusts user-provided role/userId
  // - allows arbitrary URLs and admin actions

  if (body.action === "admin") {
    const adminResult = await runAdminTool({
      action: body.adminAction,
      userId: body.userId,
      amount: body.amount,
    });

    return Response.json({
      ok: true,
      adminResult,
      debugRole: body.role,
    });
  }

  if (body.action === "fetch_url") {
    const page = await fetchAnyUrl(body.url);
    return Response.json({ page });
  }

  if (body.action === "refund") {
    const refund = await refundCustomer({
      customerId: body.customerId,
      amount: body.amount,
    });

    return Response.json({ refund });
  }

  if (body.action === "query") {
    const rows = await runDatabaseQuery(body.sql);
    return Response.json({ rows });
  }

  const result = await generateText({
    model: openai("gpt-4.1-mini"),
    prompt: body.message,
  });

  return Response.json({
    response: result.text,
    debugUserId: body.userId,
    debugPrompt: body.message,
  });
}
