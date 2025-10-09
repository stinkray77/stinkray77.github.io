import * as React from 'react';
import { Link } from 'gatsby';
import type { NavbarContent } from "@/types/navbar";
import GatsbyLogo from "@/assets/svg/gatsby.svg";
import ReactLogo from "@/assets/svg/reactjs.svg";
import TailwindLogo from "@/assets/svg/tailwind.svg";
import ThemeToggler from '@/components/theme/dark-toggler';
import ContactButton from '../ui/contact-button';
import DynamicLink from '../ui/dynamic-link';
import { ThemeContext } from '../theme/theme-context';

const navbar: NavbarContent = {
    title: "My Portfolio",
    contact_buttons: [
        {
            svgName: "contact/github",
            link: "https://github.com"
        },
        {
            svgName: "contact/linkedin",
            link: "https://www.linkedin.com/in"
        }
    ]
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const { theme, toggleTheme } = React.useContext(ThemeContext)

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    const formatted = date.toLocaleDateString("en-US", options);

    return <>
        <body className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full py-3 sm:py-4 md:py-5">
                <nav className="max-w-7xl flex justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mr-5 md:mr-8">
                        <Link className="flex-none text-lg md:text-xl font-semibold dark:text-white" to="/">{navbar.title}</Link>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        {navbar.contact_buttons.map((value, i) => {
                            return <ContactButton key={i} svgName={value.svgName} link={value.link}>
                            </ContactButton>
                        })}
                    </div>
                </nav>
            </header>
            <main id="content" role="main" className='flex-1'>
                <nav className="z-10 sticky -top-px border-t border-b md:border-b-0 py-3 sm:py-4 md:py-5 -mt-px border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl snap-x w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className='flex text-sm md:text-base font-medium text-gray-700 dark:text-gray-400'>
                            <div className="snap-center shrink-0 pr-4 sm:pr-6 md:pr-8 hover:text-gray-500 dark:hover:text-gray-500">
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-yellow-600 to-rose-700 text-transparent dark:from-orange-400 dark:to-rose-500' className="inline-flex items-center" to="/skills">Skills</Link>
                            </div>
                            <div className="snap-center shrink-0 pr-4 sm:pr-6 md:pr-8 hover:text-gray-500 dark:hover:text-gray-500">
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-blue-700 to-emerald-600 text-transparent dark:from-blue-500 dark:to-emerald-400' className="inline-flex items-center" to="/projects">Projects</Link>
                            </div>
                            <div className="snap-center shrink-0 pr-4 sm:pr-6 md:pr-8 hover:text-gray-500 dark:hover:text-gray-500">
                                <Link activeClassName='bg-clip-text bg-gradient-to-l from-pink-700 to-indigo-600 text-transparent dark:from-pink-500 dark:to-indigo-600' className="inline-flex items-center" to="/experiences">Experiences</Link>
                            </div>
                            {navbar.external_links && navbar.external_links.map((value) => {
                                return <div className="snap-center shrink-0 pr-4 sm:pr-6 md:pr-8 hover:text-gray-500 dark:hover:text-gray-500">
                                    <DynamicLink link={value.link} asset={value.asset} text={value.title} />
                                </div>
                            })}
                        </div>
                        <ThemeToggler theme={theme} toggleTheme={toggleTheme}></ThemeToggler>
                    </div>
                </nav>
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                    {children}
                </div>
            </main>
            <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center text-gray-600 dark:text-gray-400">
                    <p >Last updated on {formatted}</p>
                    <p >Crafted and deployed using these technologies</p>
                    <div className="mt-3 space-x-2 flex items-center justify-center">
                        <a aria-label="gatsbyjs" href="https://www.gatsbyjs.com" className="inline-flex justify-center items-center w-10 h-10 
                                text-center text-gray-600 hover:bg-gray-100 rounded-full 
                                focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition 
                                dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                            <GatsbyLogo className="w-4 h-4" />
                        </a>
                        <a aria-label="react" href="https://react.dev" className="inline-flex justify-center items-center w-10 h-10 
                                text-center text-gray-600 hover:bg-gray-100 rounded-full 
                                focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition 
                                dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                            <ReactLogo className="w-4 h-4" />
                        </a>
                        <a aria-label="tailwind" href="https://tailwindcss.com" className="inline-flex justify-center items-center w-10 h-10 
                                text-center text-gray-600 hover:bg-gray-100 rounded-full 
                                focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition 
                                dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800" >
                            <TailwindLogo className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </footer>
        </body >

    </>
}

export default HomeLayout