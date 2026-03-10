import { motion } from "framer-motion"

const members = [
    { name: "John Doe", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Alex Lee", img: "https://randomuser.me/api/portraits/men/3.jpg" }
]

export default function Domains() {
    return (
        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">

            {members.map((m, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="text-center"
                >
                    <img
                        src={m.img}
                        className="w-28 h-28 rounded-full mx-auto mb-6 object-cover"
                    />
                    <p className="text-lg font-medium">{m.name}</p>
                </motion.div>
            ))}

        </div>
    )
}