import React from 'react';
import Link from 'next/link';

const NoidaExtensionMegaGuide = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 bg-white sm:px-6 lg:px-8 font-sans text-gray-800">

      {/* --- HERO SECTION --- */}
      <header className="mb-10 text-center border-b pb-10">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase bg-blue-100 rounded-full">
          For Residents of Greater Noida West
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Why Buying a New Sofa in Noida Extension is a Headache (And Why You Should Repair Instead)
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Living in a high-rise in Gaur City or Techzone 4 comes with unique challenges. Here is why refurbishing your furniture is the smartest move for 2025.
        </p>
      </header>

      {/* --- CONTENT BODY --- */}
      <div className="prose prose-lg mx-auto text-gray-700">

        {/* Introduction */}
        <p className="lead text-xl md:leading-8 mb-8">
          If you live in <strong>Greater Noida West (Noida Extension)</strong>, you know the reality: beautiful apartments, great views, but often <strong>complicated logistics</strong>.
        </p>
        <p className="mb-8">
          Whether you are in <em>Gaur City, Nirala Estate, Cherry County, or Supertech Eco Village</em>, buying new furniture isn't as simple as clicking "Buy Now." Between service lift restrictions and the endless construction dust, maintaining a premium home requires a different strategy.
        </p>

        {/* --- SECTION 1: THE LIFT PROBLEM --- */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-10">
          <h2 className="text-2xl font-bold text-red-900 mt-0 mb-4">1. The "Service Lift" Nightmare</h2>
          <p className="mb-4 text-red-800">
            <strong>The Scenario:</strong> You order a stunning 7-seater L-shaped sofa online. It arrives downstairs. The delivery guys try to fit it in the lift. It doesn't fit.
          </p>
          <p className="text-red-800">
            <strong>The Result:</strong> You are forced to pay movers ₹3,000 - ₹5,000 to hoist it up via ropes to your 18th-floor balcony. We have seen brand new sofas get scratched, bent, or broken before they even enter the living room.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">The Urban Sofa Solution: On-Site Repair</h3>
        <p className="mb-8">
          We solve this by bringing the factory to your living room. Our team comes to your apartment with tools and materials.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
            <span><strong>No Moving Required:</strong> Your sofa never leaves your flat.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
            <span><strong>Zero Damage Risk:</strong> No ropes, no stairs, no scratches.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
            <span><strong>Perfect Fit:</strong> We customize the size to fit *your* specific wall.</span>
          </li>
        </ul>

        {/* --- SECTION 2: DUST DEFENSE --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Battling the "Noida Dust"</h2>
        <p className="mb-6">
          Noida Extension is still developing. Construction dust is a daily reality. If you buy a velvet sofa from a showroom, it acts like a magnet for fine dust particles, making it look dull in 3 months.
        </p>

        <div className="overflow-hidden border rounded-xl shadow-sm mb-10">
          <table className="min-w-full bg-white text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-semibold text-gray-700">Fabric Type</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Suitability for Noida Ext.</th>
                <th className="py-3 px-4 font-semibold text-gray-700">Why?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              <tr>
                <td className="py-3 px-4 font-medium">Standard Velvet</td>
                <td className="py-3 px-4 text-red-600 font-bold">Poor</td>
                <td className="py-3 px-4 text-gray-600">Traps dust deep inside; hard to clean.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Leatherette (Rexine)</td>
                <td className="py-3 px-4 text-green-600 font-bold">Excellent</td>
                <td className="py-3 px-4 text-gray-600">Wipe clean with a wet cloth. Dust doesn't stick.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Poly-Jute Blend</td>
                <td className="py-3 px-4 text-amber-600 font-bold">Good</td>
                <td className="py-3 px-4 text-gray-600">Hides dust well due to texture; durable.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- SECTION 3: CASE STUDY --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Local Case Study: Gaur City 2 (14th Avenue)</h2>
        <p className="mb-4">
          Mrs. Singh wanted to change her interiors. Her existing sofa was a dark brown wooden set that made the room look small.
        </p>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h4 className="font-bold text-lg mb-2">The Transformation:</h4>
          <ul className="space-y-3 text-gray-700">
            <li><strong>The Problem:</strong> Old foam was flat; dark color absorbed light.</li>
            <li><strong>The Fix:</strong> We changed the foam to 50-Density (Orthopedic support) and switched the fabric to a <em>Light Grey Suede</em> that is easy to clean.</li>
            <li><strong>The Cost:</strong> Total cost was <strong>₹12,500</strong>. A similar new sofa would have cost ₹45,000 + delivery.</li>
            <li><strong>Time Taken:</strong> 2 Days (Done on-site).</li>
          </ul>
        </div>

        {/* --- SECTION 4: AREA CHECKLIST --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Do We Cover Your Society?</h2>
        <p className="mb-6">
          We have dedicated teams specifically for the Greater Noida West belt. We regularly service:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 text-sm font-medium text-gray-600">
          <div className="bg-gray-100 px-4 py-2 rounded">Gaur City 1 & 2</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Nirala Estate</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Cherry County</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Supertech Eco Village</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Ace City</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Stellar Jeevan</div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="mt-16 bg-blue-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Don't Struggle with Logistics</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Get your sofa repaired comfortably at your home. No lifting, no shifting, no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/917861092110"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors shadow-lg flex items-center justify-center"
            >
              Get Quote for Noida Extension
            </a>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold rounded-lg transition-colors"
            >
              Call Us Now
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
};

export default NoidaExtensionMegaGuide;