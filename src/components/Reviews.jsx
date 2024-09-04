import React from 'react';
import man1 from '../assets/images/man1.jpg';
import man2 from '../assets/images/man2.avif';
import woman1 from '../assets/images/woman1.jpg';

function Reviews() {
    return (
        <div className="bg-[#F9F9F9] py-[20px] sm:pt-[80px]">
            <div className="w-full mx-auto px-5  max-w-6xl">
                <div className="flex flex-col justify-center items-center">
                    <h5 className="text-[#5359B9] font-bold text-sm pb-3 uppercase sm:text-5xl sm:font-bold sm:pb-7">
                        Reviews
                    </h5>
                    <div className="flex flex-col my-10 sm:grid sm:grid-cols-2 sm:gap-6">
                        <article>
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-10 h-10 me-4 rounded-full"
                                    src={man1}
                                    alt=""
                                />
                                <div className="font-medium dark:text-white">
                                    <p>
                                        Ian Moreno{' '}
                                        <time
                                            dateTime="2014-08-16 19:00"
                                            className="block text-sm text-gray-500 dark:text-gray-400"
                                        ></time>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                                    Best decison to work with them
                                </h3>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                                <p>
                                    Reviewed in the United Kingdom, Kenya on{' '}
                                    <time dateTime="2017-03-03 19:00">
                                        Aug 3, 2024
                                    </time>
                                </p>
                            </footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                It is a distinct pleasure for me to recommend
                                Aleton Services to any and all interested
                                parties. They have been professional,
                                comprehensive and competent throughout the
                                process of our working together. We feel that we
                                have established a relationship with them for
                                years to come.
                            </p>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                The reaction to our new web site has been
                                overwhelmingly positive; as one commented the
                                site is “FANTASTIC.” The same can be said for
                                our view of Aleton Services work for us.
                            </p>
                            <a
                                href="#"
                                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Read more
                            </a>
                            <aside>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    19 people found this helpful
                                </p>
                                <div className="flex items-center mt-3">
                                    <a
                                        href="#"
                                        className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Helpful
                                    </a>
                                    <a
                                        href="/#contact"
                                        className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
                                    >
                                        Report abuse
                                    </a>
                                </div>
                            </aside>
                        </article>
                        <article>
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-10 h-10 me-4 rounded-full"
                                    src={man2}
                                    alt=""
                                />
                                <div className="font-medium dark:text-white">
                                    <p>
                                        Kevin Kioko{' '}
                                        <time
                                            dateTime="2014-08-16 19:00"
                                            className="block text-sm text-gray-500 dark:text-gray-400"
                                        ></time>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                                    Try them for great services
                                </h3>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                                <p>
                                    Reviewed in Nairobi, Kenya on{' '}
                                    <time dateTime="2017-03-03 19:00">
                                        March 3, 2024
                                    </time>
                                </p>
                            </footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                With Aleton Services help, we were able to
                                increase the functionality of our website
                                dramatically while cutting our costs.{' '}
                                <a
                                    href="https://evergreendentalcareltd.netlify.app/"
                                    className="text-slate-800 underline"
                                >
                                    Our website
                                </a>{' '}
                                is much more easy to use, has tons of more
                                features than before and is incredibly easy to
                                maintain. We could not be more happy with our
                                new website! Thanks Aleton!
                            </p>

                            <a
                                href="#"
                                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Read more
                            </a>
                            <aside>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    7 people found this helpful
                                </p>
                                <div className="flex items-center mt-3">
                                    <a
                                        href="#"
                                        className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Helpful
                                    </a>
                                    <a
                                        href="/#contact"
                                        className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
                                    >
                                        Report abuse
                                    </a>
                                </div>
                            </aside>
                        </article>
                        <article>
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-10 h-10 me-4 rounded-full"
                                    src={woman1}
                                    alt=""
                                />
                                <div className="font-medium dark:text-white">
                                    <p>
                                        Lucia Cavarlho{' '}
                                        <time
                                            dateTime="2014-08-16 19:00"
                                            className="block text-sm text-gray-500 dark:text-gray-400"
                                        ></time>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                                <p>
                                    Reviewed in Betis on{' '}
                                    <time dateTime="2017-03-03 19:00">
                                        December, 2023
                                    </time>
                                </p>
                            </footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Since having our new website built by Aleton
                                Services, we have seen a 200% increase in the
                                number of online contact forms being filled out
                                and returned to us.
                            </p>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                Antony and his team worked closely with us to
                                provide a site that met all of the criteria that
                                we were looking for. The end result was a
                                website that is attractive, organized and
                                effective. Thanks to Thrive for all of your hard
                                work and support!
                            </p>
                            <a
                                href="#"
                                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Read more
                            </a>
                            <aside>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    35 people found this helpful
                                </p>
                                <div className="flex items-center mt-3">
                                    <a
                                        href="#"
                                        className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Helpful
                                    </a>
                                    <a
                                        href="/#contact"
                                        className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
                                    >
                                        Report abuse
                                    </a>
                                </div>
                            </aside>
                        </article>
                        <article>
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-10 h-10 me-4 rounded-full"
                                    src="/docs/images/people/profile-picture-5.jpg"
                                    alt=""
                                />
                                <div className="font-medium dark:text-white">
                                    <p>
                                        Andrew Wilkinson{' '}
                                        <time
                                            dateTime="2014-08-16 19:00"
                                            className="block text-sm text-gray-500 dark:text-gray-400"
                                        ></time>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                                <p>
                                    Reviewed in United Kingdomon{' '}
                                    <time dateTime="2017-03-03 19:00">
                                        April, 2022
                                    </time>
                                </p>
                            </footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                We have been working with Aleton Services for
                                over 3 years. I would like to thank all of the
                                team for the hard work over the years, they have
                                always responded quickly by solving any issue
                                that our company have had.
                            </p>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">
                                Such as implementing new projects, software,
                                updates, quickly and effectively, and many other
                                issues even general enquiries that we may have
                                had. I would just like to thank Aleton Services
                                for all their hard work over the years and keep
                                up the excellent work. Atlantia UK Ltd can only
                                give a 5 * + to this company.
                            </p>
                            <a
                                href="#"
                                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Read more
                            </a>
                            <aside>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    19 people found this helpful
                                </p>
                                <div className="flex items-center mt-3">
                                    <a
                                        href="#"
                                        className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Helpful
                                    </a>
                                    <a
                                        href="/#contact"
                                        className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
                                    >
                                        Report abuse
                                    </a>
                                </div>
                            </aside>
                        </article>
                    </div>
                    <a href="#">
                        <button className="border border-gray-200 w-[170px] h-[50px] text-black font-medium  bg-inherit rounded-sm uppercase mb-[15px] hover:bg-[#5359B9] hover:text-white sm:w-[170px] sm:h-[50px]">
                            view all reviews
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
