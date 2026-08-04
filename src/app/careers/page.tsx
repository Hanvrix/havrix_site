"use client";

import { useState } from "react";
import BreadcrumbHeader from "@/components/ui/BreadcrumbHeader";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  Rocket, 
  Users, 
  Code2, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Send,
  HeartHandshake,
  Upload,
  Paperclip
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CareersPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const benefits = [
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description: "Work with PHP, React, Node.js, Next.js, TypeScript, Tailwind CSS, AI Automation, & AWS Cloud."
    },
    {
      icon: Rocket,
      title: "Fast Career Acceleration",
      description: "Direct mentorship from engineering leads and rapid ownership of core production features."
    },
    {
      icon: HeartHandshake,
      title: "Supportive Work Culture",
      description: "Work-life balance, collaborative team environment, and competitive performance bonuses."
    },
    {
      icon: Users,
      title: "Local Tech Impact",
      description: "Be part of Salem's fastest-growing IT hub, digitizing major regional industries and global clients."
    }
  ];

  const openPositions = [
    {
      id: "fullstack-dev",
      title: "FullStack Developer (PHP, Laravel, React, Node)",
      department: "Engineering",
      location: "100% Remote",
      type: "Full-Time",
      experience: "0 - 2 Years",
      salary: "Competitive (Interview & Performance-based)",
      description: "Looking for an energetic FullStack Developer proficient in PHP (Laravel), React.js, and Node.js to build dynamic web applications and web services.",
      skills: ["PHP / Laravel", "React.js", "Node.js", "MySQL / REST APIs"]
    },
    {
      id: "flutter-dev",
      title: "Flutter Developer",
      department: "Mobile Development",
      location: "100% Remote",
      type: "Full-Time",
      experience: "1 - 2 Years",
      salary: "Competitive (Interview & Performance-based)",
      description: "Develop cross-platform mobile apps for Android and iOS using Flutter & Dart with clean state management, REST API integration, and smooth UI animations.",
      skills: ["Flutter & Dart", "REST APIs", "State Management (Provider/Bloc)", "Play Store / App Store"]
    },
    {
      id: "ui-ux",
      title: "UI/UX Designer",
      department: "Design",
      location: "100% Remote",
      type: "Full-Time",
      experience: "0 - 2 Years",
      salary: "Competitive (Interview & Performance-based)",
      description: "Design intuitive user flows, wireframes, component design systems, and responsive web/mobile interface prototypes in Figma.",
      skills: ["Figma / Adobe XD", "User Research", "Wireframing & Prototyping", "Design Systems"]
    },
    {
      id: "testing",
      title: "Software Testing Engineer",
      department: "Quality Assurance",
      location: "100% Remote",
      type: "Full-Time",
      experience: "0 - 2 Years",
      salary: "Competitive (Interview & Performance-based)",
      description: "Perform functional, regression, API, and UI testing across web & mobile platforms to ensure zero-defect software releases.",
      skills: ["Manual & Automated Testing", "API Testing (Postman)", "Bug Tracking (Jira)", "QA Test Cases"]
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header */}
      <BreadcrumbHeader title="Build Next-Gen Software With Us" pageName="Careers" />

      {/* 2. Intro & Culture */}
      <Section light={true} className="py-10 md:py-14">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
            JOIN OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5C] tracking-tight">
            Do Your Best Work at <span className="text-primary-green font-handwriting text-4xl sm:text-5xl lg:text-6xl font-normal inline-block">Hanvrix</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            We are a team of passionate engineers, designers, and problem solvers building modern software for industries across Tamil Nadu and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1360px] mx-auto">
          {benefits.map((b, idx) => {
            const IconComponent = b.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08}>
                <Card className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-left h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0F2D5C]">{b.title}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{b.description}</p>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* 3. Open Positions */}
      <Section light={true} className="py-10 md:py-14 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
              Open Positions
            </h2>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, idx) => (
              <FadeIn key={job.id} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-left">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary-green/10 text-primary-green font-bold text-xs uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="flex items-center text-xs font-semibold text-slate-500 gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center text-xs font-semibold text-slate-500 gap-1">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0F2D5C] tracking-tight">
                      {job.title}
                    </h3>

                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {job.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-wrap lg:flex-col items-center lg:items-end justify-between gap-3 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-8">
                    <div className="text-left lg:text-right">
                      <span className="block text-xs font-bold text-slate-400 uppercase">Experience</span>
                      <span className="text-sm font-extrabold text-[#0F2D5C]">{job.experience}</span>
                    </div>

                    <div className="text-left lg:text-right">
                      <span className="block text-xs font-bold text-slate-400 uppercase">Salary</span>
                      <span className="text-xs font-bold text-primary-green">{job.salary}</span>
                    </div>

                    <a href="#apply" className="w-full lg:w-auto">
                      <Button variant="primary" showArrow={true} className="w-full lg:w-auto px-6 h-[44px] text-xs justify-center">
                        Apply Now
                      </Button>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Simple Application Form Section */}
      <Section id="apply" light={true} className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-left">
          <div className="mb-8 text-center space-y-2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
              QUICK APPLICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D5C]">
              Apply for a Role
            </h3>
            <p className="text-slate-600 font-medium text-sm">
              Fill in your details below and our team will get back to you within 48 hours.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you for applying! We will review your application soon."); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">Full Name *</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">Email Address *</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">Phone Number *</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">Role Applied For *</label>
                <select required className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green">
                  <option value="fullstack-dev">FullStack Developer (PHP, Laravel, React, Node)</option>
                  <option value="flutter-dev">Flutter Developer</option>
                  <option value="ui-ux">UI/UX Designer</option>
                  <option value="testing">Software Testing Engineer</option>
                  <option value="other">Other / Open Application</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">LinkedIn / Portfolio Link</label>
              <input type="url" placeholder="https://linkedin.com/in/username" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">
                Upload Resume / CV (PDF, DOC, DOCX) *
              </label>
              <div className="relative border-2 border-dashed border-slate-200 hover:border-primary-green rounded-xl p-5 bg-slate-50 text-center transition-colors cursor-pointer group">
                <input
                  required
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setResumeFile(e.target.files[0]);
                    }
                  }}
                />
                <div className="flex flex-col items-center justify-center space-y-1.5">
                  <Upload className="w-6 h-6 text-slate-400 group-hover:text-primary-green transition-colors" />
                  {resumeFile ? (
                    <span className="text-sm font-bold text-primary-green flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      <Paperclip className="w-4 h-4" /> {resumeFile.name}
                    </span>
                  ) : (
                    <p className="text-xs font-medium text-slate-600">
                      <span className="font-bold text-primary-green">Click to upload</span> or drag and drop your resume (PDF, DOC, DOCX max 5MB)
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">Brief Introduction / Note</label>
              <textarea rows={4} placeholder="Tell us briefly about your experience and why you'd like to join Hanvrix..." className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green resize-none"></textarea>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" showArrow={true} className="w-full h-[50px] justify-center">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </Section>

      {/* 5. Footer Email CTA */}
      <section className="bg-brand-primary py-12 md:py-16 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Don&apos;t See an Open Role That <span className="underline decoration-white/30">Fits Your Profile?</span>
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
              We are always looking for exceptional talent. Send your resume directly to our recruitment team.
            </p>
            <div className="flex justify-center">
              <a href="mailto:careers@hanvrix.com">
                <Button variant="white" showArrow={true} className="px-10 h-[50px]">
                  Email Resume to careers@hanvrix.com
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
