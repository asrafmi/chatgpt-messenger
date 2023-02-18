"use client"

import { DocumentData } from "firebase/firestore"
import { useState } from "react"
import MovingComponent from "react-moving-text"
import { Typewriter } from 'react-simple-typewriter'

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {

  const isChatGPT = message.user.name === "ChatGPT"

  const handleDone = () => {
    console.log(`Done write all message!`)
  }

  return (
    <div className={`py-5 border-b border-black/10 dark:text-white light:text-gray-800 dark:border-gray-900/50 ${isChatGPT && "dark:bg-[#434654] bg-gray-50"}`}>
        <div className="flex text-sm space-x-5 px-10 max-w-2xl mx-auto">
            <img src={message.user.avatar || "https://links.papareact.com/2i6"} alt={message.user.name} className="h-8 w-8" />
            { isChatGPT ? (
              <Typewriter words={[message.text]} typeSpeed={50} onLoopDone={handleDone}/>
            ) : (
              <p className="pt-1 text-sm">{message.text || `ChatGPT bingung mau jawab apa, silahkan tanya lagi yak :(`}</p> 
            )}
        </div>
    </div>
  )
}

export default Message