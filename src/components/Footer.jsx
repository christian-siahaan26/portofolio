import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Christian Andri Siahaan
          </span>
          <span className="text-gray-700">·</span>
          <span className="font-mono text-xs text-gray-500 flex items-center gap-1">
            Built with <Heart size={10} className="text-red-400 fill-red-400" />{" "}
            in Depok
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/christian-siahaan26", icon: Github },
            { href: "https://www.linkedin.com/in/christian-andri-siahaan", icon: Linkedin },
            { href: "mailto:christian123star@gmail.com", icon: Mail },
            // eslint-disable-next-line no-unused-vars
          ].map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cyan-400 transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-gray-600">
          <span className="text-cyan-500/60">const</span>{" "}
          <span className="text-emerald-400">passion</span>{" "}
          <span className="text-gray-500">= </span>
          <span className="text-orange-300">"code"</span>
        </p>
      </div>
    </footer>
  );
}
