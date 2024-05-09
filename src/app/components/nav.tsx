import Image from "next/image";
import Logo from "../../../images/prosesmt_logo.jpeg"

export default function Nav() {

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-3 py-1 md:py-3 border-b-2 dark:border-b-2 border-cyan-700  dark:border-cyan-400 bg-white dark:bg-dark-primary">
        <div className="mx-3 flex justify-between items-center">
            <div className="flex items-center justify-center gap-4">
                <Image 
                    height={50}
                    width={50}
                    src={Logo}
                    alt="ProSESMT l=Logo"
                />
                <h1 
                    className="text-2xl font-bold"
                >ProSESMT</h1>
            </div>

        </div>
        </nav>
    )
}