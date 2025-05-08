"use client"

interface ButtonGridProps {
  onButtonClick: (value: string) => void
}

export default function ButtonGrid({ onButtonClick }: ButtonGridProps) {
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C", "←"]

  const getButtonClass = (button: string) => {
    const baseClass =
      "text-xl font-medium rounded-lg transition-colors duration-200 flex items-center justify-center h-14"

    if (button === "=") {
      return `${baseClass} bg-blue-500 hover:bg-blue-600 text-white col-span-1`
    } else if (button === "C") {
      return `${baseClass} bg-red-500 hover:bg-red-600 text-white col-span-1`
    } else if (button === "←") {
      return `${baseClass} bg-yellow-500 hover:bg-yellow-600 text-white col-span-1`
    } else if (["+", "-", "*", "/"].includes(button)) {
      return `${baseClass} bg-gray-200 hover:bg-gray-300 text-gray-800`
    } else {
      return `${baseClass} bg-gray-100 hover:bg-gray-200 text-gray-800`
    }
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-5">
      {buttons.map((button) => (
        <button key={button} className={getButtonClass(button)} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  )
}
