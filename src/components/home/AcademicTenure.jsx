import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { getTenureMembers } from "../../data/tenureData"

// Animated Domain Icons
const DomainIcon = ({ domain }) => {
    const icons = {
        EB: (
            // Animated management / people icon
            <div className="relative w-7 h-7">
                {/* Central figure */}
                <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-white/90 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-3 -translate-x-1/2 w-5 h-3 bg-white/70 rounded-t-full"
                />
                {/* Left figure */}
                <motion.div
                    animate={{ x: [0, -1, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute left-0 top-1 w-2 h-2 bg-white/60 rounded-full"
                />
                <motion.div
                    animate={{ x: [0, -1, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute left-0 top-3 w-3 h-2 bg-white/50 rounded-t-full"
                />
                {/* Right figure */}
                <motion.div
                    animate={{ x: [0, 1, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute right-0 top-1 w-2 h-2 bg-white/60 rounded-full"
                />
                <motion.div
                    animate={{ x: [0, 1, 0], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute right-0 top-3 w-3 h-2 bg-white/50 rounded-t-full"
                />
            </div>
        ),
        WebArcs: (
            // Animated globe / web icon
            <div className="relative w-7 h-7">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-white/80 rounded-full"
                />
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-white/50 -translate-y-1/2" />
                {/* Vertical ellipse */}
                <motion.div
                    animate={{ scaleX: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 border-2 border-white/50 rounded-full"
                />
                {/* Orbital dot */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-1.5 h-1.5 bg-white rounded-full shadow-sm" />
                </motion.div>
            </div>
        ),
        DataVerse: (
            // Animated data / database flow
            <div className="relative w-7 h-7 flex flex-col items-center justify-center gap-[3px]">
                {[0, 1, 2].map(i => (
                    <motion.div
                        key={i}
                        animate={{ scaleX: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                        className="w-5 h-[5px] bg-white/80 rounded-full"
                    />
                ))}
                {/* Floating data particles */}
                <motion.div
                    animate={{ y: [-2, -8], opacity: [1, 0], x: [0, 3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                    className="absolute top-1 right-0 w-1 h-1 bg-white rounded-full"
                />
                <motion.div
                    animate={{ y: [-2, -8], opacity: [1, 0], x: [0, -3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                    className="absolute top-2 left-0 w-1 h-1 bg-white rounded-full"
                />
            </div>
        ),
        CP: (
            // Animated code brackets
            <div className="relative w-7 h-7 flex items-center justify-center">
                <motion.span
                    animate={{ x: [-1, -3, -1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/90 font-mono font-bold text-sm"
                >{"<"}</motion.span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-white/70 font-mono text-xs mx-0.5"
                >/</motion.span>
                <motion.span
                    animate={{ x: [1, 3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/90 font-mono font-bold text-sm"
                >{">"}</motion.span>
            </div>
        ),
        Content: (
            // Animated writing / pencil
            <div className="relative w-7 h-7">
                <motion.div
                    animate={{ rotate: [0, -5, 0, 5, 0], y: [0, -1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </motion.div>
                {/* Writing sparkles */}
                <motion.div
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-0 left-1 w-1.5 h-1.5 bg-white/60 rounded-full"
                />
            </div>
        ),
        Design: (
            // Animated palette / shapes
            <div className="relative w-7 h-7">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-200 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-200 rounded-full" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-200 rounded-full" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-200 rounded-full" />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-1.5 bg-white/30 rounded-full"
                />
            </div>
        ),
        PR: (
            // Animated megaphone with sound waves
            <div className="relative w-7 h-7 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                </motion.div>
                {/* Sound waves */}
                {[0, 1, 2].map(i => (
                    <motion.div
                        key={i}
                        animate={{ scale: [0.5, 1.5], opacity: [0.8, 0], x: [0, 6] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"
                    />
                ))}
            </div>
        ),
        Photography: (
            // Animated camera with flash
            <div className="relative w-7 h-7 flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 0.95, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </motion.div>
                {/* Flash effect */}
                <motion.div
                    animate={{ scale: [0, 1.5, 0], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    className="absolute top-0 right-0 w-2 h-2 bg-yellow-200 rounded-full"
                />
            </div>
        ),
        ARVR: (
            // Animated 3D cube
            <div className="relative w-7 h-7 flex items-center justify-center">
                <motion.div
                    animate={{ rotateY: [0, 180, 360], rotateX: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </motion.div>
            </div>
        ),
    }
    return icons[domain] || icons.EB
}

// Role badge color mapping
const roleBadgeColors = {
    "President": "bg-amber-100 text-amber-800 border-amber-200",
    "Vice President": "bg-blue-100 text-blue-800 border-blue-200",
    "Secretary": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Treasurer": "bg-purple-100 text-purple-800 border-purple-200",
    "Joint Secretary": "bg-cyan-100 text-cyan-800 border-cyan-200",
    "Lead": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "Member": "bg-gray-100 text-gray-600 border-gray-200",
}

export default function AcademicTenure() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const initialYear = queryParams.get('year') || "2025-26"

    const [selectedYear, setSelectedYear] = useState(initialYear)
    const [domainSections, setDomainSections] = useState([])

    const years = ["2022-23", "2023-24", "2024-25", "2025-26"]

    useEffect(() => {
        const yearParam = queryParams.get('year')
        if (yearParam && years.includes(yearParam)) {
            setSelectedYear(yearParam)
        }
    }, [location.search])

    useEffect(() => {
        setDomainSections(getTenureMembers(selectedYear))
    }, [selectedYear])

    return (
        <section className="min-h-screen px-6 pt-32 pb-20 bg-gray-50 text-gray-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-96 bg-blue-100/50 blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-gray-900">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tenure</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
                        Meet the teams that powered our community across the years.
                    </p>
                </motion.div>

                {/* Year Selector */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`relative px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${selectedYear === year
                                ? "text-blue-600 font-bold"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                }`}
                        >
                            {selectedYear === year && (
                                <motion.div
                                    layoutId="activeYear"
                                    className="absolute inset-0 bg-white shadow-sm border border-gray-200 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{year}</span>
                        </button>
                    ))}
                </div>

                {/* Domain Sections — Continuous Scroll */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedYear}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-20"
                    >
                        {domainSections.map((section, sectionIndex) => (
                            <motion.div
                                key={section.domain}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: sectionIndex * 0.08, duration: 0.5 }}
                            >
                                {/* Domain Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.colors.bg} flex items-center justify-center shadow-lg overflow-hidden`}
                                    >
                                        <DomainIcon domain={section.domain} />
                                    </motion.div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            {section.label}
                                        </h2>
                                        <p className="text-gray-500 text-sm mt-0.5">
                                            {section.members.length} {section.members.length === 1 ? "member" : "members"}
                                        </p>
                                    </div>
                                    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-4"></div>
                                </div>

                                {/* Members Carousel */}
                                {section.members.length > 0 ? (
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        spaceBetween={20}
                                        slidesPerView={2}
                                        navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                                        breakpoints={{
                                            480: { slidesPerView: 2, spaceBetween: 16 },
                                            640: { slidesPerView: 3, spaceBetween: 20 },
                                            768: { slidesPerView: 4, spaceBetween: 20 },
                                            1024: { slidesPerView: 5, spaceBetween: 24 },
                                        }}
                                        className="pb-12"
                                        style={{
                                            "--swiper-navigation-color": "#2563eb",
                                            "--swiper-pagination-color": "#2563eb",
                                            "--swiper-navigation-size": "24px",
                                        }}
                                    >
                                        {section.members.map((member, memberIndex) => (
                                            <SwiperSlide key={memberIndex}>
                                                <motion.div
                                                    whileHover={{ y: -6 }}
                                                    className="group"
                                                >
                                                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                                                        {/* Photo */}
                                                        <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                                                            <img
                                                                src={member.img}
                                                                alt={member.name}
                                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=2563eb&size=200&font-size=0.35`
                                                                }}
                                                            />
                                                            {/* Hover gradient overlay */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                        </div>

                                                        {/* Name + Role */}
                                                        <div className="p-3 text-center">
                                                            <p className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2 mb-1.5">
                                                                {member.name}
                                                            </p>
                                                            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${roleBadgeColors[member.role] || roleBadgeColors.Member}`}>
                                                                {member.role}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                ) : (
                                    <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 font-medium">Members coming soon</p>
                                        <p className="text-gray-300 text-sm mt-1">Photos will be added shortly</p>
                                    </div>
                                )}

                                {/* Section Divider */}
                                {sectionIndex < domainSections.length - 1 && (
                                    <div className="flex items-center gap-4 mt-8 max-w-lg mx-auto">
                                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}