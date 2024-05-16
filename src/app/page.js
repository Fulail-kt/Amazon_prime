import Image from "next/image";
import Navbar from "./components/navbar";
import img from '../../public/images/herobg.jpg'
export default function Home() {
  return (
    <main className=" min-h-screen ">

      <div className="w-full bg-red-400">
        <Navbar/>
      </div>
      <div className="h-screen justify-start bg-hero-bg1 bg-no-repeat flex-1 bg-right w-full">
      <div className="bg-black h-full flex  flex-col gap-y-8 p-10 w-full "
     >
         <h1 className="text-4xl tracking-wide">Welcome to Prime Video</h1>
         <p className="text-xl">Join Prime to watch the latest movies, TV shows and award- <br/> winning Amazon Originals</p>
         <div className="py-4"><button className="bg-blue-500 px-14 py-3 rounded-sm">sign in to join Prime</button></div>
      </div>
    </div>


    </main>
  );
}
