/**
 * Education.tsx — Education page (Assignment rubric item 7).
 * Lists every educational/professional qualification as a vertical
 * timeline, including the institution, credential obtained, and the
 * dates/years of study. Data comes from `educationHistory`.
 */

import { GraduationCap } from "lucide-react";
import { educationHistory } from "@/data/portfolioData";

export default function Education() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Education</h1>
      <p className="text-slate-400 mb-10">
        My educational background and professional qualifications.
      </p>

      {/* Vertical timeline of qualifications */}
      <ol className="relative border-l-2 border-indigo-500/50 ml-3 space-y-10">
        {educationHistory.map((entry) => (
          <li key={`${entry.institution}-${entry.startYear}`} className="ml-8">
            {/* Timeline node icon */}
            <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-slate-900">
              <GraduationCap className="h-4 w-4 text-white" />
            </span>

            {/* Dates / years of study (rubric requirement).
                Some entries (e.g. certifications) have no start year, so
                the date line is built from whichever values exist. */}
            {(entry.startYear || entry.endYear) && (
              <p className="text-sm font-medium text-indigo-400">
                {entry.startYear && entry.endYear
                  ? `${entry.startYear} — ${entry.endYear}`
                  : entry.startYear || entry.endYear}
              </p>
            )}

            {/* Degree / credential obtained (rubric requirement) */}
            <h2 className="text-lg font-semibold text-white mt-1">
              {entry.credential}
            </h2>
            <p className="text-slate-300">{entry.institution}</p>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              {entry.details}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
