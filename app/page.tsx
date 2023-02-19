"use client"

import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 dark:text-white light:text-gray-800">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className='flex max-[640px]:flex-col space-x-2 text-center'>
            <div>
                <div className="flex flex-col items-center justify-center mt-5 mb-1">
                    {/* Sun Icon */}
                    <SunIcon className="h-8 w-8"/>
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Explain something to me"</p>
                    <p className="infoText">"What is the difference between a dog and a cat?"</p>
                    <p className="infoText">"What is the color of the sun"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mt-3 mb-1">
                    <BoltIcon className="h-8 w-8"/>
                    <h2>Capabilities</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Change the ChatGPT model to use"</p>
                    <p className="infoText">"Message are stored in Firebase's Firestore"</p>
                    <p className="infoText">"Hot toast notifications when ChatGPT is thinking"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mt-3 mb-1">
                    <ExclamationTriangleIcon className="h-8 w-8"/>
                    <h2>Limitation</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"May occasionally generate incorrect information"</p>
                    <p className="infoText">"May occasionally product harmful instructions or biased content"</p>
                    <p className="infoText">"Limited knowledge of world and events after 2021"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage