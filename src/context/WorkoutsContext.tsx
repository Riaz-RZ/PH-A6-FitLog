"use client";

import { createContext, ReactNode, useState } from "react";

export const WorkoutsContext = createContext({});

const WorkoutsProvider = ({children}: {children: ReactNode}) => {
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [save, setSave] = useState([]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        save,
        setSave
    }
    return <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>
};

export default WorkoutsProvider;