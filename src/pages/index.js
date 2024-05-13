import { Inter } from "next/font/google";
import linkedin from '../../public/linkedin-icon.png'
import github from '../../public/github-icon.png'
import email from '../../public/email-icon.png'
import resume from '../../public/resume-icon.png'
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col text-center items-center  justify-center p-40 ${inter.className} bg-[#FFFDF7]`}>
      <div>
        <h2 className="text-black font-bold text-3xl">Hi, my name is</h2>
        <h1 className="text-black font-bold text-6xl">Jay Park</h1>
        <h2 className="text-[#6798C0] font-bold text-3xl z-10">Product-First Software Engineer</h2>
      </div>
      
      <div className="textGroup w-screen flex justify-center mt-32">
        <div className="circlePosition w-3/4 h-60 bg-[#e865f4] rounded-[100%] absolute blur-[90px]"></div>
        <div className="w-7/12 h-60 flex  backdrop-blur-sm rounded-xl flex-col">
          <div className="bg-white/60 rounded-t-xl w-full h-11 flex justify-around items-center">
            <h2 className ="w-5/12" >links</h2>
            <div className="h-full bg-white/50 w-[2px] "></div>
            <h2 className ="w-5/12">about me</h2>
          </div>
          <div className="bg-white/30 rounded-b-xl flex gap-y-2 flex-col p-4">
        
            <div className="flex justify-center items-center h-6 gap-2">
              <Image className="object-contain w-4 h-4" src={linkedin} alt="LinkedIn Logo" />
              <h2 className="h-full text-center">linkedIn</h2>
            </div>
            <div className="flex justify-center items-center h-6 gap-2">
              <Image className="object-contain w-4 h-4" src={github} alt="GitHub Logo" />
              <h2 className="h-full text-center">github</h2>
            </div>
            <div className="flex justify-center items-center h-6 gap-2">
              <Image className="object-contain w-4 h-4" src={email} alt="Email Logo" />
              <h2 className="h-full text-center">email</h2>
            </div>
            <div className="flex justify-center items-center h-6 gap-2">
              <Image className="object-contain w-4 h-4" src={resume} alt="Resume Logo" />
              <h2 className="h-full text-center">resume</h2>
            </div>
          </div>
      </div>
      </div>
    </main>
  );
}
