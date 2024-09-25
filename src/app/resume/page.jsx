"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const about = {
    title: "About me",
    description: "We are a platform focused on teaching in the IT Area",
    info: [
        {
            fieldName: "name",
            fieldValue: "CoursesBKD"
        },
        {
            fieldName: "Phone",
            fieldValue: "+57 324 559 65 21"
        },
        {
            fieldName: "Experience",
            fieldValue: "L5 Years"
        },
        {
            fieldName: "Skype",
            fieldValue: "Courses.01"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Colombian"
        },
        {
            fieldName: "Email",
            fieldValue: "info-curso-back@coursesbkd.edu.com"
        },
        {
            fieldName: "Courses",
            fieldValue: "Backend / Front-End / FullStack / DBA / Server"
        },
        {
            fieldName: "Lenguages",
            fieldValue: "Spanish / English"
        },
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'CoursesBKD',
    description: 'We are a platform focused on the software development and IT learning area.',
    items: [
        {
            compant: "coursesBKD.con",
            position: "Developers in POO",
            duration: "6 Months"
        },
        {
            compant: "coursesBKD.con",
            position: "Developers in Database Connection",
            duration: "1 year"
        },
        {
            compant: "coursesBKD.con",
            position: "Developers in API REST FULL",
            duration: "1 year / 6 Months"
        },
        {
            compant: "coursesBKD.con",
            position: "Developers in Testing with API",
            duration: "2 year"
        },
        {
            compant: "coursesBKD.con",
            position: "Developers in Design web",
            duration: "2 year / 6 Months"
        },
        {
            compant: "coursesBKD.con",
            position: "Developers FullStack",
            duration: "3 year"
        }
    ]
};

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'CoursesBKD Education',
    description: 'We offer accessible education for each person interested in learning new Technologies, promoting professional careers.',
    items: [
        {
            institution: "universitaria de Colombia",
            degree: "Software Enginiers",
            duration: "2024"
        },
        {
            institution: "CUN",
            degree: "Sistems Enginiers",
            duration: "2024"
        },
        {
            institution: "Universidad Pontificica Javeriana",
            degree: "Software Enginiers specialization",
            duration: "2024"
        },
        {
            institution: "universidad Distrital",
            degree: "Software Enginiers Magister",
            duration: "2024"
        }
    ]
};

const skills = {
    title: "Ours Skills",
    description: "Lorem ipsum",
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
            icon: <FaJs />,
            name: "FaJs"
        },
        {
            icon: <FaReact />,
            name: "FaReact"
        },
        {
            icon: <FaFigma />,
            name: "FaFigma"
        },
        {
            icon: <FaHtml5 />,
            name: "FaNodeJs"
        },
        {
            icon: <SiTailwindcss />,
            name: "SiTailwindcss"
        },
        {
            icon: <SiNextdotjs />,
            name: "SiNextdotjs"
        },
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
