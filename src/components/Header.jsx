import React, { useState, useEffect } from 'react';
import profile from '../assets/images/pp2.png';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    const [text, setText] = useState('');
    const myStatements = [
        'I am a Software Engineer',
        'Digital Marketer',
        'Technical Writer'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = myStatements[currentIndex];
        let timer;

        const type = () => {
            if (!isDeleting) {
                if (text.length < currentText.length) {
                    setText(currentText.slice(0, text.length + 1));
                } else {
                    timer = setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (text.length > 0) {
                    setText(text.slice(0, -1));
                } else {
                    setCurrentIndex((currentIndex + 1) % myStatements.length);
                    setIsDeleting(false);
                }
            }
        };

        timer = setTimeout(type, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [text, isDeleting, currentIndex]);

    return (
        <header className="bg-[#FFFFFF]">
            <div className="w-full mx-auto max-w-6xl px-4">
                <div className="flex flex-col">
                    <nav className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <span className="text-center text-[#5359B9] text-2xl font-extrabold">
                                Antony
                            </span>
                            <span className="text-center text-[#5359B9] px-2 bg-[#FFD43A] text-2xl font-extrabold leading-10">
                                Namu
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link to="/#skills" smooth>
                                <span className="text-gray-500 uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                                    skills
                                </span>
                            </Link>
                            <Link to="/#projects" smooth>
                                <span className="text-gray-500 uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                                    projects
                                </span>
                            </Link>
                            <Link to="/#about" smooth>
                                <span className="text-gray-500 uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                                    about me
                                </span>
                            </Link>
                            <Link to="/#contact" smooth>
                                <span className="text-gray-500 uppercase font-semibold cursor-pointer hover:text-[#FFD43A]">
                                    contact me
                                </span>
                            </Link>
                        </div>
                    </nav>

                    <div className="flex flex-col gap-[30px] items-center justify-center sm:flex-row">
                        <div className="w-full md:w-1/2 lg:w-2/3">
                            <h3 className="pb-[5px] text-[#5359B9] font-semibold text-lg">
                                Hello there,
                            </h3>
                            <h2 className="font-semibold text-lg pb-2 sm:text-3xl">
                                I'm
                            </h2>
                            <p className="text-2xl pb-2 font-bold sm:text-5xl">
                                Antony Namu .
                            </p>
                            <div className="h-[30px] flex items-center">
                                <p className="absolute w-full font-bold text-lg text-[#FFD43A] py-5 sm:text-3xl">
                                    {text}
                                </p>
                            </div>

                            {/* <p className="font-semibold leading-relaxed text-base">
                                    I specialize in crafting websites that are
                                    visually appealing, user-friendly, and
                                    optimized for conversion.
                                    <br />
                                    with passion in creating experiences that
                                    not only captivate audiences but also drive
                                    meaningful business results. <br />
                                </p> */}
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <img
                                src={profile}
                                className="max-w-full h-auto object-cover rounded-lg md:w-1/2 lg:w-full"
                                alt="Tech image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
