export default function DonateSection() {
    return (
        <section
            id="donate"
            className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-8">
                        Support Our Ministry
                    </h2>
                    <p className="text-xl mb-8">
                        Your generous donations help us continue our mission of
                        spreading God's love and serving our community. Every
                        contribution makes a difference.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white bg-opacity-20 rounded-lg p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Building Fund
                            </h3>
                            <p>
                                Help us maintain and improve our church
                                facilities.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Community Outreach
                            </h3>
                            <p>
                                Support our programs that serve those in need.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Youth Ministry
                            </h3>
                            <p>
                                Invest in the spiritual growth of our young
                                people.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Donate Online
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-full font-semibold transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
