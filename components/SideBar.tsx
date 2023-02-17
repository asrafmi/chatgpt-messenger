"use client"

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { collection, orderBy, query } from "firebase/firestore"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../firebase"
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import NewChat from "./NewChat"

function SideBar() {
    const { data: session } = useSession()
    
    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, "users", session.user?.email!, "chats"),
            orderBy("createdAt", "asc")
        )
    )

  const profileRow = () => {
    return (
        <div className={`chatRow justify-center `}>
            <img
            src={session!.user?.image! || `https://ui-avatars.com/api/?name=${session!.user?.name}`} 
            alt="profile-pic" 
            className="h-8 w-8 -ml-1 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />
            <p className="flex-1 hidden md:inline-flex truncate">
            {session!.user?.name}
            </p>
            <ArrowRightOnRectangleIcon onClick={() => signOut()} className="h-5 w-5 text-gray-700 hover:text-red-700"/>
        </div>
    )
  }

  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                <NewChat/>
                <div className="hidden sm:inline">
                     <ModelSelection />
                </div>

                <div className="flex flex-col space-y-2 my-2">
                    {loading && (
                        <div className="animate-pulse text-center text-white">
                            <p>Loading Chats..</p>
                        </div>
                    )}
                    {chats?.docs.map(chat => (
                        <ChatRow key={chat.id} id={chat.id}/>
                    ))}
                </div>

            </div>
        </div>
        <Link href={`https://github.com/asrafmi/`} className={`chatRow justify-center `}>
        <FaGithub className="h-5 w-5" />
        <p className="flex-1 hidden md:inline-flex truncate">
            Github
        </p>
        </Link>
        <Link href={`https://www.linkedin.com/in/asrafmi/`} className={`chatRow justify-center `}>
        <FaLinkedin className="h-5 w-5" />
        <p className="flex-1 hidden md:inline-flex truncate">
            LinkedIn
        </p>
        </Link>
        {session && 
        profileRow()}
    </div>
  )
}

export default SideBar