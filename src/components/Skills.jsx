function Skills() {
    return (
        <div className="bg-[#5359B9] sm:py-[70px]" id="skills">
            <div className="w-full mx-auto max-w-6xl p-5">
                <div className="flex flex-col gap-[30px] items-center justify-center sm:flex-row sm:gap-[190px]">
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <h2 className="text-[#FFD43A] font-semibold text-lg pb-[15px]">
                            About us & our work
                        </h2>
                        <h1 className="pb-[15px] text-white font-bold text-3xl">
                            Skills & Experience
                        </h1>
                        <p className="text-white font-medium pb-[25px]">
                            We have a deep passion for our work,fueled by the
                            desire to solve problems and create value. <br /> At
                            AleTon Services we are always looking for new
                            challenges and opportunities to grow and improve.
                        </p>
                        <p className="text-white font-medium pb-[16px]">
                            With our experience in Digital Marketing, through
                            SEO(Search Engine Optimization) we will help users
                            find your site and make a decision to find your
                            website.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex mb-5 gap-[40px]">
                            <div className="flex justify-center items-center w-[130px] bg-white h-[55px] rounded-sm text-black font-bold cursor-pointer sm:w-[280px] sm:h-[100px]">
                                Web Development
                            </div>
                            <div className="flex text-center justify-center items-center w-[130px] bg-white h-[55px] rounded-sm text-black font-bold cursor-pointer sm:w-[280px] sm:h-[100px]">
                                Website Design
                            </div>
                        </div>

                        <div className="flex mb-5 gap-[40px]">
                            <div className="flex justify-center items-center w-[130px] bg-white h-[55px] rounded-sm text-black font-bold cursor-pointer sm:w-[280px] sm:h-[100px]">
                                SEO
                            </div>
                            <div className="flex justify-center items-center w-[130px] bg-white h-[55px] rounded-sm text-black font-bold cursor-pointer sm:w-[280px] sm:h-[100px]">
                                Digital Marketing
                            </div>
                        </div>
                        <div className="flex mb-5 gap-[40px]">
                            <div className="flex justify-center items-center w-[130px] bg-white h-[55px] rounded-sm text-black font-bold cursor-pointer sm:w-[280px] sm:h-[100px]">
                                Social Media Marketing
                            </div>
                            <div className="flex justify-center items-center w-[130px] bg-white h-[55px] rounded-sm text-black font-bold cursor-pointer sm:w-[280px] sm:h-[100px]">
                                Mobile App Development
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
