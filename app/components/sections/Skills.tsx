import InfiniteScroll from "../InfiniteScroll";
import TextComponent from "../TextComponent";
import data from "@/public/data.json";

export default function SkillsSection() {
  const items: string[] = Object.values(data.skills).flatMap(
    (element) => element,
  );
  return (
    <section id="skills" className="my-12 max-w-[65rem] mx-auto">
      <TextComponent className="text-3xl my-5 font-bold underline">
        Skills & Tools
      </TextComponent>
      <InfiniteScroll
        className="my-10"
        items={[...items]}
        initial="0"
        animate="-100%"
      />
      <InfiniteScroll
        className="my-10"
        items={[...items]}
        initial="-100%"
        animate="0"
      />
    </section>
  );
}
