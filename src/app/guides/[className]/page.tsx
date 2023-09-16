import ClassComponent from "@/components/ClassComponent/ClassComponent";
import { getClassInfo } from "@/components/ClassComponent/ClassComponentContent";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
  {
    params,
  }: {
    params: { className: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { name, description, color } = getClassInfo(params.className);
  const title = `Lost Ark Nexus | ${name} Guide`;
  const parentOpenGraph = (await parent).openGraph || {};
  return {
    title: title,
    description: description,
    themeColor: color,
    openGraph: {
      title: title,
      description: description,
      ...parentOpenGraph,
    },
  };
}

export default function Page({ params }: { params: { className: string } }) {
  const capitalizedClass =
    params.className[0].toUpperCase() + params.className.slice(1);
  return <ClassComponent selectedClass={capitalizedClass} />;
}
