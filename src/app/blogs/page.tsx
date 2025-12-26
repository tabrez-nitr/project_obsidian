import React from 'react';
import Link from 'next/link';

// Data for your 4 blogs
const BLOG_POSTS = [
  {
    id: 1,
    title: "Sofa Repair Charges in Noida: The 2025 Price List",
    excerpt: "Don't get overcharged. We reveal the honest costs of labor, fabric, and 40-density foam in Noida & Greater Noida.",
    category: "Pricing Guide",
    slug: "sofa-repair-cost-noida", // Matches the folder name
    date: "Dec 26, 2025",
    color: "bg-amber-100 text-amber-800",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Why Buying a New Sofa in Noida Extension is a Headache",
    excerpt: "Small service lifts and heavy construction dust make buying new difficult. Here is why repairing on-site is the smarter choice for Gaur City residents.",
    category: "Local Guide",
    slug: "noida-extension-furniture-guide",
    date: "Dec 25, 2025",
    color: "bg-blue-100 text-blue-800",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Velvet vs. Leatherette: Best Fabric for Noida's Dust?",
    excerpt: "Noida's heat and dust can ruin expensive fabrics. We compare the top 3 materials that survive the local climate.",
    category: "Fabric Guide",
    slug: "best-sofa-fabric-noida",
    date: "Dec 24, 2025",
    color: "bg-green-100 text-green-800",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "The Science of Sagging: 32 vs 40 Density Foam",
    excerpt: "Why does cheap repair work go flat in 6 months? Learn how to spot fake foam and why we use Sleepwell High Resilience sheets.",
    category: "Technical",
    slug: "sofa-foam-density-guide",
    date: "Dec 23, 2025",
    color: "bg-purple-100 text-purple-800",
    image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=800"
  }
];

const BlogListingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Furniture Care & Design Blog
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
            Expert advice on sofa repair, fabric selection, and interior trends for Noida homes.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              
              {/* Image Section */}
              <div className="flex-shrink-0 h-56 w-full relative">
                <img 
                  className="w-full h-full object-cover" 
                  src={post.image} 
                  alt={post.title} 
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${post.color}`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  
                  <Link href={'blogs/best-sofa-fabric-noida'} className="block mt-2">
                    <p className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
                
                <div className="mt-6 flex items-center">
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="text-base font-semibold text-amber-600 hover:text-amber-500 flex items-center"
                  >
                    Read full article 
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* SEO Footer Text (Optional) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-400 text-sm">
        <p>Providing expert sofa repair services across Noida , Greater Noida West , Greater Noida West and Ghaziabad</p>
      </div>

    </div>
  );
};

export default BlogListingPage;