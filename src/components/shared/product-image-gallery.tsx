'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    images.length > 1 ? [autoplayRef.current] : []
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  if (images.length === 1) {
    return (
      <div className="aspect-[4/3] relative bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-lg bg-gray-100"
      >
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] min-w-0 shrink-0 grow-0 basis-full"
            >
              <Image
                src={src}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Clickable thumbnails */}
      <div className="flex gap-2">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`relative aspect-square w-16 shrink-0 rounded-md overflow-hidden bg-gray-100 transition-all ${
              index === selectedIndex
                ? 'ring-2 ring-[#0099CC] opacity-100'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-contain"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
