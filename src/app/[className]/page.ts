import findClassGuide from "@/findClassGuide/findClassGuide";
import { notFound, redirect } from "next/navigation";

export default function ClassRedirect({ params }: { params: { className: string } }){
    const guide = findClassGuide(params.className);
    if(!guide)
        return notFound();
        
    redirect(guide.link);
}