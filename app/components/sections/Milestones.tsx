import TextComponent from "../TextComponent";
import data from "@/public/data.json";
import DisplayCard from "../DisplayCard";
import { DisplayTypes } from "@/app/types/display.types";

export default function MileStoneSection() {
  return (
    <section id="milestones" className="my-12 max-w-[65rem] mx-auto">
      <TextComponent className="text-3xl my-5 font-bold underline">
        My milestones
      </TextComponent>
      <div className="md:grid md:grid-cols-2 md:gap-4 flex gap-7 flex-wrap">
        {data.milestones.map((milestone: DisplayTypes, index: number) => {
          return (
            <DisplayCard display={milestone} type="milestones" key={index} />
          );
        })}
      </div>
    </section>
  );
}
