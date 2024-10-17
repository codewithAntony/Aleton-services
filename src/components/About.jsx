import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMessage } from '@fortawesome/free-regular-svg-icons';
import {
    faGithub,
    faLinkedinIn,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

function About() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_lyma1i1',
                'template_rcd8kkk',
                form.current,
                'C4huoqoqXk3UaVF91'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Email sent Successfully!');
                },
                (error) => {
                    console.log(error.text);
                    alert('An error occurred, please try again');
                }
            );
    };
    return (
        <div className="bg-[#FFD43A] py-[20px] sm:py-[40px]">
            <div className="w-full mx-auto p-3 max-w-6xl" id="about">
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
                <div className="flex flex-col justify-center gap-10 items-center py-8 sm:flex sm:flex-row sm:gap-[40px]">
                    <div className="flex flex-col justify-center border border-black w-[320px] h-[330px]  p-5 hover:bg-white md:w-[600px] md:h-[280px] md:p-10">
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
                        <p className="py-3">
                            Our mission as Software Engineers is to deliver
                            elegant and efficient solutions that translate Good
                            Design into Good Business and even better user
                            experiences.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border border-black w-[320px] h-[330px] p-5 md:w-[600px] md:h-[280px] md:p-10 hover:bg-white">
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
                        <p className="py-3">
                            With our experience in running Social Media
                            Accounts, we will sure help you manage your social
                            apps, it could be your Facebook, Instagram, Tiktok
                            or any other social media app.
                            <br />
                            We can help you grow your accounts or push your
                            products to the target audience and increase your
                            reach to potential clients.
                        </p>
                    </div>
                </div>
                <div
                    className="bg-white rounded-sm py-[60px] my-[30px]"
                    id="contact"
                >
                    <div className="flex flex-col items-center gap-7 justify-evenly p-3 sm:flex sm:flex-row sm:p-7">
                        <div className="flex flex-col">
                            <h5 className="text-[#5359B9] font-semibold text-lg pb-[15px]">
                                Like what you see?
                            </h5>
                            <h1 className="pb-[15px] text-black font-bold text-3xl">
                                Lets Work Together
                            </h1>
                            <p className="text-gray-500 font-medium">
                                We are currently available for work, <br /> so
                                if you'd like to discuss any projects <br /> you
                                can reach us through any of the <br /> available
                                contact information.
                            </p>
                        </div>

                        <div className="flex flex-col gap-7">
                            <div className="flex items-center gap-5">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="w-[20px] h-[20px] text-[#5359B9]  dark:text-white"
                                />

                                <button
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="font-semibold cursor-pointer"
                                >
                                    antonymurithi51@gmail.com
                                </button>
                            </div>
                            <div className="flex items-center gap-5">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    className="w-[20px] h-[20px] text-[#5359B9]  dark:text-white"
                                />
                                <a href="#">
                                    <p className="cursor-pointer font-semibold">
                                        +254 725 010 898
                                    </p>
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className="w-[20px] h-[20px] text-[#5359B9]  dark:text-white"
                                />
                                <a
                                    href="https://www.linkedin.com/in/antony-murithi-namu/"
                                    target="_blank"
                                    className="cursor-pointer font-semibold"
                                >
                                    Linked In
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <FontAwesomeIcon
                                    icon={faWhatsapp}
                                    className="w-[20px] h-[20px] text-[#5359B9]  dark:text-white"
                                />

                                <a
                                    href="https://github.com/codewithAntony"
                                    target="_blank"
                                    className="cursor-pointer font-semibold"
                                >
                                    +254 725 010 898
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="w-[20px] h-[20px] text-[#5359B9]  dark:text-white"
                                />
                                <a
                                    href="https://github.com/codewithAntony"
                                    target="_blank"
                                    className="cursor-pointer font-semibold"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
