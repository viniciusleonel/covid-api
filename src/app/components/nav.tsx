import Image from "next/image";
import Logo from "../../../images/prosesmt_logo.jpeg"
import { InputHTMLAttributes, ReactElement } from "react"
import Link from "next/link";

interface NavProps {
    input?: ReactElement<InputHTMLAttributes<HTMLInputElement>, any>
}

// Componente Nav que recebe um input como Prop para filtrar a lista exibida
export default function Nav({input} : NavProps) {

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-3 py-1 md:py-3 border-b-2 dark:border-b-2 border-cyan-700 bg-white">
        <div className="mx-3 flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
                <div className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]">
                <Image 
                    src={Logo}
                    alt="ProSESMT l=Logo"
                />
                </div>
                <Link 
                    className=" text-lg md:text-xl lg:text-2xl font-bold"
                    href={'https://prosesmt.com.br/site/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >ProSESMT</Link>
            </div>

            <div>
                <Link 
                    className="hidden xs:block text-lg md:text-xl lg:text-2xl font-bold"
                    href={'https://covid19-brazil-api-docs.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Covid-19 Api
                </Link>
            </div>

            <div className="w-1/3 xs:w-1/4 sm:w-1/5 md:w-1/6 lg:w-[15%]">
                {input}
            </div>

        </div>
        </nav>
    )
}