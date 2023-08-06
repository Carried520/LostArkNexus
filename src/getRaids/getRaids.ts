import path from "path";
import fs from "fs/promises";
async function getRaidsFolder(dirName : string) {
  const destinationDir = "raids";
  const dir = path.resolve("./public/", destinationDir);
  const entries = await fs.readdir(dir);
  const matchingSubdirectory = entries.find(async (entry) => {
    const fullPath = path.join(dir, entry);
    const stats = await fs.stat(fullPath);
    return stats.isDirectory() && entry.toLowerCase() === dirName.toLowerCase();
  });

  if (matchingSubdirectory) {
    return path.join(dir, matchingSubdirectory);
  } else {
    return null;

  }
}

export default async function getRaidGateImages(dirName : string){
    const dir = await getRaidsFolder(dirName);
    if(!dir)
        return null;
    const fileNames = await fs.readdir(dir);
    const recordOfInfoGraphics = fileNames.reduce((acc : Record<string,string> , item) => {
        const indexer = path.parse(item).name;
        acc[indexer] = item;   
        return acc;
      } , {});
      return recordOfInfoGraphics;
}