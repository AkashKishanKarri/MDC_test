import { motion } from "framer-motion"

export default function Founders() {
    const founders = [
        { name: "Founder Name", role: "Role / Batch", img: "/founders/founder1.jpg" },
        { name: "Founder Name", role: "Role / Batch", img: "/founders/founder2.jpg" },
        { name: "Founder Name", role: "Role / Batch", img: "/founders/founder3.jpg" },
    ]

    return (
        <div className="w-full">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                The Visionaries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 ml-0 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                {founders.map((founder, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15, duration: 0.4 }}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-100/50 rounded-3xl blur-xl group-hover:bg-blue-200/50 transition-colors duration-500"></div>

                        <div className="relative bg-white border border-gray-100 rounded-3xl p-6 text-center overflow-hidden h-full shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[40px]"></div>

                            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-blue-400 to-indigo-600">
                                <img
                                    src={founder.img}
                                    alt={founder.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-white"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${founder.name.split(' ')[0]}&background=f3f4f6&color=2563eb&size=150`
                                    }}
                                />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{founder.name}</h3>
                            <p className="text-blue-600 font-medium">{founder.role}</p>

                            <div className="mt-6 flex justify-center gap-4">
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}