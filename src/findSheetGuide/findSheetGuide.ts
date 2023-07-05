import sheets from './sheetGuides.json'
export default function findSheetGuide(searchKeyword : string){
    return sheets.find(item => item.redirect == searchKeyword || item.slugs.includes(searchKeyword));
}