"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl text-white mb-4">
              THE LONG GAME
            </h3>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              Strategic advisory for leaders who think in decades, not quarters.
              We help organisations build the clarity and conviction to play the
              long game.
            </p>
            <div className="flex items-center gap-2">
              <span className="block w-2 h-2 rounded-full bg-green-500" />
              <span className="font-label text-white/40">
                Accepting new clients
              </span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-label text-[#0080FF] mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: "The Problem", href: "#problem" },
                { label: "Our Method", href: "#method" },
                { label: "Services", href: "#offerings" },
                { label: "Results", href: "#proof" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-label text-[#0080FF] mb-6">Connect</h4>
            <ul className="space-y-3">
              {[
                { label: "LinkedIn", href: "#" },
                {
                  label: "Email Us",
                  href: "mailto:hello@longgameproject.org",
                },
                { label: "Book a Call", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-label text-white/30">
            &copy; {new Date().getFullYear()} The Long Game Project
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-label text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-label text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
