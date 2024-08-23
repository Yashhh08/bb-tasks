import FormSection from "@/components/shared/FormSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="h-[85vh] bg-mobile md:bg-desktop bg-cover bg-top md:bg-right 2xl:bg-center w-11/12 md:w-3/4 m-auto"></div>

      <section>
        <FormSection />
      </section>

      <section className="h-[50vh]"></section>
    </div>
  );
}
