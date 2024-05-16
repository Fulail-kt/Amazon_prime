import Image from "next/image";
import Navbar from "./components/navbar";
// import { images } from "./constants/constant";

import lionsgate from '../../public/images/lionsgate.jpg'
import discovery from '../../public/images/discovery.jpg'
import bbc from '../../public/images/bbc.png'
import manorama from '../../public/images/manorama.jpg'
import hoichoi from '../../public/images/hoichoi.jpg'
import chaupal from '../../public/images/chaupal.png'
import anime from '../../public/images/anime.jpg'
import sony from '../../public/images/sony.png'
import mgm from '../../public/images/mgm.png'
import vrott from '../../public/images/vrott.png'
import erosnow from '../../public/images/erosnow.jpg'
import stingray from '../../public/images/stingray.png'

const images=[
  {img:lionsgate},
  {img:discovery},
  {img:bbc},
  {img:manorama},
  {img:hoichoi},
  {img:chaupal},
  {img:anime},
  {img:sony},
  {img:mgm},
  {img:vrott},
  {img:erosnow},
  {img:stingray},
]
export default function Home() {
  return (
    <main className=" min-h-screen ">

      <div className="w-full bg-red-400">
        <Navbar/>
      </div>
      <div className="h-screen justify-start bg-hero-bg1 bg-no-repeat flex-1 bg-right w-full">
      <div className="bg-black-gradient h-full flex  flex-col gap-y-8 p-10 w-full ">
         <h1 className="text-4xl tracking-wide">Welcome to Prime Video</h1>
         <p className="text-xl">Join Prime to watch the latest movies, TV shows and award- <br/> winning Amazon Originals</p>
         <div className="py-4"><button className="bg-blue-500 px-14 py-3 rounded-sm">sign in to join Prime</button></div>
      </div>
    </div>


    <div className="h-screen overflow-y-hidden justify-start bg-hero-bg2 bg-no-repeat flex-1 bg-right w-full">
      <div className="bg-black-gradient h-full flex tracking-wide flex-col gap-y-8 p-10 w-full ">
         <h1 className="text-4xl ">Movie rentals on Prime Video</h1>
         <p className="text-xl">Join Prime to watch the latest movies, TV shows and award- <br/> winning Amazon Originals</p>
         <div className="py-4"><button className="bg-blue-500 px-14 py-3 rounded-sm">sign in to join Prime</button></div>
      </div>
    </div>
    <div className="bg-white flex px-16 text-black h-100  w-full">
       <div className="w-1/2 py-10  flex flex-col gap-6">
        <h1 className="text-[38px] font-extrabold" >Your favorite channels all <br/> in one place</h1>
        <p className="text-xl font-medium tracking-wider">With Prime Video Channels, find shows and <br/> movies from your favorite channels all in one<br/> place. Enjoy with an add-on subscription to<br/> Channels of your choice</p>
       </div>
       <div className="w-1/2">
       <div className="grid grid-cols-3 p-2 gap-1">
        {images.map((item,index)=>(
          <Image key={index} className="hover:shadow-lg shadow hover:shadow-black " src={item?.img}/>
       ))}
       </div>
       </div>
       
    </div>
   

    </main>
  );
}
