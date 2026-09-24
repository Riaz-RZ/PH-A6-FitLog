"use client"
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { useContext } from 'react';

const MyPlanPage = () => {

    const {todaysPlan} = useContext(WorkoutsContext);
    console.log(todaysPlan, "todays plan"); 
    return (
        <div>
            Myy plan page
        </div>
    );
};

export default MyPlanPage;