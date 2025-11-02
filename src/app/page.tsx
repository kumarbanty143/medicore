// src/app/page.tsx (Corrected)
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";
import { syncUser } from "@/lib/actions/users"; // Assuming this is your getOrCreateUser logic
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  // redirect auth user to dashboard
  if (user) {
    // 1. User is logged in.
    // 2. NOW it's safe to sync them to our database.
    await syncUser();
    
    // 3. Redirect them to the dashboard.
    redirect("/dashboard");
  }

  // User is logged out, show them the landing page.
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}