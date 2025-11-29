"use client";

import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-white px-4">
      <div className="container mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex justify-center">
          <div className="relative">
            <CheckCircle className="w-24 h-24 md:w-32 md:h-32 text-primary-accent animate-scale-in" />
            <div className="absolute inset-0 bg-primary-accent/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl text-primary-accent/90 max-w-2xl mx-auto">
            We have received your details. Our team will reach out to you immediately.
          </p>
        </div>

        <div className="pt-8 flex justify-center">
          <Button
            onClick={() => router.push("/")}
            size="lg"
            className="bg-primary-accent text-primary hover:bg-primary-accent/90 text-lg font-semibold px-8 py-6 rounded-full transition-all hover:scale-105 flex items-center gap-2"
          >
            <Rocket className="h-5 w-5" />
            Go to Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;

