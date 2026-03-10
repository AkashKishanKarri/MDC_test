import { motion } from "framer-motion"

export default function History() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden"
            >
                {/* Decorative element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/50 rounded-full blur-[60px]"></div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        The Inception
                    </h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Meta Developer Communities (MDC) at GITAM was founded with the
                    vision of creating a student-driven ecosystem focused on
                    technical excellence, collaboration, and innovation.
                </p>
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-200 to-transparent rounded"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden ml-0 md:ml-12"
            >
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-100/50 rounded-full blur-[60px]"></div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Building the Foundation
                    </h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                    Since its inception, MDC has organized workshops, hackathons,
                    collaborative projects, and domain-based mentoring sessions to
                    empower students with real-world development skills.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden"
            >
                <div className="absolute -top-24 right-1/2 w-48 h-48 bg-purple-100/50 rounded-full blur-[60px]"></div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Present Day
                    </h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                    Today, MDC stands as a structured technical community bringing
                    together developers, designers, data enthusiasts, and leaders.
                </p>
            </motion.div>
        </div>
    )
}