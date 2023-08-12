import ClassComponent from "@/components/ClassComponent/ClassComponent";

export default function Page({ params }: { params: { className : string } }){
    const capitalizedClass = params.className[0].toUpperCase() + params.className.slice(1);
    return <ClassComponent selectedClass={capitalizedClass}/>
}