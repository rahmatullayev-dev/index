import { ArrowRight, BookOpen, Globe, Terminal, WandSparkles } from "lucide-react";

export default function Index() {

    return (
        <div>

            <div className="bg-gray-50 shadow pb-16 xl:py-16 xl:flex xl:flex-row-reverse xl:px-72">
                <div className="xl:flex-1 xl:px-16">
                    <img src="svg/photo-3.svg" alt="" className="w-screen" />
                </div>
                <div className="xl:flex-1 px-4 xl:px-12 flex flex-col justify-center">
                    <div className="text-2xl text-blue-500 font-semibold text-center xl:text-start">RAHMATULLAYEV SARDOR</div>
                    <div className="text-4xl font-roboto font-semibold mt-2 xl:mt-4 mb-8 px-2 xl:px-0 text-black">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, eos.
                    </div>
                    <div className="w-full flex justify-end xl:justify-start">
                        <button className="px-8  py-4 text-blue-500 border border-blue-500 rounded-lg font-semibold flex gap-x-1">
                            <BookOpen /> O'qish
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-x-8 px-6 gap-y-4 xl:px-72 py-8 xl:py-28 bg-white text-white">

                <div className="bg-blue-600 p-12 rounded-xl shadow-xl">
                    <figure className="mb-6">
                        <WandSparkles size={80} strokeWidth={1}/>
                    </figure>
                    <div className="text-2xl font-bold flex gap-x-1">Web Sayt</div>
                    <p className="text-lg text-blue-200 my-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At delectus recusandae repellat aliquam suscipit tempore.
                    </p>
                    <button className="border rounded w-full mt-2 py-2 flex justify-center gap-x-2">
                        Ko'rish
                        <ArrowRight />
                    </button>
                </div>

                <div className="bg-blue-950 p-12 rounded-xl shadow-xl">
                    <figure className="mb-6">
                        <Terminal size={80} strokeWidth={1}/>
                    </figure>
                    <div className="text-2xl font-bold flex gap-x-1">telegram</div>
                    <p className="text-lg text-blue-200 my-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At delectus recusandae repellat aliquam suscipit tempore.
                    </p>
                    <button className="border rounded w-full mt-2 py-2 flex justify-center gap-x-2">
                        Ko'rish
                        <ArrowRight />
                    </button>
                </div>

            </div>

            <div className="bg-gray-50 shadow xl:px-72 py-8 xl:flex">
                <div className="flex-1 px-16">
                    <img src="svg/skill.svg" alt="" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                    <div className="text-4xl font-semibold text-blue-500 mb-6 text-center xl:text-start">QOBILYATLAR</div>

                    <ul className="xl:text-lg font-normal gap-y-4 mt-2 px-8">
                        <li>
                            FRONT-END: [<br />

                            <div className="ps-4">
                                HTML. CSS, JavaScript, ReactJS, TailwindCSS, Bootstrap
                            </div>

                            ]
                        </li>
                        <li className="my-3">
                            BACK-END: [<br />

                            <div className="ps-4">
                                Php, Laravel, NodeJS, ExpressJS
                            </div>

                            ]
                        </li>
                        <li>
                            DATABASE: [<br />

                            <div className="ps-4">
                                Mysql, PosgreSQl, MongoDB
                            </div>

                            ]
                        </li>
                    </ul>
                </div>
            </div>

            <div className="xl:px-72 xl:py-24 xl:flex flex-col shadow">
                {/* <div className="text-center mb-8 text-4xl">Vada beramiz</div> */}
                <div className="flex flex-col xl:flex-row mt-8 gap-x-16 gap-y-12">

                    <div className="xl:flex-1">
                        <div className="card">
                            <figure>
                                <img src="svg/happy.svg" alt="" />
                            </figure>
                            <div className="card-body">
                                <div className="card-title text-2xl">Baxtli Mijozlar</div>
                                <p className="text-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias, debitis error veniam eveniet iusto ad a laborum in, nemo nam quia illum eligendi consequatur recusandae excepturi corporis ea veritatis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:flex-1">
                        <div className="card">
                            <figure>
                                <img src="svg/masulyat.svg" alt="" />
                            </figure>
                            <div className="card-body">
                                <div className="card-title text-2xl">Ma'suliyat bilan</div>
                                <p className="text-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias, debitis error veniam eveniet iusto ad a laborum in, nemo nam quia illum eligendi consequatur recusandae excepturi corporis ea veritatis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:flex-1">
                        <div className="card">
                            <figure>
                                <img src="svg/time.svg" alt="" />
                            </figure>
                            <div className="card-body">
                                <div className="card-title text-2xl">Barchasi Vaqtida</div>
                                <p className="text-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias, debitis error veniam eveniet iusto ad a laborum in, nemo nam quia illum eligendi consequatur recusandae excepturi corporis ea veritatis.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-gray-50 shadow py-8 xl:px-72 xl:flex xl:flex-row-reverse">
                <div className="flex-1 px-4 xl:px-16">
                    <img src="png/case.png" alt="" />
                </div>
                <div className="flex-1 px-4 flex flex-col justify-center">
                    <div className="text-4xl text-blue-500 font-semibold">LOYIHALAR</div>
                    <p className="text-lg my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur dolore, illo delectus tempore facilis animi error sed. Quos dolores, sed hic ex fuga blanditiis tempore beatae repellat quis ea.
                    </p>
                    <div className="flex justify-end xl:justify-start w-full">
                        <a href="" className="btn btn-outline btn-lg btn-primary">Ko'rish <ArrowRight /></a>
                    </div>
                </div>
            </div>

            <div className="shadow py-8 xl:px-72 xl:flex">
                <div className="flex-1 xl:px-16">
                    <img src="svg/cloud.svg" alt="" />
                </div>
                <div className="flex-1 px-4 flex flex-col justify-center">
                    <div className="text-4xl text-blue-500 font-semibold">XIZMATLAR</div>
                    <p className="text-lg my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur dolore, illo delectus tempore facilis animi error sed. Quos dolores, sed hic ex fuga blanditiis tempore beatae repellat quis ea.
                    </p>
                    <div className="text-end xl:text-start">
                        <a href="" className="btn btn-outline btn-lg btn-primary">Ko'rish <ArrowRight /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}