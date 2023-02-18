'use client'

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {

      
  let [ssr, setSsr] = useState(false)
  ssr = typeof window !== undefined ? false : true

  useEffect(() => {
    setSsr(ssr)
  },[])


  return (
    <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
  )
}

export default Providers