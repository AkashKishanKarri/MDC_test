export default function EventCard({ event }) {
    return (
        <div className="glass p-6 rounded-2xl">
            <img
                src={event.img}
                className="h-48 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-400 mt-2">{event.desc}</p>
        </div>
    )
}