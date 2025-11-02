import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuitIcon, CalendarCheck2Icon, ShieldCheckIcon } from "lucide-react";

function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {/* Card 1: AI-Powered Insights */}
      <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4">
            <BrainCircuitIcon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>AI-Powered Insights</CardTitle>
          <CardDescription>
            <span className="text-sm">Ask questions about health and treatments</span>
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Card 2: Verified Professionals */}
      <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4">
            <ShieldCheckIcon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>Verified Professionals</CardTitle>
          <CardDescription>
            <span className="text-sm">Connect with trusted doctors for expert advice</span>
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Card 3: Smart Appointments */}
      <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4">
            <CalendarCheck2Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>Smart Appointments</CardTitle>
          <CardDescription>Advanced capabilities for health care</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default FeatureCards;
