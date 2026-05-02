import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(request: Request) {
  const { message } = await request.json();

  // Intentionally missing:
  // - authentication
  // - rate limiting
  // - input validation
  // - abuse prevention

  const result = await generateText({
    model: openai("gpt-4.1-mini"),
    prompt: message,
  });

  return Response.json({ response: result.text });
}
