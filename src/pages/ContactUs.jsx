import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../pages/ContactUs.css"

const ebMembers = [
    {
        name: "Nitish Raj Vinnakota",
        designation: "President",
        email: "president@mdc.com",
        linkedin: "https://linkedin.com/in/",
        phone: "+91 98765 43210",
        img: "./25_26/EB_25-26/VINNAKOTA NITISH RAJ.jpg"
    },
    {
        name: "Rachakonda V S S Gagan",
        designation: "Vice President",
        email: "vicepresident@mdc.com",
        linkedin: "https://linkedin.com/in/",
        phone: "+91 98765 43211",
        img: "./25_26/EB_25-26/RACHAKONDA V S S GAGAN.webp"
    },
    {
        name: "Sravani Kalisetty",
        designation: "Secretary",
        email: "techlead@mdc.com",
        linkedin: "https://linkedin.com/in/",
        phone: "+91 98765 43212",
        img: "./25_26/EB_25-26/SRAVANI KALISETTY.jpg"
    },
    {
        name: "Snehal Andavarapu",
        designation: "Treasurer",
        email: "creative@mdc.com",
        linkedin: "https://linkedin.com/in/",
        phone: "+91 98765 43213",
        img: "./25_26/EB_25-26/SNEHAL ANDAVARAPU.jpg"
    },
    {
        name: "Ishita Gupta",
        designation: "Joint Secretary",
        email: "events@mdc.com",
        linkedin: "https://linkedin.com/in/",
        phone: "+91 98765 43214",
        img: "./25_26/EB_25-26/ISHITA GUPTA.jpg"
    }
]

export default function ContactUs() {
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
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Us</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
                        Get in touch with our Executive Board members.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-14"
                        style={{
                            "--swiper-navigation-color": "#2563eb",
                            "--swiper-pagination-color": "#2563eb",
                            "--swiper-navigation-size": "28px"
                        }}
                    >
                        {ebMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col items-center group">
                                    {/* Avatar */}
                                    <div className="eb-avatar-wrapper">
                                        <img
                                            src={member.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=2563eb&size=150`}
                                            alt={member.name}
                                            className="eb-avatar-img"
                                        />
                                    </div>

                                    {/* Info */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {member.name}
                                    </h3>
                                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
                                        {member.designation}
                                    </span>

                                    {/* Contact Details */}
                                    <div className="w-full space-y-3 mt-auto">
                                        {/* Email */}
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-blue-700 group/link"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover/link:text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="truncate">{member.email}</span>
                                        </a>

                                        {/* Phone */}
                                        <a
                                            href={`tel:${member.phone}`}
                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-blue-700 group/link"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover/link:text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span>{member.phone}</span>
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-blue-700 group/link"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover/link:text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                            <span>LinkedIn Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}
