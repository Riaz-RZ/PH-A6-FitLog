"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/types/library.types";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
    FiClock,
    FiTrash2
} from "react-icons/fi";
import { MdLocalFireDepartment } from "react-icons/md";

const MyPlanPage = () => {
    const { todaysPlan } = useContext(WorkoutsContext);

    const plan: ILibrary[] = todaysPlan ?? [];

    // Calculate summary
    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-[calc(100vh-130px)] bg-[#0d0f12] px-4 py-8 text-white md:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <section>
                    <h1 className="mt-1 text-3xl font-black uppercase tracking-tight md:text-4xl">
                        MY PLAN
                    </h1>
                    <p className="mt-1 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </section>


                {/* ================= SUMMARY ================= */}
                <section className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-[#252830] bg-[#15181e]">

                    {/* Exercises */}
                    <div className="border-r border-[#252830] p-5">
                        <p className="text-sm tracking-wider text-gray-400">
                            Exercises
                        </p>

                        <p className="mt-1 text-2xl font-black text-[#c7ff00]">
                            {plan.length}
                        </p>
                    </div>


                    {/* Minutes */}
                    <div className="border-r border-[#252830] p-5">
                        <p className="text-sm tracking-wider text-gray-400">
                            Minutes
                        </p>

                        <p className="mt-1 text-2xl font-black">
                            {totalMinutes}
                        </p>
                    </div>


                    {/* Calories */}
                    <div className="p-5">
                        <p className="text-sm tracking-wider text-gray-400">
                            Calories
                        </p>

                        <p className="mt-1 text-2xl font-black">
                            {totalCalories}
                        </p>
                    </div>

                </section>


                {/* ================= CONTROLS ================= */}
                <div className="mt-5 flex items-center justify-between">

                    {/* Tabs */}
                    <div className="flex rounded-lg border border-[#252830] bg-[#15181e] p-1">

                        <button className="rounded-md bg-[#252830] px-4 py-2 text-sm font-medium text-white">
                            Today's Plan
                        </button>

                        <button className="rounded-md px-4 py-2 text-sm text-gray-400 transition hover:text-white">
                            Saved
                        </button>

                    </div>


                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="hidden text-sm text-gray-400 sm:block">
                            Sort By
                        </span>

                        <select className="select select-xs h-8 min-h-8 rounded-md border-[#252830] bg-[#15181e] text-[12px] text-gray-300">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                            <option>Name</option>
                        </select>
                    </div>

                </div>


                {/* ================= PLAN CONTENT ================= */}
                {plan.length === 0 ? (

                    /* EMPTY STATE */
                    <section className="mt-3 flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-[#282c34] bg-[#101216] text-center">

                        <h2 className="mt-4 text-md font-black">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-1 text-sm leading-5 text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/workouts"
                            className="mt-4 flex items-center gap-2 rounded-full bg-[#c7ff00] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#b8ef00]"
                        >
                            Go to workouts
                           
                        </Link>

                    </section>

                ) : (

                    /* WORKOUT LIST */
                    <section className="mt-3 grid gap-3 md:grid-cols-2">

                        {plan.map((workout) => (
                            <div
                                key={workout.id}
                                className="group flex overflow-hidden rounded-xl border border-[#252830] bg-[#101216] transition hover:border-[#c7ff00]/40"
                            >

                                {/* Image */}
                                <div className="relative h-36 w-32 shrink-0 overflow-hidden sm:h-40 sm:w-40">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        width={80}
                                        height={80}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>


                                {/* Content */}
                                <div className="flex flex-1 flex-col p-4">

                                    <div className="flex items-start justify-between gap-3">

                                        <div>
                                            <div className="mb-2 flex flex-wrap gap-1">
                                                {workout.muscleGroups.map(
                                                    (muscle) => (
                                                        <span
                                                            key={muscle}
                                                            className="rounded-full bg-[#c7ff00] px-2 py-0.5 text-[8px] font-bold uppercase text-black"
                                                        >
                                                            {muscle}
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <h2 className="text-sm font-black uppercase">
                                                {workout.name}
                                            </h2>
                                        </div>

                                        <button className="text-gray-600 transition hover:text-red-400">
                                            <FiTrash2 />
                                        </button>

                                    </div>


                                    {/* Stats */}
                                    <div className="mt-auto flex flex-wrap gap-4 pt-4">

                                        <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                                            <FiClock className="text-[#c7ff00]" />
                                            {workout.duration} min
                                        </div>

                                        <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                                            <MdLocalFireDepartment className="text-red-500" />
                                            {workout.caloriesBurned} kcal
                                        </div>

                                        <div className="text-[10px] text-gray-500">
                                            {workout.sets} sets × {workout.reps}
                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </section>
                )}

            </div>
        </main>
    );
};

export default MyPlanPage;