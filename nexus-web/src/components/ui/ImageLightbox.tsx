"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLightbox = ({ images, currentIndex, isOpen, onClose }: ImageLightboxProps) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setActiveIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
          break;
        case 'ArrowRight':
          setActiveIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const activeImage = images[activeIndex] ?? "";
  if (!activeImage) return null;

  const normalizedSrc = activeImage.startsWith('/') ? activeImage : `/${activeImage}`;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white text-4xl font-mono hover:scale-110 transition-transform z-10"
        aria-label="Close"
      >
        ×
      </button>

      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
        }}
        className="absolute left-8 text-white text-4xl font-mono hover:scale-110 transition-transform z-10"
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
        }}
        className="absolute right-8 text-white text-4xl font-mono hover:scale-110 transition-transform z-10"
        aria-label="Next"
      >
        ›
      </button>

      {/* Image container */}
      <div
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={normalizedSrc}
          alt={`Пространство NEXUS ${activeIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />

        {/* Image counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-mono">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
