import guides from './generalGuides.json'

type Guide = {
    name : string,
    link : string,
    aliases : string[]
}
export default function findGeneralGuide(name : string){
    return (guides as Guide[]).find((item) => item.name.toLowerCase() == name.toLowerCase() || item.aliases.includes(name.toLowerCase()));
}