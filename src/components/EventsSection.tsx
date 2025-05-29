export default function EventsSection() {
    return (
        <section id="events" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        Upcoming Events
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Christmas Carol Service
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    Join us for a beautiful evening of Christmas
                                    carols and fellowship.
                                </p>
                                <span className="text-sm text-gray-500">
                                    📅 December 24, 2024 at 7:00 PM
                                </span>
                            </div>
                            <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    New Year Prayer Service
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    Welcome the new year with prayer, worship,
                                    and thanksgiving.
                                </p>
                                <span className="text-sm text-gray-500">
                                    📅 December 31, 2024 at 11:00 PM
                                </span>
                            </div>
                            <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Community Outreach Program
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    Join us in serving our local community
                                    through various outreach initiatives.
                                </p>
                                <span className="text-sm text-gray-500">
                                    📅 January 15, 2025 at 9:00 AM
                                </span>
                            </div>
                            <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
