import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className="h-screen bg-white">
      <div className="h-full flex justify-center items-center">
        <div className="space-y-10">
          <h1 className="text-black text-6xl text-center">DEMO APLIKASI SILAT</h1>
          <div className="flex flex-row space-x-4">
            <button className="bg-black w-[10rem] py-4 rounded-lg active:bg-gray-800 transition duration-200 ease-in-out active:scale-95" type="button" onClick={() => router.push('/admin')}>
              <h1 className="text-4xl uppercase text-white">Admin</h1>
            </button>
            <button className="bg-black w-[10rem] py-4 rounded-lg active:bg-gray-800 transition duration-200 ease-in-out active:scale-95" type="button" onClick={() => router.push('/dewan/gelanggang')}>
              <h1 className="text-4xl uppercase text-white">Dewan</h1>
            </button>
            <button className="bg-black w-[10rem] py-4 rounded-lg active:bg-gray-800 transition duration-200 ease-in-out active:scale-95" type="button" onClick={() => router.push('/juri/gelanggang')}>
              <h1 className="text-4xl uppercase text-white">juri</h1>
            </button>
            <button className="bg-black w-[10rem] py-4 rounded-lg active:bg-gray-800 transition duration-200 ease-in-out active:scale-95" type="button" onClick={() => router.push('/layar/gelanggang')}>
              <h1 className="text-4xl uppercase text-white">layar</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
