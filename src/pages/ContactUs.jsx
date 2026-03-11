import { useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
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

function InterestFormFull() {
    const [formData, setFormData] = useState({
        name: "", rollNo: "", phone: "", email: "", description: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const buildMailtoHref = () => {
        const subject = encodeURIComponent(`Interest Form - ${formData.name} (${formData.rollNo})`)
        const body = encodeURIComponent(
            `Name: ${formData.name}\nRoll No: ${formData.rollNo}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nDescription:\n${formData.description}`
        )
        return `mailto:mdc@gitam.in?subject=${subject}&body=${body}`
    }

    const isValid = formData.name && formData.rollNo && formData.email

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl space-y-5"
        >
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Have Interest?</h2>
                <p className="text-gray-500 text-sm">Fill in the form below and we'll get back to you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Roll No *</label>
                    <input name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="e.g. VU21CSEN0100123" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 ..." type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Why are you interested?</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Tell us about yourself and what excites you about MDC..." rows="3" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400 resize-none" />
            </div>

            {isValid ? (
                <a
                    href={buildMailtoHref()}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                >
                    📧 Send via Email
                </a>
            ) : (
                <div className="w-full bg-gray-200 text-gray-500 font-semibold py-3 rounded-xl text-center cursor-not-allowed">
                    Fill required fields (*) to send
                </div>
            )}
        </motion.div>
    )
}

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

                {/* EB Members Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto mb-20"
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        speed={3000}
                        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-8"
                        style={{ "--swiper-wrapper-transition-timing-function": "linear" }}
                    >
                        {ebMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col group">
                                    {/* Square/Rectangle Image — aspect-ratio controlled, no crop */}
                                    <div className="eb-avatar-card">
                                        <img
                                            src={member.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=2563eb&size=400`}
                                            alt={member.name}
                                            className="eb-avatar-card-img"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=2563eb&size=400`
                                            }}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="p-5 text-center flex-1 flex flex-col">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                            {member.name}
                                        </h3>
                                        <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 self-center shadow-md">
                                            {member.designation}
                                        </span>

                                        {/* Icon-only contact buttons */}
                                        <div className="flex justify-center gap-3 mt-auto">
                                            <a href={`tel:${member.phone}`} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors" title={member.phone}>
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </a>
                                            <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors" title={member.email}>
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </a>
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors" title="LinkedIn">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Interest Form */}
                <div className="max-w-2xl mx-auto">
                    <InterestFormFull />
                </div>
            </div>
        </section>
    )
}
