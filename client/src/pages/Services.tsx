/**
 * Services.tsx — Services page (Assignment rubric item 8).
 * Shows a short list of services offered, each with a visual icon to
 * make the page more appealing. Data comes from `serviceOfferings`,
 * and the `icon` key is mapped to a Lucide icon component below.
 */

import {
  Globe,
  Code2,
  Database,
  ClipboardList,
  BarChart3,
  KanbanSquare,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceOfferings } from "@/data/portfolioData";

// Maps the string key in the data file to an actual icon component
const serviceIcons: Record<string, LucideIcon> = {
  globe: Globe,
  code: Code2,
  database: Database,
  clipboard: ClipboardList,
  chart: BarChart3,
  kanban: KanbanSquare,
};

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Services</h1>
      <p className="text-slate-400 mb-8">
        Services I offer as a developer and problem solver.
      </p>

      {/* Service cards with images/icons (rubric recommends visuals) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceOfferings.map((service) => {
          const ServiceIcon = serviceIcons[service.icon] ?? Code2; // fallback icon
          return (
            <Card
              key={service.title}
              className="bg-slate-800/60 border-slate-700 hover:border-indigo-500/60 transition-colors"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                {/* Icon badge acts as the visual/image for each service */}
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500">
                  <ServiceIcon className="h-5 w-5 text-white" />
                </span>
                <CardTitle className="text-white text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
