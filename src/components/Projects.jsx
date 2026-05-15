// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Layout } from "lucide-react";
import { useInView } from "../hooks/useInView";

const PROJECTS = [
  {
    title: "Salam Bundo Kita | E-Commerce",
    description:
      "Platform e-commerce untuk penjualan tabung gas elpiji 3kg dari PT. Salam Bundo Kita. Dilengkapi autentikasi JWT, manajemen produk, keranjang belanja, dan integrasi payment gateway Midtrans.",
    tags: [
      "TypeScript",
      "Javascript",
      "ExpressJs",
      "React",
      "Node.js",
      "Vite",
      "Tailwindcss",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Midtrans",
    ],
    repoFe: "https://github.com/christian-siahaan26/salambundokito",
    repoBe: "https://github.com/christian-siahaan26/salambundokito-api",
    live: "https://salambundokito.vercel.app",
    gradient: "from-cyan-500/20 via-transparent to-transparent",
    accent: "border-cyan-500/40",
    status: "Production",
  },
  {
    title: "API SmartRecruiter",
    description:
      "Backend API untuk platform analisis kesesuaian CV dengan lowongan kerja. User mengunggah CV dan mengisi posisi yang dilamar, lalu sistem menganalisis tingkat kecocokan menggunakan Vertex AI.",
    tags: [
      "TypeScript",
      "ExpressJs",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Vertex AI",
      "JWT",
    ],
    repoBe: "https://github.com/christian-siahaan26/be-dicoding-cv",
    live: "https://be-dicoding-cv-o8hg.vercel.app",
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    accent: "border-emerald-500/40",
    status: "Live",
  },
  {
    title: "Leantive",
    description:
      "Aplikasi klasifikasi nasabah bank ke dalam 3 kelompok (High, Medium, Low) untuk membantu sales bank menentukan kelayakan dan besaran pinjaman yang akan diberikan kepada nasabah.",
    tags: [
      "TypeScript",
      "Javascript",
      "ExpressJs",
      "React",
      "Face-api.js",
      "Node.js",
      "Vite",
      "Tailwindcss",
      "PostgreSQL",
      "JWT",
      "Cloudinary",
    ],
    repoFe: "https://github.com/christian-siahaan26/leantive",
    repoBe: "https://github.com/christian-siahaan26/api-leantive",
    live: "https://leantive.vercel.app",
    gradient: "from-violet-500/20 via-transparent to-transparent",
    accent: "border-violet-500/40",
    status: "Open Source",
  },
  {
    title: "Complaint List App",
    description:
      "Aplikasi manajemen laporan kebersihan untuk perumahan Cluster Azalea. Warga dapat mengajukan laporan, memantau status penanganan, dan admin dapat mengelola seluruh pengaduan secara terpusat.",
    tags: [
      "TypeScript",
      "Javascript",
      "ExpressJs",
      "React",
      "Node.js",
      "Vite",
      "Tailwindcss",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Cloudinary",
    ],
    repoFe: "https://github.com/christian-siahaan26/FE-PI",
    repoBe: "https://github.com/christian-siahaan26/BE-PI",
    live: "https://fe-complaints.vercel.app/",
    gradient: "from-orange-500/20 via-transparent to-transparent",
    accent: "border-orange-500/40",
    status: "Beta",
  },
];

const STATUS_COLORS = {
  Production: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Live: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Open Source": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  Beta: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className={`project-card border ${project.accent}`}
    >
      {/* Card header gradient */}
      <div
        className={`h-1.5 bg-linear-to-r ${project.gradient.replace("via-transparent to-transparent", "to-transparent")}`}
      />

      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold font-display text-white mb-1">
              {project.title}
            </h3>
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-xs font-mono border ${STATUS_COLORS[project.status]}`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 font-mono text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
          {/* FE Repo — hanya tampil jika ada */}
          {project.repoFe && (
            <a
              href={project.repoFe}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Layout size={13} />
              FE Repo
            </a>
          )}

          {/* BE Repo — hanya tampil jika ada */}
          {project.repoBe && (
            <a
              href={project.repoBe}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Code2 size={13} />
              BE Repo
            </a>
          )}

          {/* Live Demo */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-violet-400 transition-colors ml-auto"
            >
              Live Demo
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-cyan-400 text-sm tracking-widest mb-3"
          >
            03. what I've built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 mx-auto w-24 h-0.5 bg-linear-to-r from-cyan-500 to-emerald-500"
          />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/christian-siahaan26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <Github size={16} />
            Lihat Semua di GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
