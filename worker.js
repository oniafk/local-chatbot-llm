import { WebWorkerMLCEngineHandler } from "https://esm.run/@mlc-ai/web-llm";

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => {
  handler.onmessage(msg);
};

// onmessage = (e) => {
//   console.log("Worker: Message received from main Thread");
//   console.log(e);
//   if (e.data.name === "hello") {
//     console.log("Worker: Posting message back to main Thread");
//     postMessage({ name: "hello  back" });
//   }
// };
