import { notFound, redirect } from 'next/navigation';
import findSheetGuide from '@/findSheetGuide/findSheetGuide';

export default async function Page({ params }: { params: { className: string , sheetName : string } }) {
  const sheetGuide = await findSheetGuide(params.sheetName , params.className);
  if(!sheetGuide)
    return notFound();
  redirect(sheetGuide.link);
}