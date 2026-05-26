import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neon Commerce",
    description:
      "A futuristic e-commerce dashboard with AI-powered analytics and immersive UI interactions.",
    tech: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Cyber Vision",
    description:
      "AI-driven image analysis platform with real-time visual intelligence and advanced automation.",
    tech: ["Next.js", "TensorFlow", "Node.js"],
  },
  {
    title: "Quantum Chat",
    description:
      "Encrypted next-generation messaging application with holographic-inspired interfaces.",
    tech: ["React", "Socket.io", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#070b14] px-6 py-20 md:px-12">
      
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-extrabold text-white md:text-6xl">
            Cybernetic
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Creations
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A showcase of futuristic applications, immersive digital experiences,
            and next-generation development projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10"></div>
              </div>

              {/* Project Number */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-cyan-400">
                  0{index + 1}
                </span>

                <ArrowUpRight className="text-pink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8 flex flex-wrap gap-3">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]">
                    <ExternalLink size={18} />
                    Live Demo
                  </button>

                  <button className="rounded-xl border border-pink-400/30 bg-white/5 p-3 text-pink-400 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,200,0.4)]">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-cyan-400/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}