import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, MicIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm">
                  <MicIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">24/7 AI Assistant</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your health
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    is our priority
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Get instant answers, book appointments, and receive personalized care
                  recommendations with our AI-powered health assistant. It's like having a doctor
                  in your pocket.
                </p>
              </div>

              <SignUpButton mode="modal">
                <Button size="lg">
                  <ArrowRightIcon className="mr-2 size-5" />
                  Get started now
                </Button>
              </SignUpButton>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-80">
              <Image
                src="/cta.png"
                alt="MediCore AI Assistant"
                fill
                className="object-contain object-center drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
