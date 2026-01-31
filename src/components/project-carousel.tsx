"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";

export interface ProjectCarouselProps {
  webImages: string[];
  mobileImages: string[];
  autoplayDelay?: number;
}

export function ProjectCarousel({
  webImages,
  mobileImages,
  autoplayDelay = 3000,
}: ProjectCarouselProps) {
  const isMobile = useIsMobile();
  const plugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  );

  const images = isMobile ? mobileImages : webImages;

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full overflow-hidden ">
              <Card className="p-0 m-0 overflow-hidden">
                <img
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full object-cover aspect-[3/4] md:aspect-video m-0 p-0
                "
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
