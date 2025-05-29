export default function NewsSection() {
    return (
        <section id="news" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        Latest News
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    New Bible Study Program
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Join us for our new interactive Bible study
                                    program starting this month.
                                </p>
                                <span className="text-sm text-gray-500">
                                    December 15, 2024
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-r from-green-500 to-blue-600"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Christmas Celebration
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Special Christmas service and community
                                    dinner on December 25th.
                                </p>
                                <span className="text-sm text-gray-500">
                                    December 10, 2024
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gradient-to-r from-yellow-500 to-red-600"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Youth Ministry Launch
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Exciting new youth programs and activities
                                    for teenagers and young adults.
                                </p>
                                <span className="text-sm text-gray-500">
                                    November 28, 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
