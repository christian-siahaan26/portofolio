import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useInView } from "../hooks/useInView";

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@christian-siahaan26",
    href: "https://github.com/christian-siahaan26",
    color: "hover:text-white hover:border-white/30",
  },
  {
    icon: Linkedin,
    label: "Linkedin",
    handle: "Christian Andri Siahaan",
    href: "https://www.linkedin.com/in/christian-andri-siahaan",
    color: "hover:text-blue-400 hover:border-blue-500/30",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@Tian_s32",
    href: "https://x.com/Tian_s32",
    color: "hover:text-sky-400 hover:border-sky-500/30",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "christian123star@gmail.com",
    href: "mailto:christian123star@gmail.com",
    color: "hover:text-cyan-400 hover:border-cyan-500/30",
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-cyan-400 text-sm tracking-widest mb-3"
          >
            04. get in touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Contact <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 mx-auto w-24 h-0.5 bg-linear-to-r from-cyan-500 to-emerald-500"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-400 text-sm max-w-md mx-auto"
          >
            Terbuka untuk peluang fulltime, freelance, maupun kolaborasi proyek.
            Jangan ragu untuk menghubungi!
          </motion.p>Linkedin
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={14} className="text-cyan-400" />
              <span className="font-mono text-xs text-gray-400">
                Depok, Indonesia 🇮🇩
              </span>
            </div>

            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card flex items-center gap-4 rounded-xl p-4 border border-white/5 text-gray-400 transition-all duration-300 hover:-translate-x-1 ${s.color}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 mb-0.5">
                      {s.label}
                    </p>
                    <p className="text-sm font-medium">{s.handle}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 space-y-5 no-print"
          >
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="block font-mono text-xs text-gray-500 mb-1.5 capitalize">
                  {field} *
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  placeholder={
                    field === "name" ? "Nama kamu" : "email@example.com"
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                />
              </div>
            ))}

            <div>
              <label className="block font-mono text-xs text-gray-500 mb-1.5">
                message *
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Halo, saya tertarik untuk..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {sent ? (
                <span>✓ Pesan Terkirim!</span>
              ) : (
                <>
                  <Send size={15} />
                  Kirim Pesan
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
