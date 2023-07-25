
import findGeneralGuide from "@/findGeneralGuide/findGeneralGuide";
import getInfographics from "@/getInfographics/getInfographics";
import { notFound , redirect} from "next/navigation";

export default async function Info({ params }: { params: { guideName: string } }){
    const guide = findGeneralGuide(params.guideName);
    if(guide)
        redirect(guide.link);
    const infographic = await getInfographics();
     if(infographic)
        redirect(`/infographics/${infographic[params.guideName]}`)
    return notFound();
}