const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const chapGPT = async (prompt) => {
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{ role: "user", content: prompt }],
});
console.log(response["data"]["choices"][0]["message"]["content"]);
};

chapGPT("what type of crops is suitable for black soil?")