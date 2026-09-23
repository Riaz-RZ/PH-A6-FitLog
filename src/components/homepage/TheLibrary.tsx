import { ILibrary } from "@/types/library.types";
import LibraryCard from "../shared/LibraryCard";

const getLibrary = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const TheLibrary = async () => {
    const libraryData = await getLibrary();

    console.log(libraryData, "librarydata");

    return (
        <section className="container mx-auto my-16">
            <h1 className="font-bold text-4xl">THE LIBRARY</h1>
            <p className="text-gray-400 pt-2">Twelve lifts covering every major muscle group</p>



            {libraryData.map((library:ILibrary, ind: number) => {
                return <LibraryCard key={ind} library={library}/>
            })}
        </section>


    );
};

export default TheLibrary;