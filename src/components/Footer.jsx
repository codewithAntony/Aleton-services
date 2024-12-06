import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const footerPosition = document.body.scrollHeight;

        if (scrollPosition >= footerPosition - 50) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="bg-[#3C394A] h-auto py-[10px] sm:py-[60px]">
            <div
                className={`bottom-0 left-0 right-0 transform ${
                    showFooter ? 'translate-y-0' : 'translate-y-full'
                } transition-transform duration-500 ease-in-out w-full mx-auto p-3 max-w-6xl`}
            >
                <div className="flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-11">
                    <Link to="/#skills" smooth>
                        <span className="text-white uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                            skills
                        </span>
                    </Link>

                    <Link to="/#projects" smooth>
                        <span className="text-white uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                            projects
                        </span>
                    </Link>
                    <Link to="/#about" smooth>
                        <span className="text-white uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                            about me
                        </span>
                    </Link>
                    <Link to="/#contact" smooth>
                        <span className="text-white uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                            contact me
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
