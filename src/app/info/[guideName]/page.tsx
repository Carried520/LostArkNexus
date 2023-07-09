import findGeneralGuide from "@/findGeneralGuide/findGeneralGuide";
import { notFound , redirect} from "next/navigation";


export default function Info({ params }: { params: { guideName: string } }){
    const guide = findGeneralGuide(params.guideName);
    if(!guide)
        return notFound();
    redirect(guide.link);
}