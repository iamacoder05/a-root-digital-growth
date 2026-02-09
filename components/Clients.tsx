"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clients = [
  { name: "Anand Organics", logo: "/assets/clients/Anand Organics.webp" },
  { name: "Bluerigger", logo: "/assets/clients/Bluerigger Logo.jpg.jpeg" },
  { name: "Digital Cance", logo: "/assets/clients/Digital Cance.jpg.jpeg" },
  { name: "Fashion Rap", logo: "/assets/clients/fashion Rap.png" },
  { name: "GVPL Technologies", logo: "/assets/clients/GVPL technologies.png" },
  { name: "Midas Wealth Advisory", logo: "/assets/clients/Midas Wealth Advisory.jpg.jpeg" },
  { name: "Rajdhani Darbar Biryani House", logo: "/assets/clients/Rajdhani Darbar biryani House.jpg.jpeg" },
  { name: "Suri Tours", logo: "/assets/clients/Suri tours.png" },
  { name: "Taste Hackers", logo: "/assets/clients/taste hackers logo (3).jpg.jpeg" },
  { name: "Urdukan", logo: "/assets/clients/urdukan.webp" },
];

const Clients = () => {
  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="clients" 
      aria-labelledby="clients-heading" 
      className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-primary-accent/8 via-primary/5 to-primary-accent/8 border-y border-primary/10 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <h2 id="clients-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading brands worldwide
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Content */}
          <div className="flex animate-scroll-clients">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center group"
              >
                <div className="flex flex-col items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-lg transition-all duration-300 min-w-[120px] md:min-w-[150px] relative">
                  {/* Logo - always visible */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain"
                        loading="lazy"
                        sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                      />
                    </div>
                  </div>
                  {/* Name - shown in grey rectangle on hover */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">
                      <span className="text-xs md:text-sm text-foreground text-center font-medium whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  </div>
                  {/* Name - shown normally when not hovering */}
                  <span className="text-xs md:text-sm text-muted-foreground transition-colors text-center font-medium group-hover:opacity-0">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Clients;

