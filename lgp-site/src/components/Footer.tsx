export default function Footer() {
  return (
    <footer className="card-stock py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        {/* Top section */}
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-12 md:gap-16">
          {/* Left - Brand - handwritten */}
          <div>
            <span
              className="font-hand text-[22px] text-cream/60"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              The Long Game Project
            </span>
            <p className="font-body text-cream/20 text-[15px] mt-3 max-w-[300px] leading-relaxed">
              A strategy practice. Exercises, advisory, tools, and products for
              teams that take decisions seriously.
            </p>
          </div>

          {/* Right - Navigation columns */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigate */}
            <div>
              <p
                className="font-hand text-blue/60 text-[17px] mb-3"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Navigate
              </p>
              <nav className="flex flex-col gap-2">
                {[
                  { label: "Exercise", href: "#exercise" },
                  { label: "Advisory", href: "#advisory" },
                  { label: "Tools", href: "#tools" },
                  { label: "Products", href: "#products" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-hand text-cream/25 text-[16px] hover:text-cream/50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p
                className="font-hand text-blue/60 text-[17px] mb-3"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                Connect
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:hello@longgameproject.org"
                  className="font-hand text-cream/25 text-[16px] hover:text-cream/50 transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com/company/longgameproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hand text-cream/25 text-[16px] hover:text-cream/50 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
                <span className="font-hand text-cream/20 text-[15px]">
                  Accepting new clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t border-cream/6 pt-6 mt-14 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-hand text-cream/15 text-[14px]">
            &copy; 2026 The Long Game Project
          </span>
          <div className="flex gap-5 font-hand text-cream/15 text-[14px]">
            <a href="#" className="hover:text-cream/30 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cream/30 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
