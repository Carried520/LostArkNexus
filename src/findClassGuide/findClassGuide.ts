import guides from "./guides.json";
export default function findClassGuide(className: string) {
  return guides.find(
    (item) => item.className.toLowerCase() == className.toLowerCase() || item.slugs.includes(className.toLowerCase())
  );
}
