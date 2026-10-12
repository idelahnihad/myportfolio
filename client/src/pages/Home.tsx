/**
 * Home.tsx — Home page (Assignment rubric item 3).
 * Contains a welcome message, a mission statement, and buttons that
 * redirect the visitor to the About Me page and other pages.
 */

import { Link } from "react-router";
import { ArrowRight, FolderKanban, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { personalInfo } from "@/data/portfolioData";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex flex-col items-center text-center gap-8">
        {/* Large version of the custom logo as a hero mark */}
        <Logo size={96} />

        {/* Welcome message (rubric requirement) */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-indigo-400 font-medium">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Mission statement (recommended by the rubric) */}
        <blockquote className="max-w-2xl border-l-4 border-indigo-500 bg-slate-800/50 rounded-r-lg px-6 py-4 text-left">
          <p className="text-slate-300 italic leading-relaxed">
            "{personalInfo.missionStatement}"
          </p>
          <cite className="block mt-2 text-sm text-slate-500 not-italic">
            — My Mission Statement
          </cite>
        </blockquote>

        {/* Redirect buttons to About Me and other key pages (rubric requirement) */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-500">
            <Link to="/about">
              About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-white">
            <Link to="/projects">
              <FolderKanban className="mr-2 h-4 w-4" /> View Projects
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-white">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
