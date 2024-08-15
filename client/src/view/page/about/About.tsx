import {Component} from "react";
import logo from "../../../images/tour5.jpg"
import about from "../../../images/SIGIRIYA.jpg"
export class About extends Component {
    render() {
        // @ts-ignore
        return (
            <>

                <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div id="about" className="sm:flex items-center max-w-screen">
                        <div className="sm:w-1/2 p-10">
                            <div className="image object-center text-center">
                                <img className="rounded-md object-cover object-center  duration-500 hover:scale-105 hover:shadow-xl" src={about}/>
                            </div>
                        </div>
                        <div className="sm:w-1/2  pb-48">
                            <div className=" text">
                                <span className="text-white text-5xl font-bold ">About us</span>
                                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Zen Traveller</span>
                                </h2>
                                <p className="text-black font-medium text-lg">
                                    Welcome to Zen Traveler, your sanctuary for exploration and enlightenment in the heart of Sri Lanka.
                                    At Zen Traveler, we embark on a journey to unveil the unparalleled beauty and
                                    cultural richness of this island paradise. Our mission is to guide you through
                                    an immersive experience, connecting you with the essence of
                                    Sri Lanka's most captivating destinations.
                                </p>

                                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Our <span className="text-indigo-600">Vision</span>
                                </h2>
                                <p className="text-black font-medium text-lg">
                                    In a world where every journey is a story waiting to be told, Zen Traveler is your
                                    storyteller, weaving tales of serenity and adventure. We believe in the
                                    transformative power of travel, where every step unveils a new chapter
                                    of self-discovery and connection.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Total Member</h3>
                            <p className="text-3xl">12,768</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Total Post</h3>
                            <p className="text-3xl">39,265</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-indigo-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Total Comment</h3>
                            <p className="text-3xl">142,334</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Server Load</h3>
                            <p className="text-3xl">34.12%</p>
                        </div>
                    </div>
                </div>


<section id="contact" className="px-3 py-6 bg-white pt-14 text-white >
                <div ">
                    <div className=" mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row max-w-screen-lg">
                        <div className="sm:w-7/12">
                            <div className="text-3xl font-bold">
                                Subscribe to my
                                <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Newsletters
            </span>
                            </div>
                            <p className="mt-3 text-black font-bold">
                                Subscribe to Our Newsletters for Exclusive Updates and Insights!
                                Subscribe to Our Newsletters for Curated Content and Exclusive Updates!
                            </p>
                        </div>
                        <div className="w-full sm:w-5/12">
                            <form className="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                                <input
                                    className="w-full appearance-none bg-slate-800 focus:outline-none text-white"
                                    type="email"  // Specify the input type if it's an email subscription
                                    placeholder="Your email"
                                />
                                <button
                                    className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

</section>
            </>
        );
    }
}