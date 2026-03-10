import { motion } from "framer-motion"

// Custom Illustrations
const WebIllustration = () => (
    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white">
        <motion.div
            initial={{ y: 20, scale: 0.9 }}
            whileHover={{ y: 0, scale: 1 }}
            className="w-full h-full bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden flex flex-col"
        >
            <div className="h-4 bg-gray-50 flex items-center px-2 gap-1.5 border-b border-gray-100">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 p-3 flex flex-col gap-2">
                <motion.div className="h-6 w-1/3 bg-blue-50 rounded border border-blue-100" layoutId="nav"></motion.div>
                <div className="flex gap-2 h-full">
                    <motion.div className="flex-1 bg-indigo-50 rounded border border-indigo-100" layoutId="hero"></motion.div>
                    <motion.div className="w-1/4 bg-gray-100 rounded border border-gray-200" layoutId="sidebar"></motion.div>
                </div>
            </div>
        </motion.div>
    </div>
)

const DataIllustration = () => (
    <div className="absolute inset-0 flex items-end justify-center p-6 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white">
        <div className="w-full h-full relative flex items-end gap-2 px-2 border-b border-l border-gray-200 pb-2 ml-4">
            {[40, 70, 45, 90, 60, 100].map((height, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}% ` }}
                    transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                    className="flex-1 bg-purple-500 rounded-t-sm"
                    style={{ opacity: 0.6 + (i * 0.1) }}
                ></motion.div>
            ))}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                    d="M 5 60 Q 20 20, 35 50 T 65 10 T 95 30"
                />
            </svg>
        </div>
    </div>
)

const CreativeIllustration = () => (
    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white">
        <div className="relative w-full h-full">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-dashed border-pink-400/50 rounded-full"
            ></motion.div>
            <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="absolute top-4 left-4 w-12 h-12 bg-rose-400 rounded-lg shadow-lg"
            ></motion.div>
            <motion.div
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="absolute bottom-4 right-4 w-16 h-16 bg-pink-400 rounded-full shadow-lg"
            ></motion.div>
            <motion.div
                whileHover={{ scale: 1.2, rotate: 45 }}
                className="absolute bottom-8 left-8 w-10 h-10 border-4 border-gray-100 transform rotate-12"
            ></motion.div>
        </div>
    </div>
)

const HackathonIllustration = () => (
    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white">
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full h-full bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center font-mono shadow-xl"
        >
            <div className="text-gray-500 text-sm mb-2 font-semibold">TIME REMAINING</div>
            <div className="flex items-center gap-2 text-3xl font-bold text-amber-500">
                <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1 }}>23</motion.div>
                <div className="text-gray-300">:</div>
                <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>59</motion.div>
                <div className="text-gray-300">:</div>
                <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>59</motion.div>
            </div>
            <div className="mt-4 w-3/4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-amber-500"
                ></motion.div>
            </div>
        </motion.div>
    </div>
)

const WorkshopIllustration = () => (
    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white">
        <motion.div
            whileHover={{ y: -5 }}
            className="w-full h-full bg-white rounded-lg border border-gray-100 shadow-xl flex flex-col p-3 gap-2 relative"
        >
            <div className="flex-1 bg-teal-50 rounded border border-teal-100 flex items-center justify-center overflow-hidden relative">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border border-teal-200 rounded-sm"
                ></motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="h-10 flex gap-2 justify-center items-end pb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-4 h-6 bg-gray-200 rounded-t-full"
                    ></motion.div>
                ))}
            </div>
        </motion.div>
    </div>
)

const MentorshipIllustration = () => (
    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white">
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Mentor */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: -10, opacity: 1 }}
                className="w-14 h-14 bg-blue-600 rounded-full border-2 border-white z-10 flex flex-col items-center justify-end overflow-hidden shadow-lg"
            >
                <div className="w-6 h-6 bg-white/20 rounded-full mb-1"></div>
                <div className="w-10 h-6 bg-white/20 rounded-t-full"></div>
            </motion.div>

            {/* Connection line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                className="h-1 bg-gradient-to-r from-cyan-600 to-blue-500 z-0"
            ></motion.div>

            {/* Mentee */}
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 10, opacity: 1 }}
                className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white z-10 flex flex-col items-center justify-end overflow-hidden mt-6 shadow-md"
            >
                <div className="w-4 h-4 bg-white/40 rounded-full mb-0.5"></div>
                <div className="w-8 h-4 bg-white/40 rounded-t-full"></div>
            </motion.div>

            {/* Floating thought bubbles */}
            <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-4 left-1/3 w-3 h-3 bg-blue-400 rounded-full"></motion.div>
            <motion.div animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute top-2 left-1/2 w-4 h-4 bg-indigo-400 rounded-full"></motion.div>
        </div>
    </div>
)

const highlights = [
    {
        title: "Web Arcs",
        desc: "Frontend & Fullstack Development",
        illustration: <WebIllustration />,
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    {
        title: "Data Verse",
        desc: "AI, ML & Data Science",
        illustration: <DataIllustration />,
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    },
    {
        title: "Creative",
        desc: "Design & UX/UI",
        illustration: <CreativeIllustration />,
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    {
        title: "Hackathons",
        desc: "Competitive Coding",
        illustration: <HackathonIllustration />,
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
        title: "Workshops",
        desc: "Technical Learning",
        illustration: <WorkshopIllustration />,
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
        title: "Mentorship",
        desc: "Industry Guidance",
        illustration: <MentorshipIllustration />,
        icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    }
]

export default function MDCHighlights() {
    return (
        <section className="py-24 bg-gray-50 text-gray-900 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                            What We Do
                        </h2>
                        <p className="text-gray-600 max-w-xl text-lg">
                            We bridge the gap between academia and industry through hands-on tracks specializing in the latest technologies.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-blue-200 hover:shadow-2xl transition-all duration-300 h-[280px] flex flex-col"
                        >
                            {/* Top part: The Illustration container */}
                            <div className="flex-1 relative overflow-hidden bg-gray-50">
                                {/* Default Engaging State */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0 opacity-100 overflow-hidden">
                                    {/* Animated gradient background */}
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                            background: `linear-gradient(135deg, ${index === 0 ? '#3b82f6, #6366f1' :
                                                    index === 1 ? '#8b5cf6, #a855f7' :
                                                        index === 2 ? '#ec4899, #f43f5e' :
                                                            index === 3 ? '#f59e0b, #ef4444' :
                                                                index === 4 ? '#14b8a6, #06b6d4' :
                                                                    '#6366f1, #3b82f6'
                                                })`,
                                        }}
                                    ></div>
                                    {/* Floating decorative circles */}
                                    <motion.div
                                        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-4 right-6 w-12 h-12 rounded-full border border-white/30"
                                    ></motion.div>
                                    <motion.div
                                        animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        className="absolute bottom-6 left-8 w-8 h-8 rounded-full border border-white/20"
                                    ></motion.div>
                                    {/* Icon */}
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-blue-600 mb-3 relative z-10"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest relative z-10">
                                        {item.desc}
                                    </span>
                                </div>

                                {/* Hover Illustration */}
                                {item.illustration}
                            </div>

                            {/* Bottom part: Content */}
                            <div className="p-6 bg-white border-t border-gray-100 relative z-10 transition-transform duration-500">
                                <h3 className="text-xl font-bold mb-1 text-gray-900 flex items-center gap-2">
                                    {item.title}
                                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}