import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FooterBackgroundGradient,
} from "@/components/ui/hover-footer";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Facebook = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Globe = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

function HoverFooter() {
  const footerLinks = [
    {
      title: "Programs",
      links: [
        { label: "Robotics Lab", href: "/programs#core-programs" },
        { label: "IoT Systems", href: "/programs#core-programs" },
        { label: "Arduino Projects", href: "/programs#core-programs" },
        { label: "Internship Program", href: "/internship" },
      ],
    },
    {
      title: "Navigation",
      links: [
        { label: "About Hub", href: "/about" },
        { label: "Specialized Courses", href: "/courses" },
        { label: "Innovation Centre", href: "/innovation-centre" },
        { label: "Spark Store", href: "/shop" },
        { label: "Academic Institutions", href: "/institutions" },
        { label: "Lab Setup", href: "/institutions/lab-setup" },
        { label: "Membership Hub", href: "/membership" },
        { label: "Vigyan Bhaskar", href: "https://vigyanbhaskar.com/", external: true },
        { label: "Innovation Camps", href: "/camps" },
        { label: "Projects Explorer", href: "/projects" },
        { label: "Lab Gallery", href: "/gallery" },
        { label: "Learning Hub", href: "/docs" },
        { label: "Book Free Demo", href: "/contact", pulse: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Refund Policy", href: "/refund-cancellation-policy" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Delivery Policy", href: "/program-delivery-policy" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Certificate Verification", href: "/verify-certificate" },
        { label: "Internship Registration", href: "/internship-register" },
        { label: "Student Login", href: "https://training.sparkovationhub.com/login.php", external: true },
        { label: "Management Portal", href: "/admin/login" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} className="text-[#F6C84C] shrink-0 mt-0.5" />,
      text: "contact@sparkovationhub.com",
      href: "mailto:contact@sparkovationhub.com",
    },
    {
      icon: <Phone size={16} className="text-[#F6C84C] shrink-0 mt-0.5" />,
      text: "+91 72958 90160, +91 97080 01181",
      href: "tel:+917295890160",
    },
    {
      icon: <MapPin size={16} className="text-[#F6C84C] shrink-0 mt-0.5" />,
      text: "Anand Vihar, Ward No. 02, Madhepura, Bihar",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
    { icon: <Globe size={18} />, label: "Website", href: "https://www.sparkovationhub.com" },
  ];

  return (
    <footer className="relative border-t border-[#2c106b] bg-[#3B168F] text-[#f0f0f0] overflow-hidden">
      {/* Subtle blueprint grid overlay on dark background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(238,231,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(238,231,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-8 md:px-10 lg:py-10">
        <div className="grid grid-cols-1 gap-6 border-b border-white/10 pb-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          
          {/* Logo & Legal Registries Block */}
          <div className="flex flex-col space-y-4 items-center text-center">
            <div className="flex justify-center w-full">
              <img
                src="/white-background-logo.png"
                alt="Sparkovation Hub of Science and Technology Pvt. Ltd."
                className="h-auto w-full max-w-[80px] sm:max-w-[100px] object-contain rounded-xl select-none"
              />
            </div>
            <p className="max-w-xs text-xs leading-6 text-slate-300 font-body text-justify">
              Sparkovation Hub Of Science And Technology Private Limited is involved in activities such as Scientific Research and experimental development on natural sciences and engineering
            </p>

          </div>

          {/* Links columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                {section.title}
              </h4>
              <ul className="space-y-1.5 font-mono text-xs uppercase">
                {section.links.map((link) => (
                  <li key={link.label} className="relative flex items-center">
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#F6C84C] text-[#d1e0eb]"
                      >
                        — {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="transition-colors hover:text-[#F6C84C] text-[#d1e0eb]"
                      >
                        — {link.label}
                      </Link>
                    )}
                    {link.pulse && (
                      <span className="ml-2 h-2 w-2 rounded-full bg-[#F6C84C] animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div>
            <h4 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 leading-5 text-[#d1e0eb]">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-[#F6C84C]">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-4 text-xs font-mono md:flex-row">
          <div className="flex space-x-5 text-slate-300">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:text-[#F6C84C]"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-center md:text-left text-[#b2c5d1] text-[11px]">
              © {new Date().getFullYear()} Sparkovation Hub of Science & Technology Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-center md:text-left text-[10px] text-[#8faabf] font-mono mt-0.5">
              Made by{" "}
              <a
                href="https://pram.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6C84C] hover:underline transition-all font-bold"
              >
                Pramgunjeet Yadav
              </a>
            </p>
          </div>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
