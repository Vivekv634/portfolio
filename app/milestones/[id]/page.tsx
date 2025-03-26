import DisplayComponent from "@/app/components/DisplayComponent";

export default async function MilestoneSlug({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <section className="container px-2 md:px-0 mx-auto my-10 max-w-3xl">
      <DisplayComponent id={id} type="milestones" />
    </section>
  );
}
