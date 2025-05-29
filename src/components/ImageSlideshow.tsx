"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

interface Slide {
    src: string;
    alt: string;
    preTitle?: string; // Added for text like "I am the light of the world"
    title?: string;
    subtitle?: string;
    dominantColor: string;
}

interface ImageSlideshowProps {
    onColorChange: (color: string) => void;
}

const ImageSlideshow = ({ onColorChange }: ImageSlideshowProps) => {
    const slides: Slide[] = useMemo(
        () => [
            {
                src: "/images/homeimage.jpg",
                alt: "ST. GEORGE HOREB JACOBITE SYRIAN CHURCH, VADAKKUMBHAGAM",
                preTitle: "I am the light of the world",
                title: "Join Our Community",
                subtitle: "Sunday Service at 9:00 AM",
                dominantColor: "#4a5568",
            },
            {
                src: "/images/homeimage2.jpg",
                alt: "ST. GEORGE HOREB JACOBITE SYRIAN CHURCH, VADAKKUMBHAGAM",
                preTitle: "Love. Serve. Worship.",
                title: "Experience His Presence",
                subtitle: "Mid-week prayers every Wednesday",
                dominantColor: "#744210",
            },
        ],
        []
    );

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        onColorChange(slides[currentSlide].dominantColor);
    }, [currentSlide, onColorChange, slides]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className={`object-cover transition-transform duration-[10000ms] ease-out ${
                            index === currentSlide ? "scale-125" : "scale-100"
                        }`}
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />{" "}
                    {/* Increased opacity slightly */}
                    {/* Slide Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <div className="text-white max-w-3xl">
                            {slide.preTitle && (
                                <p className="text-lg md:text-xl font-light mb-2 animate-fade-in opacity-90 text-shadow-sm">
                                    {slide.preTitle}
                                </p>
                            )}
                            {slide.title && (
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 animate-fade-in text-shadow-md">
                                    {slide.title}
                                </h2>
                            )}
                            {slide.subtitle && (
                                <p className="text-lg sm:text-xl md:text-2xl font-light animate-fade-in-delay text-shadow-sm">
                                    {slide.subtitle}
                                </p>
                            )}
                            {/* Buttons removed as per screenshot style for hero */}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-all"
                aria-label="Previous slide"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-all"
                aria-label="Next slide"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentSlide
                                ? "bg-white scale-125"
                                : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlideshow;
