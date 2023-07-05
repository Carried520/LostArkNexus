import guides from "./guides.json";
export default function findClassGuide(className: string) {
  return guides.find(
    (item) => item.className == className || item.slugs.includes(className)
  );
}
