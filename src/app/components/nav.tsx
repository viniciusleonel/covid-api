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
        <nav className="fixed top-0 left-0 w-full z-50 px-3 py-1 md:py-3 border-b-2 dark:border-b-2 border-cyan-700  dark:border-cyan-400 bg-white dark:bg-dark-primary">
        <div className="mx-3 flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
                <Image 
                    height={50}
                    width={50}
                    src={Logo}
                    alt="ProSESMT l=Logo"
                />
                <Link 
                    className="text-2xl font-bold"
                    href={'https://prosesmt.com.br/site/'}
                    target="_blank"
                    rel="noopener noreferrer"
                >ProSESMT</Link>
            </div>

            <div>
                <Link 
                    className="text-2xl font-bold"
                    href={'https://covid19-brazil-api-docs.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Covid-19 Api
                </Link>
            </div>

            <div>
                {input}
            </div>

        </div>
        </nav>
    )
}