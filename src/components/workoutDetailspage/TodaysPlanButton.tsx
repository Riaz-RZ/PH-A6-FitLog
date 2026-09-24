"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/types/library.types";
import { useContext } from "react";
import {
    FiCalendar,
} from "react-icons/fi";

const TodaysPlanButton = ({workout}: {workout: ILibrary}) => {

    const {todaysPlan, setTodaysPlan} = useContext(WorkoutsContext)

    const handleTodaysPlan = () => {
        console.log("todays plan button clicked", workout);
        setTodaysPlan([...todaysPlan, workout]);
    }
    return (
        <button className="btn h-10 min-h-10 rounded-lg border-0 bg-[#c7ff00] px-4 text-xs font-bold text-black hover:bg-[#b9f000]" onClick={() => handleTodaysPlan()}>
            <FiCalendar /> Add to today's plan
        </button>
    );
};

export default TodaysPlanButton;