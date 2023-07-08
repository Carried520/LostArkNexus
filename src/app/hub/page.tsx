'use client'

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  router.push('https://docs.google.com/document/d/1APWVyq77z2flMCc06_cqUnrNKee1U99p7R4XZe5FYV0/edit');
}
