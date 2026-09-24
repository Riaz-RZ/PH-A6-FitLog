"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/types/library.types";
import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const TodaysPlanButton = ({ workout }: { workout: ILibrary }) => {
    const {
        todaysPlan,
        setTodaysPlan,
        save,
    } = useContext(WorkoutsContext) as {
        todaysPlan: ILibrary[];
        setTodaysPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;
        save: ILibrary[];
    };

    const handleTodaysPlan = () => {
        // Check if already in Today's Plan
        const alreadyAdded = todaysPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.error("Already in Today's Plan");
            return;
        }

        const alreadySaved = save.some((item) => item.id === workout.id);

        if (alreadySaved) {
            toast.error("Already Saved for Later");
            return;
        }

        // Add to Today's Plan
        setTodaysPlan((prev) => [...prev, workout]);

        toast.success("Added to Today's Plan");
    };

    return (
        <button
            className="btn h-10 min-h-10 rounded-lg border-0 bg-[#c7ff00] px-4 text-xs font-bold text-black hover:bg-[#b9f000]"
            onClick={handleTodaysPlan}
        >
            <FiCalendar />
            Add to today&apos;s plan
        </button>
    );
};

export default TodaysPlanButton;