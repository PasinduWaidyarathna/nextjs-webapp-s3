interface DisplayProps {
    input: string
    result: string
  }
  
  export default function Display({ input, result }: DisplayProps) {
    return (
      <div className="bg-white rounded-lg p-4 mb-4 shadow-inner">
        <div className="text-right">
          <div className="text-gray-600 text-lg h-7 overflow-x-auto whitespace-nowrap">{input || "0"}</div>
          <div className="text-3xl font-semibold text-gray-800 h-10 overflow-x-auto whitespace-nowrap">
            {result || "0"}
          </div>
        </div>
      </div>
    )
  }
  