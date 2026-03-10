import { researchAgent } from "../agents/research-agent.js";

async function run() {

  const topic = "AI agents future";

  const result = await researchAgent(topic);

  console.log(result);

}

run();