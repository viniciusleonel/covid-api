import Image from "next/image";
import Logo from "../../../images/vinicius.jpeg"
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
                <div className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] ">
                <Link 
                    className=" text-lg md:text-xl lg:text-2xl font-bold hover:text-cyan-700"
                    href={'https://www.linkedin.com/in/viniciuslps/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    ><Image 
                        className="rounded-full border-2 border-black"
                        src={Logo}
                        alt="Vinicius Profile Picture"
                    />
                </Link>
                
                </div>
                <Link 
                    className=" text-lg md:text-xl lg:text-2xl font-bold hover:text-cyan-700"
                    href={'https://github.com/viniciusleonel/covid-api'}
                    target="_blank"
                    rel="noopener noreferrer"
                >Vinicius Leonel
                </Link>
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