
import LibraryCard from "@/components/shared/LibraryCard";
import { ILibrary } from "@/types/library.types";
import Image from "next/image";
import bannerimage from "@/assets/banner.png";


const getLibrary = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const TheLibrary = async () => {
    const libraryData = await getLibrary();

    console.log(libraryData, "librarydata");

    return (
        <div>
        <section className="relative z-0 overflow-hidden rounded-3xl mt-6 bg-base-300 border shadow-xs border-gray-600 mx-auto container">
            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 lg:px-16 py-10 md:py-14">

                {/* Left Content */}
                <div className="text-center md:text-left">
                    
                    <p className="text-[#C2F800] font-semibold text-sm md:text-base uppercase tracking-widest mb-3">
                        WORKOUT LIBRARY
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h2>

                    <p className="mt-5 max-w-lg text-gray-400 text-base md:text-lg leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        <br />
                        into today's plan, and watch the week's work add up.
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-7 py-3.5 text-lg font-semibold text-black shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:-translate-y-1 hover:shadow-xl">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                    <Image
                        src={bannerimage}
                        alt="Books Banner"
                        priority
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
        <section className="container mx-auto my-16">
            <h1 className="font-bold text-4xl">THE LIBRARY</h1>
            <p className="text-gray-400 pt-2 pb-6">Twelve lifts covering every major muscle group</p>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {libraryData.map((library: ILibrary, ind: number) => {
                    return <LibraryCard key={ind} library={library} />
                })}
            </div>

        </section>
        </div>


    );
};

export default TheLibrary;