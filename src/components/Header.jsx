import tech from '../assets/images/tech-pic.svg';

function Header() {
    return (
        <header className="bg-[#FFFFFF] pb-[55px]">
            <div className="w-full mx-auto max-w-6xl">
                <div className="flex flex-col pt-[10px] mx-[20px]">
                    <div className="md:flex md:flex-col ">
                        <div className="flex flex-col py-8 justify-center items-center bg-[#FFD43A] w-16 h-10 mb-[45px] cursor-pointer sm:mb-[85px] sm:w-20">
                            <span className="text-center text-[#5359B9] font-bold">
                                AleTon
                            </span>
                            <span className="text-center text-[#5359B9] font-bold">
                                Services
                            </span>
                        </div>
                        <div className="flex flex-col gap-[30px] items-center justify-center sm:flex-row">
                            <div className="w-full md:w-1/2 lg:w-2/3">
                                <h3 className="pb-[5px] text-[#5359B9] font-semibold text-lg">
                                    Hello there,
                                </h3>
                                <p className="font-semibold leading-relaxed text-base">
                                    We at AleTon Services we provide Web
                                    Designing and Digital Marketing services,{' '}
                                    <br /> with passion in creating experiences
                                    that not only captivate audiences but also
                                    drive meaningful business results. <br /> We
                                    specialize in crafting websites that are
                                    visually appealing, user-friendly, and
                                    optimizes for conversion.
                                    <br />
                                    For your digital marketing services, we will
                                    help you run your Social Media pages, so as
                                    to attract clients, leading to increased
                                    sales for your products.
                                </p>
                            </div>
                            <div className=" w-full md:w-1/2 lg:w-1/3">
                                <img
                                    src={tech}
                                    className="max-w-full h-auto object-cover rounded-lg md:w-1/2 lg:w-full"
                                    alt="Tech image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
