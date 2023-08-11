import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import discords from '../../components/lfg/discords.json'

export default function LookingForGroupPage(){
    
    return <div className="flex flex-col items-center justify-center gap-5 mt-5">
        {discords.map((item , index) => <Button variant="secondary" asChild className="w-[30%] text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2" key={index.toString()}>
            
            <Link className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-lg group" href={`https://discord.gg/${item.link}`}>
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">{item.name}</span>
            <span className="relative invisible"></span>
                </Link>
            </Button>)}
    </div>
}