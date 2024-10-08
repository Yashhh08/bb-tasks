import FakeStore from "@/components/shared/FakeStore";
import FormSection from "@/components/shared/FormSection";
import ToggleTheme from "@/components/shared/ToggleTheme";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="h-[100vh] bg-mobile md:bg-desktop bg-cover bg-top md:bg-right 2xl:bg-center w-full md:w-11/12 m-auto dark:backdrop-invert"></div>

      <section>
        <FormSection />
      </section>

      <section className="flex justify-center items-center gap-3 border py-5 border-x-0 border-y-[#F9B31B] w-11/12 m-auto">
        Toggle Theme using context API
        <ToggleTheme />
      </section>

      <section>
        <FakeStore />
      </section>
    </div>
  );
}
