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
                            About me & my work
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
                            My mission as Software Engineer is to deliver
                            elegant and efficient solutions that translate Good
                            Design into Good Business and even better user
                            experience.
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
                            With my experience in running Social Media Accounts,
                            I will surely help you manage your social apps, it
                            could be your Facebook, Instagram, Tiktok or any
                            other social media app.
                            <br />I can help you grow your accounts or push your
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
                                I am currently available for work, <br /> so if
                                you'd like to discuss any projects <br /> you
                                can reach me through any of the <br /> available
                                contact information.
                            </p>
                        </div>

                        <div className="flex flex-col gap-7">
                            <div className="flex items-center gap-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-[20px] h-[20px] fill-current text-[#5359B9]  dark:text-white"
                                >
                                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                                </svg>

                                <button
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="font-semibold cursor-pointer"
                                >
                                    antonymurithi51@gmail.com
                                </button>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-[20px] h-[20px] fill-current text-[#5359B9]  dark:text-white"
                                >
                                    <path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z" />
                                </svg>
                                <a href="#">
                                    <p className="cursor-pointer font-semibold">
                                        +254 725 010 898
                                    </p>
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-[20px] h-[20px] fill-current text-[#5359B9]  dark:text-white"
                                >
                                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>

                                <a
                                    href="https://www.linkedin.com/in/antony-murithi-namu/"
                                    target="_blank"
                                    className="cursor-pointer font-semibold"
                                >
                                    Linked In
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-[20px] h-[20px] fill-current text-[#5359B9]  dark:text-white"
                                >
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>

                                <a
                                    href="https://github.com/codewithAntony"
                                    target="_blank"
                                    className="cursor-pointer font-semibold"
                                >
                                    +254 725 010 898
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                    className="w-[20px] h-[20px] fill-current text-[#5359B9]  dark:text-white"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
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
