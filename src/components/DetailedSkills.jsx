import digital from '../assets/images/social-media.png';
import backend from '../assets/images/backend.png';
import waiter from '../assets/images/waiter.png';
import development from '../assets/images/development.png';
import seo from '../assets/images/seo.png';
import ecommerce from '../assets/images/cost-per-click.png';

const DetailedSkills = () => {
    return (
        <div className="bg-[#5359B9] sm:py-[60px]">
            <div className="w-full mx-auto max-w-6xl p-5">
                <div className="flex flex-col">
                    <h1 className="mb-5 text-lg font-semibold italic text-white sm:text-5xl sm:font-bold sm:mb-14">
                        Services We Offer
                    </h1>
                    <div className="flex flex-col gap-9 sm:grid sm:grid-cols-3">
                        <div className="flex flex-col mb-3">
                            <img
                                src={digital}
                                className="w-[25%] mb-4"
                                alt="digital image"
                            />
                            <h1 className="text-md font-medium mb-3">
                                Digital Marketing
                            </h1>
                            <p className="text-md font-light text-gray-300 mb-3">
                                At Aleton Services, we can mix a dash of
                                creativity with a spalsh of strategy to craft
                                marketing campaigns that not only grab attention
                                but also keep it. We make your online presence
                                unforgettable!
                            </p>
                        </div>
                        <div className="flex flex-col mb-3">
                            <img
                                src={backend}
                                className="w-[25%] mb-4"
                                alt="backend image"
                            />
                            <h1 className="text-md font-medium mb-3">
                                Web Development
                            </h1>
                            <p className="text-md font-light text-gray-300 mb-3">
                                Transform your online presence with Aleton's web
                                development wizadry! We don't just build
                                websites; we create digital experiences that
                                captivate and convert.
                            </p>
                        </div>
                        <div className="flex flex-col mb-3">
                            <img
                                src={waiter}
                                className="w-[25%] mb-4"
                                alt="backend image"
                            />
                            <h1 className="text-md font-medium mb-3">
                                Restaurant Marketing
                            </h1>
                            <p className="text-md font-light text-gray-300 mb-3">
                                Our marketing experts stir up a perfect blend of
                                mouth-watering marketing strategies and social
                                media sizzle to turn your tables into the place
                                everyone's talking about.
                            </p>
                        </div>
                        <div className="flex flex-col mb-3">
                            <img
                                src={development}
                                className="w-[25%] mb-4"
                                alt="backend image"
                            />
                            <h1 className="text-md font-medium mb-3">
                                Software Development
                            </h1>
                            <p className="text-md font-light text-gray-300 mb-3">
                                Looking to build software that not only works
                                but wow! At Aleton, we blend cutting-edge
                                technology with creative genius to develop
                                solutions that are so powerful as they are
                                user-friendly.
                            </p>
                        </div>
                        <div className="flex flex-col mb-3">
                            <img
                                src={seo}
                                className="w-[25%] mb-4"
                                alt="backend image"
                            />
                            <h1 className="text-md font-medium mb-3">SEO</h1>
                            <p className="text-md font-light text-gray-300 mb-3">
                                Aleton's SEO experts craft custom strategies
                                that boost your rankings and drive organic
                                traffic. Let's turn your online presence into a
                                magnetic force that attracts visitors and keep
                                them coming back for more!
                            </p>
                        </div>
                        <div className="flex flex-col mb-3">
                            <img
                                src={ecommerce}
                                className="w-[25%] mb-4"
                                alt="backend image"
                            />
                            <h1 className="text-md font-medium mb-3">
                                E-Commerce
                            </h1>
                            <p className="text-md font-light text-gray-300 mb-3">
                                We specialize in creating and optimizing Shopify
                                and WordPress sites, ensuring a smooth and
                                engaging shopping experience. From a sleek
                                Shopify store to a robust WordPress setup, we
                                provide customized solutions for your eCommerce
                                success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedSkills;
