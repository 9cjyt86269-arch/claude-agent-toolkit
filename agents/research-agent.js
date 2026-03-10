import { askClaude } from "../api/claude-client.js";

export async function researchAgent(topic) {

  const prompt = `
You are an AI research assistant.

Research this topic and summarize key insights:

${topic}

Provide structured output.
`;

  const result = await askClaude(prompt);

  return result;
}