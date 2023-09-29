import { error } from "console";
import fs from "fs/promises";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { parse } from "node-html-parser";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    
    const folderId = "15bY2XReP3Qre2BuwdvUkozmU2J6ADHlN";
  if(!process.env.ENCODED_GOOGLE_JSON)
    throw error("Couldn't parse env variable");
  const credentials = JSON.parse(atob(process.env.ENCODED_GOOGLE_JSON));

  const auth = new google.auth.GoogleAuth({
    projectId : credentials.project_id,
    credentials : {
      client_id : credentials.client_id,
      private_key : credentials.private_key,
      client_email : credentials.client_email
      
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.appdata",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive.metadata",
      "https://www.googleapis.com/auth/drive.metadata.readonly",
      "https://www.googleapis.com/auth/drive.photos.readonly",
      "https://www.googleapis.com/auth/drive.readonly",
    ],
  });

  const drive = google.drive({ version: "v3", auth });
  const response = await drive.files.list({
    q: `'${folderId}' in parents`,
    fields: "files(id, name , exportLinks)",
  });

  response.data.files?.forEach(async (file) => {
    if (file?.exportLinks == undefined || file?.exportLinks == null) return;
    const htmlFormat = file?.exportLinks["text/html"];
    const download = await fetch(htmlFormat, { cache: "no-store" });
    const html = await download.text();
    const root = parse(html);
    const head = root.getElementsByTagName("head")[0];

    const styleElement = head.getElementsByTagName("style");
    const bodyCss = parse(`.doc-content{
      display: flex;
      flex-direction: column;
      margin: auto;
  }`);
    styleElement[0].appendChild(bodyCss);

    root
      .getElementsByTagName("img")
      .forEach((element) =>
        element.setAttribute("referrerpolicy", "noreferrer")
      );

    await fs.writeFile(`public/snapshots/${file.name}.html`, root!.toString());
  });

  const returnType = response.data.files?.map((file) => file.name);
  return NextResponse.json({ returnType });
  } catch (error) {
    console.log(error);
  }
  
}
