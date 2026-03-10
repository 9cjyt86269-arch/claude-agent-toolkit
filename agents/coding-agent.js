import { askClaude } from "../api/claude-client.js";

export async function codingAgent(task) {

  const prompt = `
You are an AI coding assistant.

Write clean production-ready code for:

${task}

Include explanation.
`;

  return await askClaude(prompt);
}