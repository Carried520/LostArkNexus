import path from "path";
import fs from "fs/promises";
import data from './raids.json'
async function getRaidsFolder() {
  const destinationDir = "raid";
  const dir = path.resolve("./public/", destinationDir);
  return dir;
}

export async function getRaidSheets(){

  const recordOfRaidSheets = data.reduce((acc : Record<string,string> , item) => {

    const indexer = item.name;
    acc[indexer] = item.link;
      return acc;
  } , {})

  return recordOfRaidSheets;
 
}

export async function getRaidGateImages(){
    const dir = await getRaidsFolder();
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