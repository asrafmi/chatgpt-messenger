
import Chat from '../../../components/Chat'
import ChatInput from '../../../components/ChatInput'

type Props = {
    params: {
        id: string
    }
}

function ChatPage({ params : { id }}: Props) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        <Chat chatId={id}/>
        <ChatInput chatId={id}/>
        <div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50">
            <p> <a href="https://chat.openai.com/"><strong>ChatGPT clone</strong></a> made by Asraf M. Izzuddin and inspired by Sonny Sangha YT. Feel free to give advice and critic via my Social Media</p>
        </div>
    </div>
  )
}

export default ChatPage
