"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/types/library.types";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
    FiCheck,
    FiClock,
    FiStar,
    FiX
} from "react-icons/fi";
import { MdLocalFireDepartment } from "react-icons/md";
import { toast } from "react-toastify";

const MyPlanPage = () => {
    const { todaysPlan, setTodaysPlan, save, setSave } = useContext(WorkoutsContext) as {
        todaysPlan: ILibrary[];
        setTodaysPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;
        save: ILibrary[];
        setSave: React.Dispatch<React.SetStateAction<ILibrary[]>>;
    };

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    useEffect(() => {
        const updateTabFromNavigation = (event?: Event) => {
            const requestedTab = event
                ? (event as CustomEvent<"today" | "saved">).detail
                : sessionStorage.getItem("myplan-tab");

            if (requestedTab === "today" || requestedTab === "saved") {
                setActiveTab(requestedTab);
                sessionStorage.removeItem("myplan-tab");
            }
        };

        updateTabFromNavigation();
        window.addEventListener("myplan-tab", updateTabFromNavigation);

        return () => window.removeEventListener("myplan-tab", updateTabFromNavigation);
    }, []);

    const plan: ILibrary[] =
        activeTab === "today" ? todaysPlan : save;
    const sortedPlan = [...plan].sort((firstWorkout, secondWorkout) => {
        if (sortBy === "duration") {
            return firstWorkout.duration - secondWorkout.duration;
        }

        if (sortBy === "calories") {
            return secondWorkout.caloriesBurned - firstWorkout.caloriesBurned;
        }

        return secondWorkout.rating - firstWorkout.rating;
    });
    const handleRemove = (id: number) => {
        if (activeTab === "today") {
            setTodaysPlan((prev) =>
                prev.filter((workout) => workout.id !== id)
            );
            toast.success("Removed from Today's Plan");
        } else {
            setSave((prev) =>
                prev.filter((workout) => workout.id !== id)
            );
            toast.success("Removed from Saved");
        }
    };

    const handleMarkAsDone = (id: number) => {
        setTodaysPlan((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
        toast.success("Workout marked as done");
    };

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

                        <button
                            onClick={() => setActiveTab("today")}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer ${activeTab === "today"
                                ? "bg-[#252830] text-[#c7ff00]"
                                : "text-white"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer ${activeTab === "saved"
                                ? "bg-[#252830] text-[#c7ff00]"
                                : "text-white"
                                }`}
                        >
                            Saved
                        </button>

                    </div>


                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="hidden text-sm text-gray-400 sm:block">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value as typeof sortBy)}
                            className="select select-xs h-8 min-h-8 rounded-md border-[#252830] bg-[#15181e] text-[12px] text-gray-300"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                </div>


                {/* ================= PLAN CONTENT ================= */}
                {plan.length === 0 ? (

                    /* EMPTY STATE */
                    <section className="mt-3 flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-[#282c34] bg-[#101216] text-center">

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
                    <section className="mt-3">

                        {sortedPlan.map((workout) => (
                            <div
                                key={workout.id}
                                className="group flex overflow-hidden rounded-xl border border-[#252830] bg-[#101216] transition hover:border-[#c7ff00]/40 my-4"
                            >

                                {/* Image */}
                                <div className="m-3 aspect-3/2 w-32 shrink-0 overflow-hidden rounded-xl sm:w-40">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        width={300}
                                        height={450}
                                        className="h-full w-full object-cover"
                                    />
                                </div>


                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">

                                    <div className="flex items-start justify-between gap-3">

                                        <div>
                                            <h2 className="text-sm font-black uppercase">
                                                {workout.name}
                                            </h2>
                                            <h2 className="text-sm  text-gray-400 mt-2.5">
                                                {workout.equipment}
                                            </h2>
                                        </div>
                                        {/* ================= BUTTONS ================= */}
                                        <div className="mt-auto flex items-center justify-between gap-3 pt-5">

                                            {/* Left Buttons */}
                                            <div className="flex flex-wrap gap-6">

                                                <Link
                                                    href={`/workouts/${workout.id}`}
                                                    className="rounded-2xl border border-[#363a42] bg-[#15181e] px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-[#c7ff00] hover:text-[#c7ff00]"
                                                >
                                                    View Details
                                                </Link>

                                                {activeTab === "today" && (
                                                    <button
                                                        onClick={() => handleMarkAsDone(workout.id)}
                                                        className="rounded-2xl bg-[#c7ff00] px-3 py-2 text-xs font-bold text-black transition hover:bg-[#b8ef00] flex items-center gap-1.5 cursor-pointer"
                                                    >
                                                        <FiCheck />
                                                        Mark as Done
                                                    </button>
                                                )}

                                            </div>

                                            {/* X Button */}
                                            <button
                                            onClick={() => handleRemove(workout.id)}
                                                className="p-2 text-gray-500 transition hover:border-red-400 hover:text-red-400 cursor-pointer"
                                                aria-label={`Remove ${workout.name}`}
                                            >
                                                <FiX />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-auto flex flex-wrap gap-4 pt-3">

                                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                            <FiClock className="text-[#c7ff00]" />
                                            {workout.duration} min
                                        </div>

                                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                            <MdLocalFireDepartment className="text-[#c7ff00]" />
                                            {workout.caloriesBurned} kcal
                                        </div>

                                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                            <FiStar className="text-[#c7ff00]" />
                                            {workout.rating}
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