import guides from "../findClassGuide/guides.json";

type GuideType = {
  name: string;
  link: string;
  aliases: string[];
};

export default async function findSheetGuide(guide: string, className: string) {
  const classEntity = guides.find(
    (item) => item.className == className || item.slugs.includes(className)
  );
  if (!classEntity) return undefined;

  const json = await import(`./classGuides/${classEntity.className}`).catch(
    (err) => undefined
  );
  const guideEntity: GuideType = json
    ? json.default.find(
        (item: { aliases: string[]; name: string }) =>
          item.name == guide || item.aliases.includes(guide)
      )
    : undefined;
  return guideEntity;
}
