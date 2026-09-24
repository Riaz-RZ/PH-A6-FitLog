import Image from "next/image";
import bannerimage from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="mt-6">
            <div className="container mx-auto px-28">

                <div className="grid grid-cols-1 items-center overflow-hidden rounded-3xl border border-gray-600 bg-base-300 shadow-xs md:grid-cols-2">

                    {/* Left Content */}
                    <div className="ps-7 py-10 text-center md:py-14 md:text-left">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C2F800] md:text-base">
                            WORKOUT LIBRARY
                        </p>

                        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                            TRAIN WITH INTENT. LOG
                            <br />
                            EVERY SET.
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            <br />
                            into today's plan, and watch the week's work add up.
                        </p>

                        <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-7 py-3.5 text-lg font-semibold text-black shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl">
                            BROWSE WORKOUTS
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="mt-10 flex justify-center md:mt-0 md:justify-end">
                        <Image
                            src={bannerimage}
                            alt="FitLog workout banner"
                            priority
                            className="w-full max-w-sm object-contain drop-shadow-2xl md:max-w-md lg:max-w-md py-8"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;