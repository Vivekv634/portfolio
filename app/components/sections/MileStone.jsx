import TextComponent from "@/app/components/TextComponent";
import data from "@/app/data.json";
import DetailCard from "../DetailCard";

export default function MileStoneSection() {
  return (
    <section id="milestone-section" className="my-12 max-w-[65rem] mx-auto">
      <TextComponent className="text-3xl my-5 font-bold underline">
        My milestones
      </TextComponent>
      <div className="flex flex-row flex-wrap gap-7 justify-center md:mx-7 md:justify-start">
        {data.milestone.map((milestone, index) => {
          return <DetailCard work={milestone} w={450} h={350} key={index} />;
        })}
      </div>
    </section>
  );
}
