export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">
                        About Our Church
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 mb-6">
                                ST. GEORGE HOREB JACOBITE SYRIAN CHURCH,
                                VADAKKUMBHAGAM is a vibrant community dedicated
                                to spreading the love of Christ and serving our
                                local community. We welcome all who seek
                                spiritual growth, fellowship, and a deeper
                                relationship with God.
                            </p>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                                Our Values
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Faith, Hope, and Love</li>
                                <li>• Community and Fellowship</li>
                                <li>• Service to Others</li>
                                <li>• Spiritual Growth and Learning</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                                Service Times
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-700">
                                        Sunday Morning Service
                                    </span>
                                    <span className="text-gray-600">
                                        9:00 AM
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-700">
                                        Sunday Evening Service
                                    </span>
                                    <span className="text-gray-600">
                                        6:00 PM
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-700">
                                        Wednesday Prayer Meeting
                                    </span>
                                    <span className="text-gray-600">
                                        7:00 PM
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-700">
                                        Friday Bible Study
                                    </span>
                                    <span className="text-gray-600">
                                        7:30 PM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
