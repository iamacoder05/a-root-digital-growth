"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  image: string;
}

interface RelatedPostsProps {
  relatedPosts: RelatedPost[];
}

const RelatedPosts = ({ relatedPosts }: RelatedPostsProps) => {
  if (relatedPosts.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">No related posts found.</p>
    );
  }

  // Only show navigation buttons if there are more than 3 posts
  const showNavigation = relatedPosts.length > 3;

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {relatedPosts.map((relatedPost) => (
            <CarouselItem key={relatedPost.slug} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="group hover:shadow-xl transition-all duration-300 border-primary/10 overflow-hidden h-full">
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-accent transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && (
          <>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default RelatedPosts;

