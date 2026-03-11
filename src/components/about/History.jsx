import { motion } from "framer-motion"

export default function History() {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Our History
                </h2>

                <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/50 rounded-full blur-[60px]"></div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                        Meta Developer Communities (MDC) at GITAM was founded with the vision of creating a student-driven ecosystem focused on technical excellence, collaboration, and innovation. What started as a small initiative to connect like-minded programmers has grown into one of the most impactful technical communities in the university.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                        Since its inception, MDC has organized workshops, hackathons, collaborative projects, and domain-based mentoring sessions to empower students with real-world development skills. Through these initiatives, members have built production-grade projects, won competitions, and developed expertise across multiple technology domains.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                        Today, MDC stands as a structured technical community bringing together developers, designers, data enthusiasts, and leaders. The journey continues as we build developers who don't just learn technology — but create with it.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}