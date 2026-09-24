import SaveLaterButton from "@/components/workoutDetailspage/SaveLaterButton";
import TodaysPlanButton from "@/components/workoutDetailspage/TodaysPlanButton";
import { ILibrary } from "@/types/library.types";
import Image from "next/image";



interface IWorkoutsDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}


const getLibrary = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const workoutsDetailPage = async ({ params }: IWorkoutsDetailPageProps) => {
    const { id } = await params;
    const workoutsData = await getLibrary();
    const workout = workoutsData.find(
        (workout: ILibrary) => String(workout.id) === String(id)
    );
    console.log(workout, "workout");

    return (
         <main className="flex min-h-[calc(100vh-120px)] items-center bg-[#0d0f12] px-4 py-6 text-white md:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

                {/* Main Card */}
                <div className="overflow-hidden rounded-xl border border-[#252830] bg-[#101216] p-3 shadow-2xl md:p-4">

                    <div className="grid gap-7 lg:grid-cols-[1fr_1fr]">

                        {/* ================= IMAGE ================= */}
                       <div className="relative h-87.5 overflow-hidden rounded-lg md:h-112.5 lg:h-[calc(100vh-190px)] lg:max-h-140">

                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />

                        </div>


                        {/* ================= CONTENT ================= */}
                        <div className="flex flex-col px-2 py-1 md:px-3">

                            {/* Title */}
                            <div>
                                <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
                                    {workout.name}
                                </h1>

                                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                                    {workout.description}
                                </p>
                            </div>


                            {/* Muscle Groups */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {workout.muscleGroups.map(
                                    (muscle: string) => (
                                        <span
                                            key={muscle}
                                            className="rounded-full bg-[#c7ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                                        >
                                            {muscle}
                                        </span>
                                    )
                                )}
                            </div>


                            {/* Information */}
                            <div className="mt-3 overflow-hidden rounded-lg border border-[#282c34] bg-[#15181e]">

                                {/* Equipment */}
                                <div className="flex items-center justify-between border-b border-[#282c34] px-4 py-3">
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                                        Equipment
                                    </span>

                                    <span className="text-xs text-gray-200">
                                        {workout.equipment}
                                    </span>
                                </div>


                                {/* Difficulty */}
                                <div className="flex items-center justify-between border-b border-[#282c34] px-4 py-3">
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                                        Difficulty
                                    </span>

                                    <span className="text-xs text-gray-200">
                                        {workout.difficulty}
                                    </span>
                                </div>


                                {/* Sets */}
                                <div className="flex items-center justify-between border-b border-[#282c34] px-4 py-3">
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                                        Sets
                                    </span>

                                    <span className="text-xs text-gray-200">
                                        {workout.sets}
                                    </span>
                                </div>


                                {/* Reps */}
                                <div className="flex items-center justify-between border-b border-[#282c34] px-4 py-3">
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                                        Reps
                                    </span>

                                    <span className="text-xs text-gray-200">
                                        {workout.reps}
                                    </span>
                                </div>


                                {/* Duration */}
                                <div className="flex items-center justify-between border-b border-[#282c34] px-4 py-3">
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                                        Duration
                                    </span>

                                    <span className="text-xs text-gray-200">
                                        {workout.duration} min
                                    </span>
                                </div>


                                {/* Calories */}
                                <div className="flex items-center justify-between border-b border-[#282c34] px-4 py-3">
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                                        Calories
                                    </span>

                                    <span className="text-xs text-gray-200">
                                        {workout.caloriesBurned} kcal
                                    </span>
                                </div>


                                {/* Rating */}
                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                                        Rating
                                    </span>

                                    <span className="text-xs text-gray-200">
                                        {workout.rating}
                                    </span>
                                </div>

                            </div>


                            {/* ================= INSTRUCTIONS ================= */}
                            <div className="mt-3">

                                <h2 className="text-xs font-bold uppercase tracking-wider">
                                    Instructions
                                </h2>

                                <ol className="mt-3 space-y-2">
                                    {workout.instructions.map(
                                        (
                                            instruction: string,
                                            index: number
                                        ) => (
                                            <li
                                                key={index}
                                                className="flex gap-3 text-xs leading-5 text-gray-400"
                                            >
                                                <span className="text-gray-500">
                                                    {index + 1}.
                                                </span>

                                                <span>
                                                    {instruction}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ol>
                            </div>


                            {/* ================= BUTTONS ================= */}
                            <div className="mt-auto flex flex-wrap gap-3 pt-6">

                                <TodaysPlanButton workout={workout}/>

                                <SaveLaterButton workout={workout}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default workoutsDetailPage;