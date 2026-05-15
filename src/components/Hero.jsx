import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { usePdfDownload } from "../hooks/usePdfDownload";

// Typewriter hook
function useTypewriter(words, speed = 100, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return text;
}

const ROLES = [
  "Fullstack Developer",
  "Javascript/Typescript Enthusiast",
  "React Enthusiast",
  "Laravel Enthusiast",
  "Node.js Engineer",
  "Clean Code Advocate",
];

export default function Hero() {
  const { downloadPdf, loading } = usePdfDownload();
  const role = useTypewriter(ROLES, 80, 2000);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden print:min-h-0 print:pt-8"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-500 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
              Open to Work
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="font-mono text-cyan-400 text-sm tracking-widest mb-3"
          >
            &gt; Halo, nama saya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-5xl md:text-6xl font-bold font-display mb-3 leading-tight"
          >
            Christian Andri <span className="gradient-text">Siahaan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-2xl md:text-3xl font-display font-semibold text-gray-300 mb-6 h-10 flex items-center gap-2"
          >
            <span>{role}</span>
            <span className="cursor-blink text-cyan-400">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg"
          >
            Saya membangun aplikasi web dari ujung ke ujung — dari API yang
            efisien hingga antarmuka yang intuitif. Berpengalaman dengan
            ekosistem Javascript/TypeScript, Laravel, arsitektur clean, dan DevOps modern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary flex items-center gap-2"
            >
              <span>Lihat Projects</span>
              <ArrowDown size={16} />
            </button>
            <button
              onClick={downloadPdf}
              disabled={loading}
              className="btn-outline flex items-center gap-2 disabled:opacity-50 disabled:cursor-wait"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Generating...
                </span>
              ) : (
                <>
                  <Download size={16} />
                  Download CV as PDF
                </>
              )}
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-2"
          >
            {[
              {
                href: "https://github.com/christian-siahaan26",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/christian-andri-siahaan/",
                icon: Linkedin,
                label: "Linkedin",
              },
              {
                href: "mailto:christian123star@gmail.com",
                icon: Mail,
                label: "Email",
              },
              // eslint-disable-next-line no-unused-vars
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
            <div className="ml-4 h-px w-20 bg-linear-to-r from-cyan-500/50 to-transparent" />
            <span className="font-mono text-xs text-gray-500">
              @christian-siahaan26
            </span>
          </motion.div>
        </div>

        {/* Right: Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-cyan-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-dashed border-emerald-500/15"
            />

            {/* Profile image */}
            {/* Foto */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="w-full h-full rounded-2xl animated-border overflow-hidden">
                <img
                  src="/images/poto.png"
                  alt="Christian Siahaan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Badge — animasi terpisah dengan delay biar tidak monoton */}
            <div className="flex justify-between gap-4 mt-8 w-64 md:w-80">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="glass-card rounded-xl px-4 py-2 border border-cyan-500/30 shadow-lg flex-1 text-center"
              >
                <p className="font-mono text-xs text-gray-400">projects</p>
                <p className="font-bold text-lg gradient-text">5+</p>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="glass-card rounded-xl px-4 py-2 border border-emerald-500/30 shadow-lg flex-1 text-center"
              >
                <p className="font-mono text-xs text-gray-400">experience</p>
                <p className="font-bold text-lg gradient-text">1+ Years</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 no-print"
      >
        <span className="font-mono text-xs text-gray-600 tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
