import getBackupGuides from '@/getBackupRaids/getBackupRaids';
import { redirect } from 'next/navigation';

export default async function GeneralRaidInfo({
  params,
}: {
  params: { className: string };
}) {
    const guides = await getBackupGuides();
    redirect(`/snapshots/${guides[params.className.toLowerCase()]}`);
    
}



