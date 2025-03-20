export * from "./express.mjs";

import { HyperKnowledgeBase } from "./KnowledgeBase/index.mjs";
import { HyperAgent } from "./Task/index.mjs";

export const MyServers = [];
if (!process.env.no_electron) {
  const { HyperTools } = await import("./hyper_tools.mjs");
  MyServers.push(HyperTools);
}
MyServers.push(HyperKnowledgeBase, HyperAgent);