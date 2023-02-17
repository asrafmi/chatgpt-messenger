// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from '../../utils/queryApi'
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'
import { adminDB } from '../../firebaseAdmin'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body

  if(!prompt) {
    res.status(400).json({ answer: "Eitts, isi dulu kolom chatnya yak!"})
  }

  if(!chatId) {
    res.status(400).json({ answer: "Eitts, chat ID nya yang bener yak!"})
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model)
  
  const errResponse = `ChatGPT bingung mau jawab apa, silahkan tanya lagi yak :(` 

  const message: Message = {
    text: response || errResponse,
    createdAt: admin.firestore.Timestamp.now(),
    user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: "https://links.papareact.com/89k",
    }

  }

  await adminDB
  .collection("users")
  .doc(session?.user?.email)
  .collection("chats")
  .doc(chatId)
  .collection("messages")
  .add(message)
  
  if(message.text === errResponse) {
    res.status(503).json({ answer: errResponse})
  } else {
    res.status(200).json({ answer: message.text})
  }
}
