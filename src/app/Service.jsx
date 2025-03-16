import { ArrowRight } from "lucide-react";

export default function ServicePage() {
    return (
        <div>
            
            <div className="shadow py-8 xl:px-72 xl:flex xl:flex-row-reverse">
                <div className="flex-1 xl:px-16">
                    <img src="svg/cloud.svg" alt="" />
                </div>
                <div className="flex-1 px-4 flex flex-col justify-center">
                    <div className="text-4xl text-blue-500 font-semibold">XIZMATLAR</div>
                    <p className="text-lg my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur dolore, illo delectus tempore facilis animi error sed. Quos dolores, sed hic ex fuga blanditiis tempore beatae repellat quis ea.
                    </p>
                    {/* <div className="text-end xl:text-start">
                        <a href="" className="btn btn-outline btn-lg btn-primary">Ko'rish <ArrowRight /></a>
                    </div> */}
                </div>
            </div>

        </div>
    )
}