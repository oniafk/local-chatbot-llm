# local-chatbot-llm

chatbot that runs locally on you machine, just using js

## How to run

1. Clone the repository
2. Open the terminal and navigate to the project directory
3. start live server or open the index.html file in the browser

the script will download the model and run the chatbot in the browser and will be store on your cache, this model will use you GPU to run the model, so make sure you have a good GPU
I used a Gemini model that dont uses a lot of GPU, but you can change the model to a bigger one if you want

for changing the model check the library for web-llm , check the model that you would like to use and update the line of code that calls the model

    ```javascript
    import { CreateWebWorkerMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    ```
