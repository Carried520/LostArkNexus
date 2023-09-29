import fs from 'fs/promises'
import { notFound, redirect } from 'next/navigation';
import path from 'path';
export default async function GeneralRaidInfo({
  params,
}: {
  params: { className: string };
}) {
    const guides = await getBackupGuides();
    if(params.className in guides){
        redirect(`/snapshots/${guides[params.className.toLowerCase()]}`);
    }
    return notFound();
    
}


async function getBackupGuides(){
    const destinationDir = "snapshots";
    const dir = path.resolve("./public/", destinationDir);
    const filesInFolder = await fs.readdir(dir);
    const recordOfSnapshots = filesInFolder.reduce((acc : Record<string,string> , item) => {
        const fileName = path.parse(item).name;
        const indexer = fileName.slice(0 , fileName.indexOf(" ")).toLowerCase();
        acc[indexer] = item;   
        return acc;
      } , {});
      return recordOfSnapshots;
}
