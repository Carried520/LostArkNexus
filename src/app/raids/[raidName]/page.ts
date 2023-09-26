import { getRaidGateImages, getRaidSheets } from "@/getRaids/getRaids";
import { notFound, redirect } from "next/navigation";

export default async function GeneralRaidInfo({
  params,
}: {
  params: { raidName: string };
}) {
  const { raidName } = params;
  const sheets = await getRaidSheets();

  if (raidName.toLowerCase() in sheets) {
    redirect(sheets[raidName.toLowerCase()]);
  }

  const raids = await getRaidGateImages();
  if (!raids) return notFound();
  redirect(`/raid/${raids[raidName.toLowerCase()]}`);
}
