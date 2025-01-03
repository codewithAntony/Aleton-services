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
        <div className="bg-[#FFD43A] py-[20px] mt-[9px] sm:py-[40px]">
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
                    <div className="flex flex-col justify-center border border-black w-[280px] h-[250px]  p-5 hover:bg-white md:w-[600px] md:h-[280px] md:p-10">
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
                            My mission as a Software Engineer is to deliver
                            elegant and efficient solutions that translate Good
                            Design into Good Business and even better user
                            experience.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border border-black w-[280px] h-[370px] p-5 md:w-[600px] md:h-[280px] md:p-10 hover:bg-white">
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
                            With my experience in managing social media accounts, I can help you take charge of your social media presence.
                        </p>
                        <p>Whether it’s growing your accounts, reaching your target audience, or promoting your products effectively, I’m here to help you connect with potential clients and boost your online impact.</p>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#5359B9]"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#5359B9]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>

                                <a href="#">
                                    <p className="cursor-pointer font-semibold">
                                        +254 725 010 898
                                    </p>
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg class="w-6 h-6 text-[#5359B9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
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
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
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
