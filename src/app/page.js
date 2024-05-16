import Image from "next/image";
import Navbar from "./components/navbar";
import { images } from "./constants/constant";
import img from '../../public/images/hero3bg.jpg'
import Footer from "./components/Footer";




export default function Home() {
  return (
    <main className=" min-h-screen ">

      <div className="w-full bg-red-400">
        <Navbar />
      </div>
      <div className="h-screen justify-start bg-hero-bg1 bg-no-repeat flex-1 bg-right w-full">
        <div className="bg-black-gradient h-full flex  flex-col gap-y-8 p-10 w-full ">
          <h1 className="text-4xl tracking-wide font-bold">Welcome to Prime Video</h1>
          <p className="text-xl">Join Prime to watch the latest movies, TV shows and award- <br /> winning Amazon Originals</p>
          <div className="py-4"><button className="bg-blue-500 w-72 py-3 rounded-sm font-bold">sign in to join Prime</button></div>
        </div>
      </div>


      <div className="h-screen overflow-y-hidden justify-start bg-hero-bg2 bg-no-repeat flex-1 bg-right w-full">
        <div className="bg-black-gradient h-full flex tracking-wide flex-col gap-y-8 p-10 w-full ">
          <h1 className="text-4xl font-bold">Movie rentals on Prime Video</h1>
          <p className="text-xl">Early Access to new movies, before digital subscription</p>
          <div className="py-4"><button className="bg-blue-500 w-72 py-3 font-bold rounded-sm">Rent now</button></div>
        </div>
      </div>
      <div className="bg-white flex px-16 text-black h-100  w-full">
        <div className="w-1/2 py-10  flex flex-col gap-6">
          <h1 className="text-[38px] font-extrabold" >Your favorite channels all <br /> in one place</h1>
          <p className="text-xl font-medium tracking-wider">With Prime Video Channels, find shows and <br /> movies from your favorite channels all in one<br /> place. Enjoy with an add-on subscription to<br /> Channels of your choice</p>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-3 p-2 gap-1">
            {images.map((item, index) => (
              <Image key={index} className="hover:shadow-lg shadow hover:shadow-black " src={item?.img} />
            ))}
          </div>
        </div>
      </div>

      <div className="h-screen  bg-black justify-end  bg-hero-bg3 bg-no-repeat flex bg-left w-full">
      <div className="bg-black-gradientleft  h-full flex tracking-wide  flex-col gap-y-8 p-10  ">
          <h1 className="text-4xl font-bold">Even better with Fire TV Stick</h1>
          <p className="text-xl">The biggest movies and TV shows are always better on a big<br/> screen. Simply plug in your Amazon Fire TV Stick and stream on <br/> any HDTV. Press the voice button on the remote and say the name<br/> of the title you want to watch to find it in seconds.</p>
          <div className="py-4"><button className="bg-blue-500 w-72 py-3 font-bold rounded-sm">Get started</button></div>
        </div>
      </div>

<Footer/>
    </main>
  );
}
