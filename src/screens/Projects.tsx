import React from "react";
import { Helmet } from "react-helmet-async";
import {
  GraduationCap,
  Sparkles,
  Hospital,
  Pill,
  Store,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { companyName, companyUrl, description } from "./constants";

const projects = [
  {
    icon: GraduationCap,
    title: "School ERP",
    text: "Multi-school SaaS covering admissions, fees, exams, HR, hostel, transport and a parent portal.",
    tags: ["React", "Django", "SaaS"],
  },
  {
    icon: Sparkles,
    title: "TechDometz Learn",
    text: "Interactive maths and science learning with an AI tutor, 3D simulations and gamified progress.",
    tags: ["AI Tutor", "3D", "EdTech"],
  },
  {
    icon: Hospital,
    title: "Hospital Management System",
    text: "Patient records, appointments, billing, lab, radiology and pharmacy in one system.",
    tags: ["EMR", "Billing", "Insurance"],
  },
  {
    icon: Pill,
    title: "Pharmacy System",
    text: "Medicine inventory, barcode POS, prescriptions and expiry alerts for busy dispensing counters.",
    tags: ["Inventory", "Barcode", "Reports"],
  },
  {
    icon: Store,
    title: "Offline-first POS",
    text: "Retail sales and inventory that keep working without internet and sync when the connection returns.",
    tags: ["Offline", "Cloud Sync", "Analytics"],
  },
  {
    icon: Layers,
    title: "In development",
    text: "Construction ERP, Hotel Management, CRM, Agriculture ERP and an AI Business Assistant.",
    tags: ["CRM", "Hospitality", "AgriTech"],
  },
];

const Projects: React.FC = () => (
  <>
    <Helmet>
      <title>Projects | Athumani Mwinami</title>
      <meta name="description" content={description} />
    </Helmet>

    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Products I lead and build at {companyName} — one ecosystem of systems designed for
            how East African institutions actually run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, text, tags }) => (
            <div
              key={title}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent-300 transition"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-accent-600 group-hover:text-white transition">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{text}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-6 py-3 rounded-lg font-semibold text-white bg-accent-600 hover:bg-accent-700 transition"
          >
            Explore {companyName} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Projects;
