import path from "path";
import fs from 'fs/promises'

async function getSnapShotDir(){
    const destinationDir = "snapshots";
    const dir = path.resolve("./public/", destinationDir);
    return dir;
}
export default async function getBackupGuides(){
    
    const filesInFolder = await fs.readdir(await getSnapShotDir());
    const recordOfSnapshots = filesInFolder.filter(file => path.parse(file).ext == '.html').reduce((acc : Record<string,string> , item) => {
        const fileName = path.parse(item).name;
        const indexer = fileName.slice(0 , fileName.indexOf(" ")).toLowerCase();
        acc[indexer] = item;   
        return acc;
      } , {});
      return recordOfSnapshots;
}