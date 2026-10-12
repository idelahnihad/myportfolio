/**
 * About.tsx — About Me page (Assignment rubric items 4 & 5).
 * Shows the owner's legal name, a head-and-shoulders image, a short
 * paragraph about who they are, and a link to a PDF resume.
 */

import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">About Me</h1>

      <Card className="bg-slate-800/60 border-slate-700">
        <CardContent className="p-8 flex flex-col sm:flex-row gap-8 items-start">
          {/* Head-and-shoulders photo (replace the asset with a real photo) */}
          <img
            src={personalInfo.headshotImage}
            alt={`Headshot of ${personalInfo.fullName}`}
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shrink-0 mx-auto sm:mx-0"
          />

          <div className="space-y-4">
            {/* Legal name (rubric requirement) */}
            <h2 className="text-2xl font-semibold text-white">
              {personalInfo.fullName}
            </h2>
            <p className="text-indigo-400 font-medium">{personalInfo.tagline}</p>

            {/* Short paragraph about who I am (rubric requirement) */}
            <p className="text-slate-300 leading-relaxed">{personalInfo.shortBio}</p>

            {/* Link to the PDF version of the resume (rubric item 5) */}
            <Button asChild className="bg-indigo-600 hover:bg-indigo-500">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="mr-2 h-4 w-4" /> Download My Resume (PDF)
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
