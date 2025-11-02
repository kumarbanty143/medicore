import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { PricingTable } from "@clerk/nextjs";
import { ArrowRightIcon, CrownIcon } from "lucide-react";

function ProPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
          {/* HEADER */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
              <CrownIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Pro & Basic</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Unlock Premium AI Health Care</h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upgrade to our AI-powered plans to get instant voice consultations and take
              your health to the next level.
            </p>
          </div>

          {/* PRICING TABLE */}
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground mb-6">
              Select the perfect plan for your health needs. All plans include secure access
              to our platform.
            </p>

            <PricingTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProPage;
