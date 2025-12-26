import React from 'react';
import Link from 'next/link';

const FabricGuideMegaBlog = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 bg-white sm:px-6 lg:px-8 font-sans text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <header className="mb-10 text-center border-b pb-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-800 uppercase bg-green-100 rounded-full">
          Fabric Selection Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Velvet, Leather, or Jute? Choosing the Best Sofa Fabric for Noida's Dust & Heat
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Noida has a unique climate: 45°C summers and heavy construction dust. Choosing the wrong fabric can turn your expensive sofa into a sticky, dusty mess.
        </p>
      </header>

      {/* --- CONTENT BODY --- */}
      <div className="prose prose-lg mx-auto text-gray-700">
        
        {/* Introduction */}
        <p className="lead text-xl md:leading-8 mb-8">
          We have seen it happen too often: A customer in **Sector 78** buys a stunning, deep-buttoned velvet sofa that looks like it belongs in a palace. Two months later, they are calling us to change the fabric because it has turned grey with dust and is impossible to clean.
        </p>
        <p className="mb-8">
          When choosing sofa fabric in NCR, you cannot just look at the color. You have to look at <strong>Liveability</strong>. Here is the ultimate breakdown of which fabrics survive the Noida lifestyle.
        </p>

        {/* --- SECTION 1: THE "SWEAT TEST" (Leatherette) --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. The "Sweat Test": Truth About Leatherette</h2>
        <p className="mb-4">
          Artificial Leather (Rexine/Leatherette) looks modern and is very easy to wipe clean. However, it has one major flaw: <strong>Breathability.</strong>
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-800 text-lg mb-2">❌ Avoid If:</h3>
            <p className="text-sm">
              You don't have Central AC or if you rely on ceiling fans in summer. Sitting on leatherette in June without AC will make you sweat instantly. It gets sticky and uncomfortable.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-green-800 text-lg mb-2">✅ Perfect If:</h3>
            <p className="text-sm">
              You have small kids who spill food/juice often, or if you live in a very dusty area (like near the Expressway) and want to wipe your sofa daily.
            </p>
          </div>
        </div>

        {/* --- SECTION 2: THE "DUST MAGNET" (Velvet) --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. The "Dust Magnet": Suede & Velvet</h2>
        <p className="mb-4">
          Velvet is trending in 2025 for that "Luxury Hotel" look. But in Noida Extension, where construction is ongoing, dust is fine and powdery (PM 2.5).
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
          <li><strong>The Risk:</strong> Velvet has a "pile" (furry texture) that traps dust deep inside. Vacuuming helps, but it requires high maintenance.</li>
          <li><strong>The Solution:</strong> If you love the soft feel, ask for <strong>"Micro-Suede"</strong> instead of high-pile velvet. It is smoother and traps less dust.</li>
        </ul>

        {/* --- SECTION 3: TOP RECOMMENDATIONS --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Our Top 3 Recommendations for Noida Homes</h2>
        
        <div className="space-y-6">
          {/* Recommendation 1 */}
          <div className="flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-amber-600 md:w-4 p-0"></div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-gray-900">Winner: Poly-Jute Blend (Textured)</h3>
              <p className="text-gray-600 mt-2">
                This is the most practical choice for Indian homes. It looks like natural jute but is mixed with polyester for strength.
              </p>
              <div className="mt-4 flex gap-4 text-sm font-semibold text-amber-700">
                <span>• Breathable (Cool in Summer)</span>
                <span>• Hides Dust Well</span>
                <span>• Washable</span>
              </div>
            </div>
          </div>

          {/* Recommendation 2 */}
          <div className="flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-600 md:w-4 p-0"></div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-gray-900">Runner Up: High-Performance Chenille</h3>
              <p className="text-gray-600 mt-2">
                Softer than jute but more durable than velvet. It has a slight sheen that looks premium but is thick enough to withstand rough usage.
              </p>
              <div className="mt-4 flex gap-4 text-sm font-semibold text-blue-700">
                <span>• Soft Touch</span>
                <span>• Durable</span>
                <span>• Good for Pets</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 4: PET OWNERS --- */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">🐱 Special: Do you have a Cat or Dog?</h2>
            <p className="mb-6 text-gray-300">
              Cats love to scratch standard woven fabrics (because they can hook their claws in the loops). 
            </p>
            <h3 className="font-bold text-white text-lg">The Solution: "Scratch-Proof" Microfiber</h3>
            <p className="text-sm mt-2 text-gray-400">
              Ask us for our special "Pet-Friendly" catalog. These fabrics have a non-woven surface structure, meaning there are no loops for claws to get stuck in. Your cat will try once, slip, and lose interest.
            </p>
          </div>
        </div>

        {/* --- SECTION 5: MAINTENANCE TIPS --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Quick Maintenance Cheat Sheet</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-900 uppercase font-bold">
              <tr>
                <th className="px-4 py-3">Fabric</th>
                <th className="px-4 py-3">Cleaning Method</th>
                <th className="px-4 py-3">Avoid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Leatherette</td>
                <td className="px-4 py-3">Wet Wipe + Mild Soap</td>
                <td className="px-4 py-3">Harsh Chemicals (Causes peeling)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Velvet/Suede</td>
                <td className="px-4 py-3">Vacuum + Dry Foam</td>
                <td className="px-4 py-3">Water (Leaves water marks)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Poly-Jute</td>
                <td className="px-4 py-3">Shampoo Wash</td>
                <td className="px-4 py-3">Direct Sunlight (Fades color)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center border border-green-100">
          <h3 className="text-2xl font-bold text-green-900">
            Don't Guess. Touch & Feel.
          </h3>
          <p className="mt-2 text-green-800 mb-6 max-w-xl mx-auto">
            Digital photos lie about texture. We bring <strong>300+ fabric swatches</strong> to your home in Noida so you can feel the material under your own lights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href="https://wa.me/917861092110"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors shadow-sm"
            >
              Book Free Fabric Demo
            </a>
          </div>
        </div>

      </div>
    </article>
  );
};

export default FabricGuideMegaBlog;