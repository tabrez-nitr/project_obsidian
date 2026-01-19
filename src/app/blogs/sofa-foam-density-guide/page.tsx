import React from 'react';
import Link from 'next/link';

const FoamDensityMegaGuide = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 bg-white sm:px-6 lg:px-8 font-sans text-gray-800">

      {/* --- HERO SECTION --- */}
      <header className="mb-10 text-center border-b pb-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-800 uppercase bg-purple-100 rounded-full">
          Technical Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Why Do Sofas Sag? The Truth About 32 vs. 40 Density Foam
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tired of sinking into your sofa and struggling to get up? The secret lies in the "Density" number. Here is how to check if your sofa mechanic is using genuine material.
        </p>
      </header>

      {/* --- CONTENT BODY --- */}
      <div className="prose prose-lg mx-auto text-gray-700">

        {/* Introduction */}
        <p className="lead text-xl md:leading-8 mb-8">
          The most frustrating thing about buying a budget sofa is that it feels amazing in the showroom, but <strong>within 12 months, the cushions become flat pancakes</strong>.
        </p>
        <p className="mb-8">
          In Noida’s local furniture markets, many vendors cut costs by using "Low Density" foam that looks thick but has no air resistance. At <strong>Urban Sofa</strong>, we believe an educated customer is our best customer. Let’s decode the science of comfort.
        </p>

        {/* --- SECTION 1: WHAT IS DENSITY? --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Density vs. Thickness (Don't Be Fooled)</h2>
        <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600 mb-8">
          <p className="font-bold text-purple-900 text-lg">
            Thickness ≠ Quality
          </p>
          <p className="text-gray-700 mt-2">
            A 5-inch thick sponge can be garbage, and a 3-inch foam can be premium.
            <strong> Density</strong> is the weight of the foam per cubic meter.
            <br /><br />
            <em>Simple Rule: The heavier the foam, the longer it lasts.</em>
          </p>
        </div>

        {/* --- SECTION 2: THE "SAG" CHART --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Which Number Should You Choose?</h2>
        <p className="mb-6">
          When we repair your sofa, we offer three grades of foam. Here is how they compare:
        </p>

        <div className="overflow-hidden border rounded-xl shadow-sm mb-10">
          <table className="min-w-full bg-white text-left">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="py-4 px-6 font-semibold">Density Code</th>
                <th className="py-4 px-6 font-semibold">Feel</th>
                <th className="py-4 px-6 font-semibold">Life Span</th>
                <th className="py-4 px-6 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr>
                <td className="py-4 px-6 font-bold text-gray-900">28 - 32 Density</td>
                <td className="py-4 px-6">Soft / Plush</td>
                <td className="py-4 px-6 text-red-600 font-bold">1 - 2 Years</td>
                <td className="py-4 px-6">Back cushions (Need to be soft).</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-bold text-purple-700">40 Density (HR)</td>
                <td className="py-4 px-6">Medium Firm / Bouncy</td>
                <td className="py-4 px-6 text-green-600 font-bold">5 - 7 Years</td>
                <td className="py-4 px-6">Seat Cushions (The Gold Standard).</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-bold text-gray-900">50 Density</td>
                <td className="py-4 px-6">Hard / Stiff</td>
                <td className="py-4 px-6 text-green-600 font-bold">8+ Years</td>
                <td className="py-4 px-6">Elderly people or Orthopedic support.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- SECTION 3: THE "SLEEPWELL" FACTOR --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Why We Use Sleepwell & Featherfoam</h2>
        <p className="mb-4">
          Many local repair shops in Noida use "Unbranded Local Foam" (often called "Chaudhary Foam" or generic names). These foams lose their bounce (resilience) very quickly.
        </p>
        <p className="mb-6">
          At Urban Sofa, we primarily use <strong>Sleepwell</strong> or <strong>Featherfoam</strong> sheets.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">High Resilience (HR) Tech</h3>
            <p className="text-gray-600 text-sm">
              Premium foam has "High Resilience." This means when you stand up, the foam <strong>instantly snaps back</strong> to its original shape. Cheap foam stays depressed for minutes.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Anti-Sag Warranty</h3>
            <p className="text-gray-600 text-sm">
              Because we use genuine brands, we can offer you a <strong>5-Year Anti-Sagging Warranty</strong> on 40+ density foams. If it goes flat, we replace it.
            </p>
          </div>
        </div>

        {/* --- SECTION 4: THE "SQUEEZE TEST" --- */}
        <div className="mt-12 bg-gray-100 rounded-2xl p-8 relative">
          <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">PRO TIP</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Spot a Fake? (The Knee Test)</h2>
          <p className="mb-4 text-gray-700">
            Next time you are at a furniture shop, put your knee on the sofa seat and put your full body weight on it.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Bad Foam:</strong> Your knee will touch the wooden frame bottom easily. This means the foam has no resistance.</li>
            <li><strong>Good Foam:</strong> You will feel the foam pushing back against your knee. It will be difficult to touch the wood frame.</li>
          </ul>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="mt-16 bg-purple-900 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't Settle for "Local" Foam</h2>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">
            We bring actual foam samples to your home. Squeeze them, sit on them, and check the density stamp yourself before we install.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/917861092110"
              className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book a Foam Check Visit
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};

export default FoamDensityMegaGuide;