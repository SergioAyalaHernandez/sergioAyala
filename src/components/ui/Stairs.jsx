import {animate, motion} from "framer-motion"


const stairAnimation = {
    initial:{
        top: "0%",
    },
    animate:{
        top: "100%"
    },
    exit:{
        top: ["100%", "0%"]
    }
};

const reverseIndex = (index)=>{
    const totalsteps = 6;
    return totalsteps - index - 1;
}

const Stairs = () =>{

    return (
        <>
        {[...Array(9)].map((_, index)=>{
           return(
            <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial = "initial"
            animate="animate" exit="exit" transition={{
                duration:0.1, 
                ease: "easeInOut",
                delay: reverseIndex(index)*0.05,
            }}
                className="h-full w-full bg-black relative" 
                />
           );
        })}
        </>
    )
    
}

export default Stairs;