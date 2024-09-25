import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xL:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Platform developers backend</span>
            <h1 className="h1 mb-6">Hello this a platform
              <br /> <span className="text-accent"> coursesBKD</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              We are a study platform for all people who want to learn about development in the backend field
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg"
                className="uppercase flex items-center gap-2 ">
                <span>Download Brouchure</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:" />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
