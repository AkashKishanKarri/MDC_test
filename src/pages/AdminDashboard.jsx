import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function AdminDashboard() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [domain, setDomain] = useState("")
    const [year, setYear] = useState("2025-26")
    const [date, setDate] = useState("")
    const [images, setImages] = useState([""])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const years = ["2022-23", "2023-24", "2024-25", "2025-26"]

    const handleImageChange = (index, value) => {
        const updated = [...images]
        updated[index] = value
        setImages(updated)
    }

    const addImageField = () => {
        setImages([...images, ""])
    }

    const removeImageField = (index) => {
        const updated = images.filter((_, i) => i !== index)
        setImages(updated.length ? updated : [""])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await addDoc(collection(db, "events"), {
                title,
                description,
                domain,
                year,
                date,
                images: images.filter(img => img !== ""),
                createdAt: serverTimestamp()
            })

            alert("Event Added Successfully")

            setTitle("")
            setDescription("")
            setDomain("")
            setYear("2025-26")
            setDate("")
            setImages([""])

        } catch (error) {
            console.error(error)
            alert("Error adding event")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleLogout = () => {
        navigate("/admin")
    }

    return (
        <div className="min-h-screen px-6 pt-32 pb-24 bg-gray-50 text-gray-900 relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-blue-100/40 blur-[120px] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 flex flex-col items-center"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Admin Dashboard
                    </h2>
                    <p className="text-gray-500 mt-2">Manage and publish MDC events</p>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-full transition-colors border border-red-200 shadow-sm"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                        <input
                            type="text"
                            placeholder="e.g. Masterclass on React"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            placeholder="What is this event about?"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows="4"
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-y"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Domain Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Web Arcs, Data Verse, Creative"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer"
                            >
                                {years.map((y, i) => (
                                    <option key={i} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Event Images</label>
                        <div className="space-y-3">
                            {images.map((img, index) => (
                                <div key={index} className="flex gap-2">
                                    <input
                                        type="url"
                                        placeholder="https://example.com/image.jpg"
                                        value={img}
                                        onChange={(e) => handleImageChange(index, e.target.value)}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    />
                                    {images.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeImageField(index)}
                                            className="p-4 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors shrink-0"
                                            title="Remove image"
                                        >
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={addImageField}
                            className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            Add Another Image
                        </button>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                "Publish Event"
                            )}
                        </button>
                    </div>

                </motion.form>

            </div>
        </div>
    )
}