"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function DarkModeButton() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }
  
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div>
        {currentTheme === "dark" ? (
            <div className="chatRow justify-center" onClick={() => setTheme("light")}>
                <SunIcon
                className="h-5 w-5 cursor-pointer text-white"
                />
                <p className="flex-1 hidden md:inline-flex truncate">
                    Light Mode
                </p>
            </div>
        ) : (
            <div className="chatRow justify-center" onClick={() => setTheme("dark")}>
                <MoonIcon
                className="h-5 w-5 cursor-pointer text-white"
                />
                <p className="flex-1 hidden md:inline-flex truncate">
                    Dark Mode
                </p>
            </div>
        )}
    </div>
  )
}

export default DarkModeButton