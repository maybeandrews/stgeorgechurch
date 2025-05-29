export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">
                            ST. GEORGE HOREB JACOBITE SYRIAN CHURCH
                        </h3>
                        <p className="text-gray-400">VADAKKUMBHAGAM</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>
                        &copy; 2024 ST. GEORGE HOREB JACOBITE SYRIAN CHURCH,
                        VADAKKUMBHAGAM. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
