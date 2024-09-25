import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import {Button} from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xL:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Developer Backend</span>
                        <h1 className="h1 mb-6">Hello i'm
                            <br/> <span className="text-accent">Sergio Ayala</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            software engineering student, Fullstack developer, angular and react frontend, Java Spring
                            boot and node Backend
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <a href="/assets/sergio-ayala.pdf" download="hoja-de-vida-sergio-ayala.pdf">
                                <Button variant="outline" size="lg"
                                        className="uppercase flex items-center gap-2 ">
                                    <span>Download CV</span>
                                    <FiDownload className="text-xl"/>
                                </Button>
                            </a>
                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:"/>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
}
