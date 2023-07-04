import guides from './guides.json'
export default function findGuide(className : string){
    return guides.find(item => item.classNames.includes(className));
}