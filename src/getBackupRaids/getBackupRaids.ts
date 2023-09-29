import path from "path";
import fs from 'fs/promises'

export default async function getBackupGuides(){
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