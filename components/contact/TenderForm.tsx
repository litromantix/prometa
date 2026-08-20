"use client";

import { useState } from "react";

const scopeOptions = [
  "Perforated Aluminium & Steel Facade Claddings",
  "Aluminium Windows & Door Systems",
  "Cable & Point Fixing Glass Facades",
  "Glass Railings and Stainless Steel Handrails",
  "Column Coverings",
  "Glass Canopies",
  "Stainless Steel, Aluminium Balustrades and Handrails",
  "Decorative Metal Works",
];

const steps = [
  "Corporate Credentials",
  "Project Parameters & Scope",
  "CAD Drawing & BOQ Upload",
];

const inputClasses =
  "mt-2 w-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-400 focus:border-accent-500";

export default function TenderForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectName: "",
    location: "",
    scope: [] as string[],
    notes: "",
  });

  const canAdvanceFromStep1 =
    form.fullName.trim() !== "" && form.email.trim() !== "";

  const toggleScope = (option: string) => {
    setForm((prev) => ({
      ...prev,
      scope: prev.scope.includes(option)
        ? prev.scope.filter((item) => item !== option)
        : [...prev.scope, option],
    }));
  };

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    setFiles((prev) => [...prev, ...Array.from(fileList).map((f) => f.name)]);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-white/10 bg-bronze-900/20 p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent-400">
          Inquiry Received
        </p>
        <h3 className="mt-4 text-2xl font-light text-white">
          Thank you, {form.fullName.split(" ")[0] || "there"}.
        </h3>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-cream-200">
          Your bid inquiry has been logged for {form.projectName || "your project"}
          . Our estimating team will review your submission and respond to{" "}
          {form.email} shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-white/10 bg-white/[0.03] p-6 md:p-10">
      <div className="flex flex-wrap items-center gap-3">
        {steps.map((label, index) => (
          <div key={label} className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center border text-xs ${
                index === step
                  ? "border-accent-500 bg-accent-500 text-charcoal-950"
                  : index < step
                    ? "border-accent-500 text-accent-400"
                    : "border-white/20 text-cream-400"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`hidden text-xs uppercase tracking-widest sm:inline ${
                index === step ? "text-white" : "text-cream-400"
              }`}
            >
              {label}
            </span>
            {index < steps.length - 1 && (
              <span className="h-px w-6 bg-white/15 sm:w-10" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        {step === 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-xs uppercase tracking-widest text-cream-400">
              Full Name
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={form.fullName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, fullName: e.target.value }))
                }
                className={inputClasses}
              />
            </label>
            <label className="block text-xs uppercase tracking-widest text-cream-400">
              Corporate Entity / General Contractor Name
              <input
                type="text"
                placeholder="e.g. ENKA İnşaat A.Ş."
                value={form.company}
                onChange={(e) =>
                  setForm((p) => ({ ...p, company: e.target.value }))
                }
                className={inputClasses}
              />
            </label>
            <label className="block text-xs uppercase tracking-widest text-cream-400">
              Business Email Address
              <input
                type="email"
                placeholder="e.g. j.doe@company.com"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                className={inputClasses}
              />
            </label>
            <label className="block text-xs uppercase tracking-widest text-cream-400">
              Contact Phone Number
              <input
                type="tel"
                placeholder="+90 500 000 00 00"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                className={inputClasses}
              />
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-xs uppercase tracking-widest text-cream-400">
                Project Name &amp; Sector
                <input
                  type="text"
                  placeholder="e.g. Moscow Diagnostic Center"
                  value={form.projectName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, projectName: e.target.value }))
                  }
                  className={inputClasses}
                />
              </label>
              <label className="block text-xs uppercase tracking-widest text-cream-400">
                Estimated Project Location
                <input
                  type="text"
                  placeholder="City, Country — e.g. Samara, Russia"
                  value={form.location}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, location: e.target.value }))
                  }
                  className={inputClasses}
                />
              </label>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-cream-400">
                Primary Facade &amp; Structural Metalwork Scope
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {scopeOptions.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-start gap-3 text-sm text-cream-200"
                  >
                    <input
                      type="checkbox"
                      checked={form.scope.includes(option)}
                      onChange={() => toggleScope(option)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#b08b5c]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-6">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
                addFiles(e.dataTransfer.files);
              }}
              className={`border border-dashed p-10 text-center transition-colors duration-300 ease-premium ${
                dragActive
                  ? "border-accent-500 bg-accent-500/10"
                  : "border-white/20"
              }`}
            >
              <p className="text-sm leading-relaxed text-cream-200">
                Drag and drop your architectural drawings, bill of quantities
                (BOQ), or structural specifications here.
              </p>
              <p className="mt-2 text-xs text-cream-400">
                Supported formats: .dwg, .dxf, .pdf, .zip — Maximum file size:
                50MB.
              </p>
              <label className="mt-6 inline-flex cursor-pointer items-center gap-2 border border-white/25 px-5 py-2.5 text-xs uppercase tracking-widest text-white transition-colors duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950">
                Browse Files
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => addFiles(e.target.files)}
                />
              </label>

              {files.length > 0 && (
                <ul className="mx-auto mt-6 max-w-sm space-y-1 text-left text-xs text-cream-400">
                  {files.map((name, i) => (
                    <li key={`${name}-${i}`}>{name}</li>
                  ))}
                </ul>
              )}
            </div>

            <label className="block text-xs uppercase tracking-widest text-cream-400">
              Engineering Directives &amp; Custom Requirements
              <textarea
                rows={4}
                placeholder="Detail any specific material grades, load-bearing requirements, coastal wind resistances, or specialized finishes..."
                value={form.notes}
                onChange={(e) =>
                  setForm((p) => ({ ...p, notes: e.target.value }))
                }
                className={inputClasses}
              />
            </label>
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={`text-xs uppercase tracking-widest text-cream-400 transition-colors duration-300 hover:text-white ${
            step === 0 ? "invisible" : ""
          }`}
        >
          ← Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            disabled={step === 0 && !canAdvanceFromStep1}
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
            className="border border-white/25 px-6 py-3 text-xs uppercase tracking-widest text-white transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-accent-500 hover:text-charcoal-950 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/25 disabled:hover:bg-transparent disabled:hover:text-white"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="border border-accent-500 bg-accent-500 px-6 py-3 text-xs uppercase tracking-widest text-charcoal-950 transition-all duration-300 ease-premium hover:bg-accent-400"
          >
            Submit Bid Inquiry to Engineering Board
          </button>
        )}
      </div>
    </div>
  );
}
