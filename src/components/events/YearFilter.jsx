const years = ["2022-23", "2023-24", "2024-25", "2025-26"]

export default function YearFilter({ setYear }) {
    return (
        <div className="flex justify-center gap-4">
            {years.map(y => (
                <button
                    key={y}
                    onClick={() => setYear(y)}
                    className="glass px-6 py-2 rounded-full"
                >
                    {y}
                </button>
            ))}
        </div>
    )
}