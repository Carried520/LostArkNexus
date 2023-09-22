
import { getRaidGateImages , getRaidSheets } from "@/getRaids/getRaids";
import { notFound, redirect } from "next/navigation";

export default async function Raids({ params }: { params: { raidName: string , query : string } }){
    const {raidName , query} = params;

    const sheets = await getRaidSheets(raidName);

    if(query in sheets){
        redirect(sheets[query.toLowerCase()]);
    }
        
    const raids = await getRaidGateImages(raidName.toLowerCase());
    if(!raids)
        return notFound();
    redirect(`/raid/${raidName.toLowerCase()}/${raids[query.toLowerCase()]}`);
}