import Link from "next/link"
import DarkMode from "../DarkMode/DarkMode"

const Header = () => {
    return (
        <header style={{backgroundImage: "linear-gradient(circle, #c3b92e, #68140e)"}} className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                {/* <img style={{width:"7rem", height: "7rem"}} className="object-cover object-center rounded" alt="logo" src="/images/mainLogo.png" /> */}
                </a>
                <Link href="/" className="ml-3 text-xl hover:text-white">SungHee</Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-white">
                        Home
                    </Link>
                    <Link href="https://chopssal.tistory.com/" className="mr-5 hover:text-white">
                        Blog
                    </Link>
                    <Link href="https://github.com/Kimsunghee3" className="mr-5 hover:text-white">
                        Github
                    </Link>
                    <Link href="https://open.kakao.com/o/s2ZkMDCf" className="mr-5 hover:text-white">
                        Contact
                    </Link>
                </nav>
                <DarkMode/>
            </div>
        </header>
    )
}

export default Header 