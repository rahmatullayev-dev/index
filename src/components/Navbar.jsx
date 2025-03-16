import { BriefcaseBusinessIcon, ChartNoAxesGantt, Cloud, HeadsetIcon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mode, setMode] = useState(true)

    return (
        <div className={`block text-black sticky shadow bg-white top-0 z-50 md:navbar justify-between md:px-72 ${mode ? "" : "fixed w-screen h-screen xl:h-auto"}`}>
            <div className="navbar border-b-2 md:border-none justify-between md:w-auto">
                <a href="/" className="font-semibold text-xl">
                    RAHMATULLAYEV
                </a>
                <div className="p-4 shadow-md rounded-xl bg-black text-white md:hidden" onClick={() => mode ? setMode(false) : setMode(true)}>
                    <ChartNoAxesGantt />
                </div>
            </div>
            <ul className={`${mode ? "hidden" : "" } menu md:menu-horizontal menu-lg items-center`}>
                <li><a href="/services"><Cloud /> Xizmatlar</a></li>
                <li><a href="/projects"><BriefcaseBusinessIcon />Loyihalar</a></li>
                <li><a href="/call"><HeadsetIcon /> Bog'lanish</a></li>
            </ul>
        </div>
    )
}