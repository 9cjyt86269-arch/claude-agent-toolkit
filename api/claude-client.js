import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export async function askClaude(prompt) {
  const msg = await client.messages.create({
    model: "claude-3-5-sonnet",
    max_tokens: 1000,
    messages: [
      { role: "user", content: prompt }
    ]
  });

  return msg.content[0].text;
}