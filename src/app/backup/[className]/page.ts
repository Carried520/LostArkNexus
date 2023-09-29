import getBackupGuides from '@/getBackupRaids/getBackupRaids';
import { notFound, redirect } from 'next/navigation';

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



