import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaXbox } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path:'https://github.com/SergioAyalaHernandez'},
    {icon: <FaLinkedinIn/>, path:'https://www.linkedin.com/in/sergio-ayala-50b7b0114/'},
    {icon: <FaYoutube/>, path:''},
    {icon: <FaXbox/>, path:''}
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((items, index)=>{
                return <Link
                key={index}
                href={items.path}
                className={iconStyles}
                >{items.icon}
                </Link>
            })}
        </div>
    )
}

export default Social