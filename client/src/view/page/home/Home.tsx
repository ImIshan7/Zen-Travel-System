import {Component} from "react";
import './Home.css';
import about from '../../../images/SIGIRIYA.jpg';
import polon from '../../../images/Polonnaruwa .jpg';
import Anu from '../../../images/Anuradhapura.jpg';
import Kandy from '../../../images/Kandy.jpg';
import Galle from '../../../images/Galle.jpg';
import Dambulla from '../../../images/dambulla.jpeg';
import Sri from '../../../images/sripadaya.jpg';
import Yala from '../../../images/yala.jpg';
import Hot from '../../../images/hotainplace.jpg';
import meemure from '../../../images//meemure.jpg';
import ella from '../../../images/ella.jpg';
import forest from '../../../images/waterfall1.jpg';
import hotain from '../../../images/hotain.png';
import ambuluwawa from '../../../images/ambuluwawala.jpg';
import diyaluma from '../../../images/diyaluma.jpg';
import room from '../../../images/room.jpg';
export class Home extends Component {
    render() {
        return (
            <>
                <div id="background" className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" >
                    <div className="container mx-auto px-6 flex relative py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">

                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                VISIT
                                <span className="text-5xl sm:text-7xl">
                        Sri Lanka
                    </span>
                            </h1>
                            <p className="text-lg sm:text-base text-gray-700 dark:text-white font-bold">
                                I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
                            </p>

                        </div>
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">

                        </div>
                    </div>
                </div>


                <div id="destination" className=" max-w-screen  px-2">

                    <div className="flex justify-center text-5xl md:text-4xl font-bold mb-11 text-black">

                    </div>

                    <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
                        <li className="relative bg-white flex flex-col justify-between border rounded shadow-md border-amber-500 hover:shadow-primary-400">

                            <a className="relative" href="/tool/writey-ai">
                                <div className="relative w-full aspect-video ">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={about}/>

                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Sigiriya Rock</h2>
                                        <p className="font-medium text-sm">Sri lanka</p>
                                    </div>
                                </div>
                            </a>

                            <div className="flex flex-col justify-beetween pt-4 px-7 py-24">

                                <p className="text-black two-lines font-bold text-xl">
                                    Also known as the Lion Rock, Sigiriya is an ancient rock fortress with a palace on its summit.
                                    It's a UNESCO World Heritage Site and one of the most iconic landmarks in Sri Lanka.
                                </p>

                            </div>

                        </li>

                        <li className="relative bg-white flex flex-col justify-between border rounded border-amber-500 shadow-md hover:shadow-primary-400">
                            <a className="relative" href="/tool/writemeai">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={polon}/>

                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Polonnaruwa</h2>
                                        <p className="font-medium text-sm">Polonnaruwa,Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">

                                <p className="text-black two-lines font-bold text-xl">
                                    Another UNESCO World Heritage Site, Polonnaruwa is an ancient city with well-preserved ruins,
                                    including impressive stone sculptures and the Quadrangle with its ancient
                                    temples and royal palace.
                                </p>


                            </div>

                        </li>

                        <li className="relative bg-white flex flex-col justify-between border rounded border-amber-500 shadow-md hover:shadow-primary-400">
                            <a className="relative" href="/tool/publer">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={Anu}/>

                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Anuradhapura</h2>
                                        <p className="font-medium text-sm">Anuradhapura, Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">

                                <p className="text-black two-lines font-bold text-xl">
                                    One of the oldest continuously inhabited cities in the world,
                                    Anuradhapura was the capital of ancient Sri Lanka.
                                    It boasts ancient stupas, monasteries, and reservoirs,
                                    making it a sacred pilgrimage site.
                                </p>


                            </div>

                        </li>

                        <li className="relative bg-white flex flex-col justify-between border rounded border-amber-500 shadow-md hover:shadow-primary-400">
                            <a className="relative" href="/tool/anyword">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={Kandy}/>

                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Temple of the Tooth</h2>
                                        <p className="font-medium text-sm">Kandy, Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                <p className="text-black two-lines font-bold text-xl">
                                    Kandy is known for the Temple of the Tooth Relic (Sri Dalada Maligawa),
                                    which houses the sacred tooth relic of the Buddha.
                                    The city is a cultural hub and a UNESCO World Heritage Site.
                                </p>


                            </div>

                        </li>

                        <li className="relative bg-white flex flex-col justify-between border rounded  border-amber-500 shadow-md hover:shadow-primary-400">

                            <a className="relative" href="/tool/blogseo-ai">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={Galle}/>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Galle Fort</h2>
                                        <p className="font-medium text-sm">Galle,Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                <p className="text-black two-lines font-bold text-xl">
                                    A well-preserved colonial-era fort, Galle Fort is a UNESCO World Heritage Site
                                    located in the coastal city of Galle. It features charming cobblestone streets,
                                    Dutch-colonial architecture, and a historic lighthouse.
                                </p>


                            </div>
                        </li>

                        <li className="relative bg-white flex flex-col justify-between border border-amber-500 rounded shadow-md hover:shadow-primary-400">

                            <a className="relative" href="/tool/typewise">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={Dambulla}/>

                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Dambulla Cave Temple</h2>
                                        <p className="font-medium text-sm">Dambulla, Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                <p className="text-black two-lines font-bold text-xl">
                                    Also known as the Golden Temple of Dambulla, this cave complex is a UNESCO World
                                    Heritage Site and houses a vast collection of Buddha statues and murals.
                                </p>

                            </div>

                        </li>

                        <li className="relative bg-white flex flex-col justify-between border  border-amber-500 rounded shadow-md hover:shadow-primary-400">

                            <a className="relative" href="/tool/blogseo-ai">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={Sri}/>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Adam's Peak (Sri Pada)</h2>
                                        <p className="font-medium text-sm">Ratnapura ,Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                <p className="text-black two-lines font-bold text-xl">
                                    A sacred mountain, Adam's Peak is known for the "Sri Pada" or "Sacred Footprint,"
                                    believed by different religious groups to be the footprint of Buddha, Shiva, or Adam,
                                    depending on the faith.
                                </p>


                            </div>
                        </li>

                        <li className="relative bg-white flex flex-col justify-between border border-amber-500 rounded shadow-md hover:shadow-primary-400">

                            <a className="relative" href="/tool/blogseo-ai">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={Yala}/>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Yala National Park</h2>
                                        <p className="font-medium text-sm">Hambantota,Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                <p className="text-black two-lines font-bold text-xl">
                                    While not a historic site, Yala National Park is famous for its rich biodiversity
                                    and is one of the best places in Sri Lanka for wildlife enthusiasts.
                                    It's home to a variety of animals, including leopards, elephants,
                                    and numerous bird species.
                                </p>


                            </div>
                        </li>

                        <li className="relative bg-white flex flex-col justify-between border border-amber-500 rounded shadow-md hover:shadow-primary-400">

                            <a className="relative" href="/tool/blogseo-ai">
                                <div className="relative w-full aspect-video">
                                    <img className="rounded w-full h-full duration-500 hover:scale-105 object-cover" src={Hot}/>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                        <h2 className="text-xl font-semibold">Horton Plains National Park</h2>
                                        <p className="font-medium text-sm">Nuwara Eliya,Sri Lanka</p>
                                    </div>
                                </div>
                            </a>


                            <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                <p className="text-black two-lines font-bold text-xl">
                                    Home to the famous World's End, a sheer cliff with a breathtaking drop,
                                    Horton Plains is a picturesque destination with a diverse
                                    ecosystem and stunning landscapes.
                                </p>


                            </div>
                        </li>

                    </ul>

                </div>


                <section className="px-3 py-5 bg-neutral-100 lg:py-10">
                    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                            <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                            <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
                            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
                            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img className="h-80 w-80 duration-500 hover:scale-105 object-cover lg:w-[500px] lg:h-[500px]" src={room}/>

                        </div>
                    </div>
                </section>





                <div className="bg-white  max-w-screen">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                            <div className="flex items-center gap-12">
                                <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">Famous Location</h2>

                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                            <a href="#"
                               className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={ambuluwawa}/>


                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ambuluwawa Tower </span>
                            </a>



                            <a href="#"
                               className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={diyaluma}/>

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Diyaluma Falls</span>
                            </a>



                            <a href="#"
                               className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={meemure}/>

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Meemure Village</span>
                            </a>



                            <a href="#"
                               className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={ella}/>


                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ella Rock</span>
                            </a>

                            <a href="#"
                               className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={forest}/>


                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Sinharaja Forest Reserve</span>
                            </a>
                            <a href="#"
                               className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={hotain}/>

                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                </div>

                                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Horton Plains</span>
                            </a>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}