import { motion } from "framer-motion"

const mentors = [
    {
        name: "Dr. Mentor One",
        role: "Faculty Advisor",
        img: "https://randomuser.me/api/portraits/men/21.jpg"
    },
    {
        name: "Dr. Mentor Two",
        role: "Technical Mentor",
        img: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
        name: "Dr. Mentor Three",
        role: "Industry Mentor",
        img: "https://randomuser.me/api/portraits/men/23.jpg"
    }
]

export default function Mentors() {
    return (
        <section id="mentors" className="min-h-screen px-6 py-20 bg-[#0f1424]">

            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-20 text-center"
                >
                    Mentors
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-16">

                    {mentors.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center"
                        >
                            <img
                                src={m.img}
                                className="w-40 h-40 rounded-full mx-auto object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold">{m.name}</h3>
                            <p className="text-gray-400 mt-2">{m.role}</p>
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    )
}