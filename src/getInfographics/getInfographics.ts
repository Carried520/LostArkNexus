import path from "path";
import fs from 'fs/promises'

export default async function getInfographics() {
  const destinationDir = "infographics";
  const dir = path.resolve("./public/", destinationDir);
  const fileNames = await fs.readdir(dir);
  const recordOfInfoGraphics =  fileNames.reduce((acc : Record<string,string> , item) => {
    const indexer = path.parse(item).name;
    acc[indexer] = item;   
    return acc;
  } , {});
  return recordOfInfoGraphics;
}
