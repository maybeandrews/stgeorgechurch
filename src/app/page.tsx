"use client";
import { useState } from "react";
import Header from "../components/Header";
import ImageSlideshow from "../components/ImageSlideshow";
import AboutSection from "../components/AboutSection";
import NewsSection from "../components/NewsSection";
import EventsSection from "../components/EventsSection";
import DonateSection from "../components/DonateSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
    const [bgColor, setBgColor] = useState("#4a5568"); // Default to the first slide's color

    const handleColorChange = (color: string) => {
        setBgColor(color);
    };

    return (
        <main
            className="relative min-h-screen transition-colors duration-1000"
            style={{ backgroundColor: bgColor }}
        >
            <Header initialColor="bg-transparent" />{" "}
            {/* Pass transparent as initial color */}
            <ImageSlideshow onColorChange={handleColorChange} />
            <AboutSection />
            <NewsSection />
            <EventsSection />
            <DonateSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
