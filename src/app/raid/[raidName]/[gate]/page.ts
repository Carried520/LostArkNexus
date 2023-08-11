import getRaidGateImages from "@/getRaids/getRaids";
import { notFound, redirect } from "next/navigation";

export default async function Raids({ params }: { params: { raidName: string , gate : string } }){
    const {raidName , gate} = params;
    const raids = await getRaidGateImages(raidName);
    if(!raids)
        return notFound();
    redirect(`/raids/${raidName}/${raids[gate]}`);
}