"use client"
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { ILibrary } from "@/types/library.types";
import { useContext } from "react";
import {
    FiBookmark,
} from "react-icons/fi";
import { toast } from "react-toastify";

const SaveLaterButton = ({workout}: {workout: ILibrary}) => {

    const {save, setSave} = useContext(WorkoutsContext)

    const handleSaveLater = () => {
        console.log("save for later button clicked", workout);
        setSave([...save, workout]);
        toast.success(`Saved for Later`)
    }
    return (
            <button className="btn h-10 min-h-10 rounded-md border border-[#363a42] bg-transparent px-4 text-xs font-bold text-gray-300 hover:bg-[#1a1d22]"  onClick={() => handleSaveLater()}>
            <FiBookmark /> Save for Later
        </button>
    );
};
export default SaveLaterButton;