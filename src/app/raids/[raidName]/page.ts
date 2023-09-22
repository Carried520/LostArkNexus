import { getRaidSheets } from "@/getRaids/getRaids";
import { notFound, redirect } from "next/navigation";

export default async function GeneralRaidInfo({
  params,
}: {
  params: { raidName: string };
}) {
  const { raidName } = params;
  const sheets = await getRaidSheets();

  console.log(sheets);
 
  if (raidName.toLowerCase() in sheets) {
    redirect(sheets[raidName.toLowerCase()]);
  }

  return notFound();

}
