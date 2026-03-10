import { motion } from "framer-motion"

const founders = [
    {
        name: "Founder One",
        role: "Co-Founder",
        img: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        name: "Founder Two",
        role: "Co-Founder",
        img: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        name: "Founder Three",
        role: "Co-Founder",
        img: "https://randomuser.me/api/portraits/men/13.jpg"
    }
]

export default function Founders() {
    return (
        <section id="founders" className="min-h-screen px-6 py-20">

            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-20 text-center"
                >
                    Founders of MDC
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-16">

                    {founders.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center"
                        >
                            <img
                                src={f.img}
                                className="w-40 h-40 rounded-full mx-auto object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold">{f.name}</h3>
                            <p className="text-gray-400 mt-2">{f.role}</p>
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    )
}