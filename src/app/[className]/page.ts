'use client'
import findGuide from "@/findGuide/findGuide";
import { useRouter } from "next/navigation";

export default function ClassRedirect({ params }: { params: { className: string } }){
    const router = useRouter();
    const guide = findGuide(params.className);
    if(!guide)
    return;
    router.push(`${guide.link}`);
}