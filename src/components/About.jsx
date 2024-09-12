import { useRef } from 'react';
import emailjs from 'emailjs-com';

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
                <div className="flex flex-col py-8 sm:flex sm:flex-row sm:gap-[40px]">
                    <div className="flex flex-col justify-center border border-black w-[320px] h-[330px] mb-[30px] p-5 hover:bg-white sm:w-[600px] sm:h-[280px] sm:p-10">
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
                    <div className="flex flex-col justify-center border border-black w-[320px] h-[330px] p-5 sm:w-[600px] sm:h-[280px] sm:p-10 hover:bg-white">
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
                    <div className="py-[10px] flex flex-col p-5"></div>
                    <div className="flex flex-col gap-7 justify-evenly p-3 sm:flex sm:flex-row sm:p-7">
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
                                <svg
                                    className="w-[27px] h-[27px] text-[#5359B9] dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-8.029-4.46a2 2 0 0 0-1.942 0L3 8m18 0-9 6.5L3 8"
                                    />
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
                                    className="w-[27px] h-[27px] text-[#5359B9]  dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                                    />
                                </svg>
                                <a href="#">
                                    <p className="cursor-pointer font-semibold">
                                        +254 725 010 898
                                    </p>
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg
                                    className="w-[27px] h-[27px] text-[#5359B9]  dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                        clip-rule="evenodd"
                                    />
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
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
                                    class="w-[27px] h-[27px] text-[#5359B9]  dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                                    />
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
                                    className="w-[27px] h-[27px] text-[#5359B9] dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                        clip-rule="evenodd"
                                    />
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
