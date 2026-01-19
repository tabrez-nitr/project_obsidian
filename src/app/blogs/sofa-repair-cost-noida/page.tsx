import React from 'react';
import Link from 'next/link';

const SofaRepairCostGuide = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 bg-white sm:px-6 lg:px-8 font-sans text-gray-800">

      {/* --- HERO SECTION --- */}
      <header className="mb-10 text-center border-b pb-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full">
          Consumer Awareness
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Sofa Repair in Noida: How to Spot "Cheap" vs. "Quality" Work
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Not all repairs are the same. Before you hire the vendor with the lowest quote, read this guide on hidden costs and material scams.
        </p>
      </header>

      {/* --- CONTENT BODY --- */}
      <div className="prose prose-lg mx-auto text-gray-700">

        {/* Introduction */}
        <p className="lead text-xl md:leading-8 mb-8">
          In Noida and Greater Noida, you will find vendors offering to change your sofa fabric for incredibly low rates. But as the saying goes: <strong>"If it seems too good to be true, it probably is."</strong>
        </p>
        <p className="mb-8">
          Instead of giving you a generic price list, we want to explain <strong>where your money actually goes</strong>. Understanding this will save you from spending double when the "cheap" repair fails in 6 months.
        </p>

        {/* --- REPLACED SECTION: THE "LOW QUOTE" TRAP --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. The "Low Quote" Trap</h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
          <p className="font-bold text-red-900 text-lg mb-2">
            Vendor A quotes ₹300/seat. Vendor B quotes ₹600/seat. Why?
          </p>
          <p className="text-gray-700">
            Vendor A is likely saving money by cutting corners you can't see immediately. Here are the 3 most common shortcuts used by cheap repair services in Noida:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Shortcut 1 */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">The "Mix-Match" Foam Scam</h3>
            <p className="text-gray-600 text-sm">
              They put a thin layer of new foam on top, but leave the old, rotting foam underneath. It feels firm for 2 weeks, then collapses.
              <br /><br />
              <strong>Our Standard:</strong> We strip the sofa to the wooden frame and replace the entire block.
            </p>
          </div>

          {/* Shortcut 2 */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">The "Local" Adhesive</h3>
            <p className="text-gray-600 text-sm">
              Cheap glue smells terrible and loses its grip in the summer heat. This causes the fabric to become loose and wrinkly.
              <br /><br />
              <strong>Our Standard:</strong> We use industrial-grade, heat-resistant adhesive (Pidilite/Fevicol SR) that never loosens.
            </p>
          </div>
        </div>

        {/* --- SECTION 2: CHECKLIST --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Your "Quality Check" List</h2>
        <p className="mb-6">
          Before you pay any sofa repair wallah, ask them these 3 questions. Their answers will tell you if they are professionals or amateurs.
        </p>

        <ul className="space-y-4 mb-10">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold mr-3">1</span>
            <div>
              <strong className="block text-gray-900">"Will you open the sofa in front of me?"</strong>
              <span className="text-gray-600 text-sm">Honest workers have nothing to hide. If they insist on taking the sofa to the "workshop" for a simple fabric change, be careful.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold mr-3">2</span>
            <div>
              <strong className="block text-gray-900">"What density is the foam?"</strong>
              <span className="text-gray-600 text-sm">If they say "High Density" without a number, it's fake. Look for <strong>40-Density</strong> or <strong>50-Density</strong> stamps on the foam sheet.</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold mr-3">3</span>
            <div>
              <strong className="block text-gray-900">"Do you double-stitch the seams?"</strong>
              <span className="text-gray-600 text-sm">Single stitching bursts when your kids jump on the sofa. Double stitching takes twice as long but lasts 5 years.</span>
            </div>
          </li>
        </ul>

        {/* --- SECTION 3: WARRANTY --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. The Warranty Difference</h2>
        <p className="mb-6">
          Finally, price reflects accountability. A freelancer found on the road might switch off his phone tomorrow. A proper business provides a warranty card.
        </p>
        <div className="bg-gray-900 text-white p-6 rounded-xl">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">The Urban Sofa Guarantee</h3>
          <p className="text-gray-300">
            We don't just repair; we restore. Every job comes with a <strong>6-Month Service Warranty</strong>. If a stitch opens or the fabric loosens, we come back and fix it for FREE.
          </p>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want an Honest Assessment?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Send us a photo of your sofa. We will tell you exactly what needs to be done—no hidden charges, no fake promises.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/917861092110"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors shadow-lg"
            >
              Get a Quality Quote on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};

export default SofaRepairCostGuide;