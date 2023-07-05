import findClassGuide from "@/findClassGuide/findClassGuide";
import findSheetGuide from "@/findSheetGuide/findSheetGuide";
import { notFound, redirect } from "next/navigation";

export default function ClassRedirect({ params }: { params: { className: string } }){
    const guide = findClassGuide(params.className);
    let link = guide ? guide.link : '';
    const sheetGuide = findSheetGuide(params.className);
    link = link == '' && sheetGuide ? sheetGuide.link : ''; 
    if(link == '')
        return notFound();
    
    redirect(link);
}