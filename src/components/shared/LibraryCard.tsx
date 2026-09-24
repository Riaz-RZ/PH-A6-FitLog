
import { ILibrary } from "@/types/library.types";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { MdLocalFireDepartment } from "react-icons/md";

interface ILibraryCardProps {
    library: ILibrary;
}

const LibraryCard = ({ library }: ILibraryCardProps) => {
    return (
        <Link
            href={`/workouts/${library.id}`}
            className="group block"
        >
            <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                    <Image
                        src={library.image}
                        alt={library.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Category Pills */}
                    <div className=" flex flex-wrap gap-2">
                        {library.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-3 py-1 my-2 text-[11px] font-bold uppercase tracking-wide text-gray-800 backdrop-blur-sm"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout name */}
                    <h2 className="text-xl font-bold uppercase tracking-tight text-base-content transition-colors duration-300 group-hover:text-[#C2F800]">
                        {library.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-2 text-sm text-base-content/60">
                        {library.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-4 h-px bg-gray-500" />

                    {/* Stats */}
                    <div className="grid grid-cols-5">

                        {/* Duration */}
                        <div className="flex items-center gap-2">
                            <FiClock className="shrink-0 text-gray-400" />

                            <div>
                                <p className="text-sm text-gray-400">
                                    {library.duration} min
                                </p>
                            </div>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-2">
                            <MdLocalFireDepartment className="shrink-0 text-gray-400" />

                            <div>
                                <p className="text-sm text-gray-400">
                                    {library.caloriesBurned} kcal
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <FiStar className="shrink-0  text-gray-400 ms-3" />

                            <div>
                                <p className="text-sm text-gray-400">
                                    {library.rating}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;
