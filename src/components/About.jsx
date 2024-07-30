function About() {
    return (
        <div className="bg-[#FFD43A] py-[55px]">
            <div className="w-full mx-auto p-3 max-w-6xl">
                <div className="flex flex-col sm:flex-row sm:gap-[190px]">
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <h2 className="text-[#5359B9] font-semibold text-lg pb-[15px]">
                            About us & our work
                        </h2>
                        <h1 className="pb-[15px] text-black font-bold text-3xl">
                            Think, Make, Solve
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col sm:flex sm:flex-row sm:gap-[30px]">
                    <div className="border border-gray-200 w-[320px] h-[180px] p-5 sm:w-[450px] sm:h-[220px] sm:p-10">
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quam beatae ratione voluptatibus consectetur
                            numquam voluptatum! Ut atque quisquam sint illum?
                        </p>
                    </div>
                    <div className="border  border-gray-200 w-[320px] h-[180px] p-5 sm:w-[450px] sm:h-[220px] sm:p-10">
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eos doloremque amet vel officiis libero autem
                            repudiandae sit totam aperiam error.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
