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
        <section className="container mx-auto my-16 px-28">
            <h1 className="font-bold text-4xl">THE LIBRARY</h1>
            <p className="text-gray-400 pt-2 pb-6">Twelve lifts covering every major muscle group</p>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {libraryData.map((library: ILibrary, ind: number) => {
                    return <LibraryCard key={ind} library={library} />
                })}
            </div>

        </section>


    );
};

export default TheLibrary;