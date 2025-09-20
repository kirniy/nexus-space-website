"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  showBlur?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className = "",
  fallbackSrc,
  showBlur = true,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && showBlur && (
        <div
          className="absolute inset-0 bg-gray-800 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {!hasError ? (
        <Image
          {...props}
          src={src}
          alt={alt}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
        />
      ) : (
        /* Fallback image or placeholder */
        fallbackSrc ? (
          <Image
            {...props}
            src={fallbackSrc}
            alt={alt}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className={`${className} opacity-50`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
        ) : (
          <div
            className={`${className} bg-gray-700 flex items-center justify-center`}
            aria-label={`Изображение недоступно: ${alt}`}
          >
            <span className="text-white/50 text-sm font-mono uppercase">
              Изображение недоступно
            </span>
          </div>
        )
      )}

      {/* Loading indicator */}
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
