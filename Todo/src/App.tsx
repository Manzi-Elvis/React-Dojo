import MainLayout from "./components/MainLayout"
export default function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-white">
      <h1 className="text-[#ECECEC] font-bold text-9xl">todos</h1>
      <MainLayout/>
    </div>
  )
}