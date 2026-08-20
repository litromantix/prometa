"use client";

import { useMemo, useState } from "react";
import { countries, contractorFilters, type Reference } from "@/app/refs/data";

export default function ReferencesTable({
  references,
}: {
  references: Reference[];
}) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<string>("all");
  const [contractor, setContractor] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return references.filter((ref) => {
      const matchesQuery =
        !q ||
        ref.project.toLowerCase().includes(q) ||
        ref.city.toLowerCase().includes(q) ||
        ref.country.toLowerCase().includes(q) ||
        ref.contractor.toLowerCase().includes(q);
      const matchesCountry = country === "all" || ref.country === country;
      const matchesContractor =
        contractor === "all" ||
        ref.contractor.toLowerCase().includes(contractor.toLowerCase());
      return matchesQuery && matchesCountry && matchesContractor;
    });
  }, [references, query, country, contractor]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by project, city, country, or contractor..."
          className="w-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-cream-50 placeholder:text-cream-400 focus:border-accent-500 md:max-w-sm"
        />

        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border border-white/15 bg-charcoal-950 px-4 py-3 text-xs uppercase tracking-widest text-cream-200 focus:border-accent-500 md:w-auto"
        >
          <option value="all">All Locations</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={contractor}
          onChange={(e) => setContractor(e.target.value)}
          className="border border-white/15 bg-charcoal-950 px-4 py-3 text-xs uppercase tracking-widest text-cream-200 focus:border-accent-500 md:w-auto"
        >
          <option value="all">All Contractors</option>
          {contractorFilters.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-sm text-cream-400">
        Showing {filtered.length} of {references.length} references
      </p>

      {/* Desktop table */}
      <div className="mt-8 hidden overflow-x-auto border border-white/10 md:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-widest text-accent-400">
              <th className="px-6 py-4 font-normal">Project Name</th>
              <th className="px-6 py-4 font-normal">Building Type</th>
              <th className="px-6 py-4 font-normal">Location</th>
              <th className="px-6 py-4 font-normal">
                General Contractor / Investor
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((ref) => (
              <tr
                key={ref.id}
                className="border-b border-white/5 text-cream-200 transition-colors duration-300 ease-premium hover:bg-white/5"
              >
                <td className="px-6 py-4 text-white">{ref.project}</td>
                <td className="px-6 py-4 text-cream-400">
                  {ref.buildingType}
                </td>
                <td className="px-6 py-4 text-cream-400">
                  {ref.city}, {ref.country}
                </td>
                <td className="px-6 py-4 text-cream-400">
                  {ref.contractor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="px-6 py-10 text-center text-sm text-cream-400">
            No references match your filters.
          </p>
        )}
      </div>

      {/* Mobile cards */}
      <div className="mt-8 space-y-4 md:hidden">
        {filtered.map((ref) => (
          <div
            key={ref.id}
            className="border border-white/10 bg-bronze-900/20 p-6"
          >
            <h3 className="text-base text-white">{ref.project}</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-xs uppercase tracking-widest text-accent-400">
                  Building Type
                </dt>
                <dd className="text-right text-cream-200">
                  {ref.buildingType}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-xs uppercase tracking-widest text-accent-400">
                  Location
                </dt>
                <dd className="text-right text-cream-200">
                  {ref.city}, {ref.country}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-xs uppercase tracking-widest text-accent-400">
                  Contractor
                </dt>
                <dd className="text-right text-cream-200">
                  {ref.contractor}
                </dd>
              </div>
            </dl>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-cream-400">
            No references match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
