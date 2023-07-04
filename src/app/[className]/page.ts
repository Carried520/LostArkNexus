import findGuide from "@/findGuide/findGuide";
import { redirect } from "next/navigation";

export default async function ClassRedirect({ params }: { params: { className: string } }){
    const guide = findGuide(params.className);
    if(!guide)
    return;
    redirect(`${guide.link}`);
}