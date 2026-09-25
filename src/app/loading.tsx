export default function Loading() {
    return (
        <main className="flex min-h-[calc(100vh-130px)] items-center justify-center bg-[#0d0f12] px-4 py-12 text-white">
            <div className="flex flex-col items-center gap-4" role="status" aria-label="Loading workouts">
                <span className="h-10 w-10 animate-spin rounded-full border-4 border-[#252830] border-t-[#c7ff00]" />
                <p className="text-sm font-medium text-gray-400">Loading workouts…</p>
            </div>
        </main>
    );
}
