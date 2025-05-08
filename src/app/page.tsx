import Calculator from "@/components/Calculator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Simple Calculator</h1>
      <Calculator />
    </main>
  )
}
