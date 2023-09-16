import ClassComponent from "@/components/ClassComponent/ClassComponent";
import { getClassInfo } from "@/components/ClassComponent/ClassComponentContent";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { className: string };
}): Promise<Metadata> {
  const { name, description, color } = getClassInfo(params.className);
  const title = `Lost Ark Nexus | ${name} Guide`;
  return {
    title: title,
    description: description,
    themeColor: color,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

export default function Page({ params }: { params: { className: string } }) {
  const capitalizedClass =
    params.className[0].toUpperCase() + params.className.slice(1);
  return <ClassComponent selectedClass={capitalizedClass} />;
}
