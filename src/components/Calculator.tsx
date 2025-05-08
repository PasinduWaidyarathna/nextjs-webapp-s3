"use client"

import { useState } from "react"
import Display from "./Display"
import ButtonGrid from "./button-grid"

export default function Calculator() {
  const [input, setInput] = useState<string>("")
  const [result, setResult] = useState<string>("")

  const handleButtonClick = (value: string) => {
    switch (value) {
      case "=":
        try {
          // Using Function constructor to safely evaluate the expression
          const calculatedResult = new Function(`return ${input}`)()
          setResult(String(calculatedResult))
        } catch (error) {
          setResult("Error")
        }
        break
      case "C":
        setInput("")
        setResult("")
        break
      case "←":
        setInput(input.slice(0, -1))
        break
      default:
        setInput((prev) => prev + value)
        break
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-5 bg-gradient-to-r from-gray-100 to-gray-200">
        <Display input={input} result={result} />
      </div>
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  )
}
