import openai from "./chatgpt";

const query = async(prompt: string, chatId: string, model: string) => {
    const res =  await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    .then((res) => {
        if (!res.data) {
            throw new Error("Chat GPT bingung mau jawab apa :(");
        }
        return res.data.choices[0].text
    })
    .catch((err) => `Maap, ChatGPT belum bisa jawab itu :( (Error:${err.message})`)

    return res
}

export default query