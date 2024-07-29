import project1 from '../assets/images/gym-pp.png';

const Projects = () => {
    return (
        <div className="bg-[#F9F9F9] py-[20px] sm:py-[60px]">
            <div className="w-full mx-auto max-w-6xl p-3">
                <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-between">
                    <div className="flex flex-col">
                        <h5 className="text-[#5359B9] font-bold text-sm pb-3 uppercase sm:text-lg sm:font-bold">
                            Featured Projects
                        </h5>
                        <h1 className="text-1xl pb-5 font-bold sm:text-5xl">
                            My Recent Projects
                        </h1>
                    </div>
                    <a href="#">
                        <button className="border border-gray-200 w-[170px] h-[50px] text-black font-medium  bg-inherit rounded-sm uppercase mb-[15px] hover:bg-[#5359B9] hover:text-white sm:w-[170px] sm:h-[50px]">
                            view all projects
                        </button>
                    </a>
                </div>
                <div className="flex flex-col bg-[#FFFFFF] justify-betweenpy-[20px] sm:flex sm:flex-row sm:justify-between sm:px-[30px] sm:py-[75px]">
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                        <img
                            src={project1}
                            alt="Gym project website"
                            className="w-full h-auto object-cover rounded-lg border-[18px] border-[#4C4D51]"
                        />
                    </div>

                    <div>
                        <div>
                            <span>#react</span>
                            <span>#design-to-code</span>
                            <span>#unsplash</span>
                        </div>
                        <h2>Fitclub Gym</h2>
                        <p>
                            A website where members can subscribe for
                            membership, and it shows the physical location of
                            the gym.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
