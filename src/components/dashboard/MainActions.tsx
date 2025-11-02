import { Button } from "@/components/ui/button";
import { CalendarIcon, CheckCircleIcon, MicIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";

function MainActions() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {/* AI Voice Assistant Card */}
      <div className="group relative p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/20 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <MicIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">AI Health Companion</h3>
          <p className="text-muted-foreground text-sm mb-4">Get instant health advice through voice calls</p>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">24/7 availability</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">Symptom assessment</span>
            </li>
          </ul>
        </div>
        <Link href="/voice" className="relative z-10 mt-auto">
          <Button variant="outline" className="w-full bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors">
            Try Voice Assistant
          </Button>
        </Link>
      </div>

      {/* Book Appointment Card */}
      <div className="group relative p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl border-2 border-blue-500/20 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <CalendarIcon className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Book an Appointment</h3>
          <p className="text-muted-foreground text-sm mb-4">Schedule a visit with our verified medical professionals</p>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="text-muted-foreground">Flexible scheduling</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="text-muted-foreground">Instant confirmations</span>
            </li>
          </ul>
        </div>
        <Link href="/appointments" className="relative z-10 mt-auto">
          <Button variant="outline" className="w-full bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 transition-colors">
            Book Now
          </Button>
        </Link>
      </div>

      {/* Pro Plan Card */}
      <div className="group relative p-6 bg-gradient-to-br from-gray-500/10 to-gray-500/5 rounded-2xl border-2 border-gray-500/20 flex flex-col justify-between hover:border-gray-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-500/20 to-gray-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <ShieldCheckIcon className="w-6 h-6 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Upgrade to Pro</h3>
          <p className="text-muted-foreground text-sm mb-4">Unlock advanced AI features and priority support</p>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-gray-500 shrink-0" />
              <span className="text-muted-foreground">Unlimited AI consultations</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-gray-500 shrink-0" />
              <span className="text-muted-foreground">Priority support</span>
            </li>
          </ul>
        </div>
        <Link href="/pro" className="relative z-10 mt-auto">
          <Button variant="outline" className="w-full bg-gray-500/10 border-gray-500/20 hover:bg-gray-500/20 transition-colors">
            View Pro Plans
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainActions;