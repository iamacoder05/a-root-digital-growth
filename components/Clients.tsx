"use client";

import Image from "next/image";

const clients = [
  { name: "TechStart Inc", logo: "/placeholder.svg" },
  { name: "GrowthCo", logo: "/placeholder.svg" },
  { name: "StyleHub", logo: "/placeholder.svg" },
  { name: "InnovateLab", logo: "/placeholder.svg" },
  { name: "DigitalFlow", logo: "/placeholder.svg" },
  { name: "CloudSync", logo: "/placeholder.svg" },
  { name: "NextGen Solutions", logo: "/placeholder.svg" },
  { name: "SmartBiz", logo: "/placeholder.svg" },
];

const Clients = () => {
  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" aria-labelledby="clients-heading" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary-accent/8 via-primary/5 to-primary-accent/8 border-y border-primary/10 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
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
                <div className="flex flex-col items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-lg hover:bg-muted/50 transition-all duration-300 min-w-[120px] md:min-w-[150px]">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center font-medium">
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

