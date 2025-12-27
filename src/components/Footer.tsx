"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf9f6] text-gray-700 border-t border-[#e8e2d6] mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-5">
            <Link href="/" className="inline-block group">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                <i className="ri-sofa-fill text-[#BCA88D]"></i>
                <span>
                  Metro <span className="playwrite-in-cursive text-black">Sofa</span>
                </span>
              </h2>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Premium sofa repairs and custom manufacturing. We bring new life to your old furniture with expert craftsmanship in Noida.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon href="#" icon="ri-facebook-fill" />
              <SocialIcon href="#" icon="ri-instagram-line" />
              <SocialIcon href="https://wa.me/917861092110" icon="ri-whatsapp-line" />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-5">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/#about" label="About Us" />
              <FooterLink href="/#services" label="Our Services" />
              <FooterLink href="/blogs" label="Read Our Blog" />
              <FooterLink href="/#contact" label="Contact Us" />
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#BCA88D]"></span>Sofa Repair</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#BCA88D]"></span>Custom Furniture</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#BCA88D]"></span>Leather Upholstery</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#BCA88D]"></span>Recliner Fixing</li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <i className="ri-map-pin-line text-xl text-[#BCA88D] mt-0.5" />
                <span className="text-gray-500 group-hover:text-gray-900 transition-colors">
                  Sector-110, Maharishi Aashram,<br /> Noida, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <i className="ri-phone-line text-xl text-[#BCA88D]" />
                <a href="tel:+917861092110" className="text-gray-500 font-medium group-hover:text-gray-900 transition-colors">
                  +91 78610 92110
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <i className="ri-mail-line text-xl text-[#BCA88D]" />
                <a href="mailto:metrosofa.business@gmail.com" className="text-gray-500 group-hover:text-gray-900 transition-colors">
                  metrosofa.business@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {currentYear} Metro Sofa Repair. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#BCA88D] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#BCA88D] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Helper Components ---

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#BCA88D] hover:border-[#BCA88D] hover:text-white transition-all duration-300 shadow-sm"
    >
      <i className={`${icon} text-lg`} />
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm text-gray-500 hover:text-[#BCA88D] hover:pl-2 transition-all duration-300 block"
      >
        {label}
      </Link>
    </li>
  );
}