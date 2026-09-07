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
  Paperclip,
  ChevronDown,
  Copy,
  Check,
  Mail
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CareersPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("fullstack-dev");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hanvrix@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleApplyClick = (jobId: string) => {
    setSelectedRole(jobId);
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: Code2,
      title: "Real-Time Live Projects",
      description: "Gain hands-on experience by building features for real production applications and live client systems."
    },
    {
      icon: Rocket,
      title: "Interview Prep & Mentorship",
      description: "Get technical interview guidance, code reviews, and mentorship from senior developers to make you job-ready."
    },
    {
      icon: HeartHandshake,
      title: "Verified Experience Certificate",
      description: "Receive an official Hanvrix Internship Certificate and Recommendation Letter upon successful completion."
    },
    {
      icon: Users,
      title: "Direct Full-Time Hiring Priority",
      description: "100% free internship with zero fees. Top performing interns get direct priority for open full-time vacancies at Hanvrix."
    }
  ];

  const openPositions = [
    {
      id: "fullstack-dev",
      title: "FullStack Developer Intern (PHP, Laravel, React, Node)",
      department: "Engineering",
      location: "100% Remote",
      type: "Unpaid Internship",
      experience: "Freshers / Students",
      stipendPolicy: "Company Unpaid (No Stipend) • 100% Free for Candidates (Zero Fees)",
      summary: "Work on live enterprise PHP (Laravel), React.js, and Node.js projects. Build real production software experience, interview preparation, and priority for full-time job openings at Hanvrix.",
      responsibilities: [
        "Develop web application features using PHP (Laravel), React.js, and Node.js for live products.",
        "Design and integrate RESTful APIs with relational databases (MySQL / PostgreSQL).",
        "Collaborate with senior developers on code reviews, debugging, and performance optimization.",
        "Participate in real production software deployment workflows and agile sprint cycles."
      ],
      benefits: [
        "Real-Time Production Project Experience on live software applications.",
        "Official Hanvrix Internship Experience Certificate & Letter of Recommendation.",
        "Technical Interview Preparation & 1-on-1 Mentorship to make you job-ready.",
        "Direct Priority for Full-Time Hiring at Hanvrix whenever job vacancies open up."
      ],
      skills: ["PHP / Laravel", "React.js", "Node.js", "MySQL / REST APIs"]
    },
    {
      id: "flutter-dev",
      title: "Flutter Developer Intern",
      department: "Mobile Development",
      location: "100% Remote",
      type: "Unpaid Internship",
      experience: "Freshers / Students",
      stipendPolicy: "Company Unpaid (No Stipend) • 100% Free for Candidates (Zero Fees)",
      summary: "Build cross-platform mobile app features for Android & iOS using Flutter & Dart with REST API integration, smooth UI components, and state management.",
      responsibilities: [
        "Build responsive mobile app screens and components using Flutter & Dart.",
        "Integrate backend REST APIs for real-time data fetching and state updates.",
        "Implement clean state management (Provider/Bloc) and smooth UI animations.",
        "Test and debug mobile app builds for Play Store and App Store readiness."
      ],
      benefits: [
        "Real-Time Production Mobile App Work Experience.",
        "Official Hanvrix Internship Experience Certificate & Letter of Recommendation.",
        "Technical Interview Preparation & Mobile Architecture Mentorship.",
        "Direct Priority for Full-Time Hiring at Hanvrix whenever job vacancies open up."
      ],
      skills: ["Flutter & Dart", "REST APIs", "State Management", "Mobile UI"]
    },
    {
      id: "ui-ux",
      title: "UI/UX Designer Intern",
      department: "Design",
      location: "100% Remote",
      type: "Unpaid Internship",
      experience: "Freshers / Students",
      stipendPolicy: "Company Unpaid (No Stipend) • 100% Free for Candidates (Zero Fees)",
      summary: "Design live user flows, wireframes, component libraries, and Figma prototypes for responsive web and mobile software products.",
      responsibilities: [
        "Create wireframes, user journeys, and interactive prototypes in Figma.",
        "Design modern UI design systems, color palettes, and typography tokens.",
        "Collaborate with developers to ensure pixel-perfect design implementation.",
        "Conduct user feedback reviews and refine web/mobile interface layouts."
      ],
      benefits: [
        "Real-World Production Design Portfolio & Live Product Experience.",
        "Official Hanvrix Internship Experience Certificate & Letter of Recommendation.",
        "Design Review Mentorship & Portfolio Interview Preparation.",
        "Direct Priority for Full-Time Hiring at Hanvrix whenever job vacancies open up."
      ],
      skills: ["Figma / Adobe XD", "User Research", "Wireframing & Prototyping", "UI Design"]
    },
    {
      id: "testing",
      title: "Software Testing Engineer Intern",
      department: "Quality Assurance",
      location: "100% Remote",
      type: "Unpaid Internship",
      experience: "Freshers / Students",
      stipendPolicy: "Company Unpaid (No Stipend) • 100% Free for Candidates (Zero Fees)",
      summary: "Perform manual, API, and UI testing on production systems. Master Postman, bug tracking, and QA workflows to deliver zero-defect software.",
      responsibilities: [
        "Write detailed QA test cases and test suites for web & mobile applications.",
        "Perform manual functional, regression, and cross-browser testing.",
        "Test REST API endpoints using Postman and report detailed bug reports.",
        "Work directly with developers to verify fixes and ensure release quality."
      ],
      benefits: [
        "Real-Time QA Work Experience on Production Enterprise Applications.",
        "Official Hanvrix Internship Experience Certificate & Letter of Recommendation.",
        "QA Technical Interview Preparation & Automation Testing Mentorship.",
        "Direct Priority for Full-Time Hiring at Hanvrix whenever job vacancies open up."
      ],
      skills: ["Manual Testing", "API Testing (Postman)", "Bug Reporting", "QA Test Cases"]
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header */}
      <BreadcrumbHeader title="Build Next-Gen Software With Us" pageName="Careers" />

      {/* 2. Intro & Culture */}
      <Section light={true} className="py-10 md:py-14">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs tracking-wider">
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
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs tracking-wider">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
              Open Positions
            </h2>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, idx) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <FadeIn key={job.id} delay={idx * 0.1}>
                  <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    
                    {/* Main Card Header */}
                    <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-left">
                      <div className="space-y-3 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-primary-green/10 text-primary-green font-bold text-xs tracking-wider">
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
                          {job.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {job.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right side info & Down Arrow toggle button */}
                      <div className="shrink-0 flex flex-wrap lg:flex-col items-center lg:items-end justify-between gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-8">
                        <div className="text-left lg:text-right">
                          <span className="block text-xs font-bold text-slate-400">Target Candidates</span>
                          <span className="text-sm font-extrabold text-[#0F2D5C]">{job.experience}</span>
                        </div>

                        <div className="text-left lg:text-right">
                          <span className="block text-xs font-bold text-slate-400">Stipend Policy</span>
                          <span className="text-sm font-extrabold text-[#0F2D5C]">Company Unpaid (0 Fees)</span>
                        </div>

                        {/* Down Arrow Toggle Button */}
                        <button
                          onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-sm ${
                            isExpanded 
                              ? "bg-[#0F2D5C] text-white shadow-md" 
                              : "bg-slate-100 hover:bg-slate-200 text-[#0F2D5C]"
                          }`}
                        >
                          <span>{isExpanded ? "Hide Details" : "View Full Details"}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Details Drawer */}
                    {isExpanded && (
                      <div className="border-t border-slate-200 bg-slate-50/80 p-6 sm:p-8 space-y-6 text-left animate-fadeIn">
                        {/* 1. Policy Statement */}
                        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-semibold leading-relaxed flex items-start gap-3">
                          <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-sm text-amber-950 mb-1">Company Stipend & Fee Policy:</span>
                            This is a <strong>Company Unpaid Internship by Hanvrix</strong>. No stipend is provided by the company, and zero fees (100% Free) are required from candidates. Interns receive real-time production project experience, technical interview preparation, mentorship, and direct priority for open full-time positions.
                          </div>
                        </div>

                        {/* 2. Responsibilities */}
                        <div>
                          <h4 className="text-xs font-extrabold text-[#0F2D5C] tracking-wider mb-3 flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-primary-green" />
                            <span>What You Will Learn & Do (Role Responsibilities):</span>
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                            {job.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
                                <CheckCircle2 className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 3. Internship Benefits */}
                        <div>
                          <h4 className="text-xs font-extrabold text-[#0F2D5C] tracking-wider mb-3 flex items-center gap-2">
                            <Rocket className="w-4 h-4 text-primary-green" />
                            <span>Candidate Benefits & Career Growth:</span>
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                            {job.benefits.map((ben, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 bg-emerald-50/70 p-3 rounded-lg border border-emerald-200/80 text-slate-800">
                                <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{ben}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 4. Inside Apply Now Button */}
                        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <p className="text-xs font-bold text-slate-600">
                            Interested in gaining real-world development experience with Hanvrix?
                          </p>
                          <button
                            onClick={() => handleApplyClick(job.id)}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary-green hover:bg-primary-green-dark text-white font-extrabold text-xs tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <span>Apply</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 4. Simple Application Form Section */}
      <Section id="apply" light={true} className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-left">
          <div className="mb-8 text-center space-y-2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs tracking-wider">
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
                <label className="block text-xs font-bold text-[#0F2D5C] tracking-wider mb-1.5">Full Name *</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0F2D5C] tracking-wider mb-1.5">Email Address *</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F2D5C] tracking-wider mb-1.5">Phone Number *</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0F2D5C] tracking-wider mb-1.5">Role Applied For *</label>
                <select 
                  required 
                  value={selectedRole} 
                  onChange={(e) => setSelectedRole(e.target.value)} 
                  className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green"
                >
                  <option value="fullstack-dev">FullStack Developer Intern (PHP, Laravel, React, Node)</option>
                  <option value="flutter-dev">Flutter Developer Intern</option>
                  <option value="ui-ux">UI/UX Designer Intern</option>
                  <option value="testing">Software Testing Engineer Intern</option>
                  <option value="other">Other / Open Internship Application</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F2D5C] tracking-wider mb-1.5">LinkedIn / Portfolio Link</label>
              <input type="url" placeholder="https://linkedin.com/in/username" className="w-full px-4 h-11 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-primary-green" />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F2D5C] tracking-wider mb-1.5">
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
              <label className="block text-xs font-bold text-[#0F2D5C] tracking-wider mb-1.5">Brief Introduction / Note</label>
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
              <a 
                href="mailto:hanvrix@gmail.com"
                onClick={handleCopyEmail}
                className="relative inline-flex items-center justify-between cursor-pointer font-bold text-[15px] h-[52px] rounded-full transition-all duration-300 overflow-hidden group z-10 bg-white text-brand-secondary border-none hover:bg-brand-primary hover:text-white pl-7 pr-1.5 py-1.5 shadow-lg"
              >
                <span className="font-extrabold pr-4">
                  {copiedEmail ? "Copied hanvrix@gmail.com!" : "Email Resume to hanvrix@gmail.com"}
                </span>
                <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-brand-secondary text-white transition-colors duration-300 group-hover:bg-white group-hover:text-brand-primary shrink-0">
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
