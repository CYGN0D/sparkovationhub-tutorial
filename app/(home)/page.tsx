import Link from 'next/link';
import { BookOpen, Cpu, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const blogs = [
    {
      title: "ESP32 Web Server Guide",
      description: "Host a custom web dashboard directly on your ESP32 NodeMCU. Learn how to write control buttons to toggle relay modules from any local browser.",
      link: "/docs/esp32-webserver",
      image: "/images/esp32-webserver-thumb.jpg",
      badge: "Most Popular",
      category: "Arduino & IoT",
      rating: "4.8"
    },
    {
      title: "MQTT Basics & Architecture",
      description: "Understand the lightweight MQTT messaging protocol. Explore the Publish-Subscribe pattern, Clients, and Brokers using clear real-world analogies.",
      link: "/docs/mqtt-basics",
      image: "/images/mqtt-basics-thumb.jpg",
      badge: "Core Concepts",
      category: "Protocols",
      rating: "4.9"
    },
    {
      title: "Topics, Wildcards & QoS Levels",
      description: "Master topic structures, wildcards (+ and #), Quality of Service levels, Message Retention, and Last Will and Testament features in MQTT.",
      link: "/docs/mqtt-advanced-concepts",
      image: "/images/mqtt-advanced-thumb.jpg",
      badge: "Advanced",
      category: "Architectures",
      rating: "4.7"
    },
    {
      title: "ESP32 MQTT Home Automation",
      description: "Build a complete home automation node. Publish simulated sensor telemetry and subscribe to command streams to toggle hardware relays.",
      link: "/docs/mqtt-esp32-project",
      image: "/images/mqtt-esp32-thumb.jpg",
      badge: "New Release",
      category: "DIY Projects",
      rating: "5.0"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-warm-off-white)] dark:bg-[#0A0518] text-[#2F2F35] dark:text-[#E2E0E6] overflow-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Subtle glowing radial background blobs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-light-border)] dark:border-[#2C204D] bg-white/70 dark:bg-[#130B24]/50 backdrop-blur-md shadow-sm mb-6 animate-fade-in">
          <Cpu className="w-4 h-4 text-[#5B21D9] dark:text-[#8B5CF6]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21D9] dark:text-[#8B5CF6]">
            IoT & Embedded Systems Lab
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-3xl text-zinc-900 dark:text-white">
          Build Smarter Hardware with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B21D9] via-[#8B5CF6] to-[#00B7D8]">Sparkovation Hub</span>
        </h1>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 leading-relaxed">
          Step-by-step programming guides, custom circuit layouts, and advanced networking walkthroughs to help you master microcontrollers.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/docs" className="btn-lab flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Explore Tutorials
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-lab-light">
            Star on GitHub
          </a>
        </div>
      </section>

      {/* Featured Tutorials Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21D9] dark:text-[#8B5CF6]">
              Handcrafted Guides
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Latest Project Guides
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mt-2 md:mt-0">
            Interactive, humanized hardware tutorials designed to take you from a beginner to an IoT expert.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <Link 
              key={idx} 
              href={blog.link}
              className="bg-white dark:bg-[#130B24] border border-[#E8E3F5] dark:border-[#2C204D] rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Badge matching example.png style */}
                {blog.badge && (
                  <div className="absolute top-4 left-4 bg-white text-zinc-800 text-[10px] font-black tracking-wider px-2.5 py-1.5 rounded-[6px] uppercase shadow-sm">
                    {blog.badge}
                  </div>
                )}
              </div>

              {/* Card Metadata & Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Category & Rating Row */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-extrabold tracking-widest text-[#5B21D9] dark:text-[#A78BFA] uppercase">
                    {blog.category}
                  </span>
                  <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    <span className="text-[#F6C84C]">★</span> {blog.rating}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[19px] font-bold text-zinc-950 dark:text-white leading-[1.3] mb-2 group-hover:text-[#5B21D9] dark:group-hover:text-[#A78BFA] transition-colors duration-200 line-clamp-1">
                  {blog.title}
                </h3>

                {/* Truncated Description */}
                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                  {blog.description}
                </p>

                {/* Link Action */}
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-bold text-[#5B21D9] dark:text-[#A78BFA] group-hover:underline">
                  Read Tutorial 
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
