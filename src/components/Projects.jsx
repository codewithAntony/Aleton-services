const Projects = () => {
    return (
        <div className="bg-[#F9F9F9] py-[20px] sm:py-[60px]">
            <div className="w-full mx-auto max-w-6xl p-3">
                <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-[#5359B9] font-bold text-sm pb-3 uppercase sm:text-lg sm:font-bold">
                            Featured Projects
                        </h3>
                        <h1 className="text-1xl pb-5 font-bold sm:text-5xl">
                            My Recent Projects
                        </h1>
                    </div>
                    <a href="#">
                        <button className="border border-gray-200 w-[170px] h-[50px] text-black font-medium  bg-inherit rounded-sm uppercase hover:bg-[#5359B9] hover:text-white sm:w-[170px] sm:h-[50px]">
                            view all projects
                        </button>
                    </a>
                </div>
                <div className="py-[8px]"></div>
            </div>
        </div>
    );
};

export default Projects;
