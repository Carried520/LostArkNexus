import findClassGuide from "@/findClassGuide/findClassGuide";
import findSheetGuide from "@/findSheetGuide/findSheetGuide";
import { notFound, redirect } from "next/navigation";

export default function ClassRedirect({ params }: { params: { className: string } }){
    const guide = findClassGuide(params.className);
    if(guide){
        redirect(guide.link);
    }
    const sheet = findSheetGuide(params.className);

    if(!guide && sheet)
    redirect(sheet.link);
    else
        return notFound();
}