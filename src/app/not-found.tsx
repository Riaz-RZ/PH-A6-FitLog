import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[calc(100vh-130px)] items-center justify-center bg-[#0d0f12] px-4 py-12 text-white">
            <section className="w-full max-w-lg rounded-2xl border border-[#252830] bg-[#15181e] p-8 text-center shadow-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c7ff00]">
                    404
                </p>
                <h1 className="mt-4 text-3xl font-black uppercase tracking-tight">
                    Page not found
                </h1>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                    The route you requested does not exist.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-lg bg-[#c7ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b8ef00]"
                >
                    Back to home
                </Link>
            </section>
        </main>
    );
}
