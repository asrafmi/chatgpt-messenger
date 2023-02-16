import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {
    
  const isChatGPT = message.user.name === "ChatGPT"

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <img src={message.user.avatar || "https://links.papareact.com/2i6"} alt={message.user.name} className="h-8 w-8" />
            <p className="pt-1 text-sm">{message.text || `ChatGPT bingung mau jawab apa, silahkan tanya lagi yak :(`}</p>
        </div>
    </div>
  )
}

export default Message