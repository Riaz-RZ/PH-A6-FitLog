"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/types/library.types";
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

const SaveLaterButton = ({ workout }: { workout: ILibrary }) => {
    const { save, setSave } = useContext(WorkoutsContext) as {
        save: ILibrary[];
        setSave: React.Dispatch<React.SetStateAction<ILibrary[]>>;
    };

    const handleSaveLater = () => {
        const alreadySaved = save.some((item) => item.id === workout.id);

        if (alreadySaved) {
            toast.error("Already Saved for Later");
            return;
        }

        toast.success("Saved for Later");
        setSave((prev) => [...prev, workout]);
    };

    return (
        <button
            className="btn h-10 min-h-10 rounded-md border border-[#363a42] bg-transparent px-4 text-xs font-bold text-gray-300 hover:bg-[#1a1d22]"
            onClick={handleSaveLater}
        >
            <FiBookmark />
            Save for Later
        </button>
    );
};

export default SaveLaterButton;