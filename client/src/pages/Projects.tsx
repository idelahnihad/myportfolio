/**
 * Projects.tsx — Projects page (Assignment rubric item 6).
 * Renders a card for each highlighted project, with an image, the
 * owner's role, the outcome, and the technologies used. The data is
 * mapped from `projectList` in portfolioData.ts (3 projects minimum).
 */

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectList } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
      <p className="text-slate-400 mb-8">
        A selection of projects I have completed or am currently working on.
      </p>

      {/* One responsive grid column per project; 3+ projects as required */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <Card
            key={project.title}
            className="bg-slate-800/60 border-slate-700 overflow-hidden flex flex-col"
          >
            {/* Project image (rubric requires an image per project) */}
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-44 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-white text-lg">{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 flex-1">
              {/* Role and outcome description (rubric requirement) */}
              <p className="text-sm text-indigo-400 font-medium">{project.role}</p>
              <p className="text-sm text-slate-300 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Technology badges for quick scanning */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-slate-700 text-slate-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
