"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaAngular, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiGithub, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiRabbitmq, SiDocker } from 'react-icons/si';

const about = {
    title: "About me",
    description: "with knowledge in back and front development, database management, deployments and communication between services\n" +
        "\n" +
        "Below you will find some of the services where I feel I can perform well given my background in the field of programming.",
    info: [
        {
            fieldName: "name",
            fieldValue: "Sergio Ismael Ayala Hernandez"
        },
        {
            fieldName: "Phone",
            fieldValue: "+57 324 559 65 21"
        },
        {
            fieldName: "Developer",
            fieldValue: "3 Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Colombian"
        },
        {
            fieldName: "Email",
            fieldValue: "sergio.ayala9208@gmail.com"
        },
        {
            fieldName: "Skills",
            fieldValue: "Backend / Front-End / DBA / Server"
        },
        {
            fieldName: "Lenguages",
            fieldValue: "Spanish"
        },
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Experience',
    description: '\n' +
        'This is my experience in work issues both in development and other areas where I have worked.',
    items: [
        {
            compant: "Linktic",
            position: "Developer in backend",
            duration: "Present"
        },
        {
            compant: "Axede",
            position: "Developer FullStack",
            duration: "6 Months"
        },
        {
            compant: "Aldeamo",
            position: "Developer FullStack",
            duration: "1 year / 3 Months"
        },
        {
            compant: "Don Eloy",
            position: "Logistics coordinator",
            duration: "7 years"
        }
    ]
};

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'Education',
    description: 'My studies done.',
    items: [
        {
            institution: "universitaria de Colombia",
            degree: "Software Enginiers",
            duration: "9 Semesters"
        },
        {
            institution: "Universidad Autónoma de Bucaramanga 2023",
            degree: "Técnico laboral en desarrollo web",
            duration: "12 Months"
        },
        {
            institution: "Sergio Arboleda",
            degree: "diplomas in software development",
            duration: "1 Year"
        },
        {
            institution: "Escuela Superior de Administración Pública",
            degree: "Ciencia de datos",
            duration: "3 Months"
        }
    ]
};

const skills = {
    title: "Skills",
    description: "Some of the technologies with which I operate in my field of web development",
    SkillLists: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "FaCss3"
        },
        {
            icon: <FaNodeJs />,
            name: "Node"
        },
        {
            icon: <FaReact />,
            name: "React"
        },
        {
            icon: <FaJava />,
            name: "JAVA"
        },
        {
            icon: <FaPython />,
            name: "Python"
        },
        {
            icon: <SiTailwindcss />,
            name: "SiTailwindcss"
        },
        {
            icon: <SiSpringboot />,
            name: "SpringBoot"
        },
        {
            icon: <SiMongodb />,
            name: "SpringBoot"
        },
        {
            icon: <SiMysql />,
            name: "SpringBoot"
        },
        {
            icon: <FaAngular />,
            name: "SpringBoot"
        },
        {
            icon: <FaJs />,
            name: "SpringBoot"
        },
        {
            icon: <SiRabbitmq />,
            name: "SpringBoot"
        },
        {
            icon: <SiPostgresql />,
            name: "SpringBoot"
        },
        {
            icon: <SiDocker />,
            name: "SpringBoot"
        },
        {
            icon: <SiGithub />,
            name: "SpringBoot"
        }

    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 0.4,
                ease: "easeIn"
            }
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
        <div className="container mx-auto">
            <Tabs
                defaultValue='experience'
                className='flex flex-col xl:flex-row gap-[60px]'>
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>
                <div className='min-h-[70vh] w-full'>
                    <TabsContent value="experience" className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{experience.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.compant}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    <TabsContent value="education" className="w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{education.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className='text-accent'>{item.institution}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.duration}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px}">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 text-4xl font-bold>{skills.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx.0'>{skills.description}</p>
                            </div>

                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]' >
                                {skills.SkillLists.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className='capitalize rounded-xl flex justify-center items-center group'>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                {about.info.map((item,index)=> {
                                    return(
                                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
}

export default Resume
