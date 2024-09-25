import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "./Nav"
import MovilNav from "./MovilNav";
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        coursesBKD<span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="http://localhost:4200/login">
                        <Button>Get to know our platform</Button>
                    </Link>
                </div>
                <div className="xl:hidden">
                    <MovilNav />
                </div>
            </div>

        </header>
    )
}
export default Header