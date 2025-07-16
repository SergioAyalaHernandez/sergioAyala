"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Contáctame por correo",
        description: "Haz clic para enviarme un correo directamente desde tu cliente de email.",
        href: "mailto:sergio@example.com?subject=Contacto&body=Hola Sergio, me gustaría...",
        external: true
    },
    {
        num: "02",
        title: "Ubicación",
        description: "Institución Universitaria de Colombia. Mira en el mapa dónde puedes encontrarme.",
        type: "map"
    }
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        if (service.type === "map") {
                            return (
                                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                            {service.num}
                                        </div>
                                    </div>
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                        {service.title}
                                    </h2>
                                    <p className="text-white/60">{service.description}</p>
                                    <div className="w-full">
                                        <iframe
                                            className="w-full h-[300px] rounded-xl border border-white/20"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.842157903233!2d-74.07133564352992!3d4.622234582399901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f998638900001%3A0x4cc62e7676fc1a91!2sInstituci%C3%B3n%20Universitaria%20de%20Colombia!5e0!3m2!1ses!2sco!4v1752696194943!5m2!1ses!2sco"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        target={service.external ? "_blank" : "_self"}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
