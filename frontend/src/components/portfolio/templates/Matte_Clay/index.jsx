import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Mail, MapPin, Briefcase, Award, Code, Terminal, Palette, ChevronRight } from 'lucide-react';
import data from '../../../../data/dummy_data.json';

// --- Claymorphism Reusable Components ---
const ClayCard = ({ children, className = "", noHover = false }) => (
  <div className={`
    bg-[#e0e5ec] rounded-[2rem]
    shadow-[8px_8px_16px_#c3cbda,-8px_-8px_16px_#ffffff,inset_2px_2px_5px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.05)]
    ${!noHover ? 'hover:shadow-[4px_4px_8px_#c3cbda,-4px_-4px_8px_#ffffff,inset_2px_2px_5px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.05)] transition-all duration-300 transform hover:-translate-y-1' : ''}
    ${className}
  `}>
    {children}
  </div>
);

const ClayInset = ({ children, className = "" }) => (
  <div className={`
    bg-[#e0e5ec] rounded-2xl
    shadow-[inset_6px_6px_12px_#c3cbda,inset_-6px_-6px_12px_#ffffff]
    ${className}
  `}>
    {children}
  </div>
);

const ClayButton = ({ children, href, className = "" }) => (
  <a 
    href={href}
    className={`
      inline-flex items-center justify-center bg-[#e0e5ec] rounded-full
      shadow-[6px_6px_12px_#c3cbda,-6px_-6px_12px_#ffffff,inset_1px_1px_3px_rgba(255,255,255,0.8),inset_-1px_-1px_3px_rgba(0,0,0,0.05)]
      active:shadow-[inset_4px_4px_8px_#c3cbda,inset_-4px_-4px_8px_#ffffff]
      transition-all duration-200 text-gray-600 hover:text-indigo-500 font-medium
      ${className}
    `}
  >
    {children}
  </a>
);

const ClayBadge = ({ children, colorClass = "text-gray-500" }) => (
  <div className={`
    px-4 py-2 rounded-full bg-[#e0e5ec] font-semibold text-sm
    shadow-[4px_4px_8px_#c3cbda,-4px_-4px_8px_#ffffff]
    ${colorClass}
  `}>
    {children}
  </div>
);

export default function MatteClay() {
  const { personal, socials, skills, projects, experience, testimonials, stats } = data;

  return (
    <div className="min-h-screen bg-[#e0e5ec] text-gray-700 font-sans selection:bg-indigo-200 overflow-x-hidden pb-24">
      
      {/* Abstract Background Blobs (Soft, out of focus) */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="fixed -bottom-32 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 space-y-32">
        
        {/* HERO */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <ClayBadge colorClass="text-indigo-500 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> {personal.title}
              </ClayBadge>
              <ClayBadge colorClass="text-rose-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {personal.location}
              </ClayBadge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tight leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-rose-400">{personal.name}</span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {personal.bio}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <ClayButton href="#contact" className="px-8 py-4 text-lg text-indigo-600">
                Let's Talk <ChevronRight className="w-5 h-5 ml-2" />
              </ClayButton>
              <div className="flex gap-4">
                {socials.github && (
                  <ClayButton href={socials.github} className="w-14 h-14 rounded-full">
                    <Github className="w-6 h-6" />
                  </ClayButton>
                )}
                {socials.linkedin && (
                  <ClayButton href={socials.linkedin} className="w-14 h-14 rounded-full">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </ClayButton>
                )}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Super rounded, soft profile picture frame */}
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[3rem] p-4 bg-[#e0e5ec] shadow-[12px_12px_24px_#c3cbda,-12px_-12px_24px_#ffffff]">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] p-2">
                <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover rounded-[2rem]" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* STATS BUBBLES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ClayCard className="p-8 text-center flex flex-col items-center justify-center">
            <h3 className="text-5xl font-black text-indigo-400 mb-2">{stats.yearsExperience}+</h3>
            <p className="text-gray-500 font-medium uppercase tracking-wide">Years Experience</p>
          </ClayCard>
          <ClayCard className="p-8 text-center flex flex-col items-center justify-center">
            <h3 className="text-5xl font-black text-rose-400 mb-2">{stats.projectsCompleted}</h3>
            <p className="text-gray-500 font-medium uppercase tracking-wide">Projects Completed</p>
          </ClayCard>
          <ClayCard className="p-8 text-center flex flex-col items-center justify-center">
            <h3 className="text-5xl font-black text-teal-400 mb-2">{stats.happyClients}</h3>
            <p className="text-gray-500 font-medium uppercase tracking-wide">Happy Clients</p>
          </ClayCard>
        </section>

        {/* SKILLS */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Tactile Arsenal</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The tools and technologies I use to sculpt digital experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => {
              // Determine icon based on category for flavor
              const Icon = skill.category === 'Frontend' ? Palette : (skill.category === 'Backend' ? Terminal : Code);
              const color = skill.category === 'Frontend' ? 'text-rose-400' : (skill.category === 'Backend' ? 'text-indigo-400' : 'text-teal-400');
              const barColor = skill.category === 'Frontend' ? 'bg-rose-400' : (skill.category === 'Backend' ? 'bg-indigo-400' : 'bg-teal-400');
              
              return (
                <ClayCard key={i} className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#c3cbda,inset_-3px_-3px_6px_#ffffff] ${color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-700 text-lg">{skill.name}</span>
                    </div>
                    <span className="font-semibold text-gray-400">{skill.level}%</span>
                  </div>
                  
                  {/* Inset progress track */}
                  <ClayInset className="h-4 w-full p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${barColor} shadow-inner opacity-80`}
                    />
                  </ClayInset>
                </ClayCard>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Showcase</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Recent works carved from code and caffeine.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <ClayCard key={i} className="p-6 group flex flex-col h-full">
                {/* Inset Image Container */}
                <ClayInset className="h-64 mb-8 p-3 w-full">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </ClayInset>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-500 mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-xs font-semibold text-gray-600 bg-[#e0e5ec] rounded-full shadow-[2px_2px_5px_#c3cbda,-2px_-2px_5px_#ffffff]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && (
                    <ClayButton href={project.liveUrl} className="flex-1 py-3 px-4 gap-2 text-rose-500 hover:text-rose-600">
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </ClayButton>
                  )}
                  {project.githubUrl && (
                    <ClayButton href={project.githubUrl} className="flex-1 py-3 px-4 gap-2 text-indigo-500 hover:text-indigo-600">
                      <Github className="w-4 h-4" /> Source Code
                    </ClayButton>
                  )}
                </div>
              </ClayCard>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Journey</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The path I've walked so far.</p>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* The inset timeline groove */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-4 -ml-2 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c3cbda,inset_-2px_-2px_4px_#ffffff]" />
            
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-teal-400 border-4 border-[#e0e5ec] shadow-[4px_4px_8px_#c3cbda,-4px_-4px_8px_#ffffff] z-10" />
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                  
                  {/* Card */}
                  <div className="w-full md:w-5/12 pl-16 md:pl-0">
                    <ClayCard className="p-6">
                      <span className="inline-block px-3 py-1 bg-teal-100 text-teal-600 text-xs font-bold rounded-full shadow-inner mb-4">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-gray-500 mb-4">{exp.company}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                    </ClayCard>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Word on the Street</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {testimonials.map((test, i) => (
              <ClayCard key={i} className="p-8 relative mt-8 md:mt-0">
                {/* Floating Avatar */}
                <div className="absolute -top-10 left-8 w-20 h-20 rounded-full p-2 bg-[#e0e5ec] shadow-[6px_6px_12px_#c3cbda,-6px_-6px_12px_#ffffff]">
                  <img src={test.avatar} alt={test.name} className="w-full h-full rounded-full object-cover" />
                </div>
                
                <div className="pt-10">
                  <p className="text-gray-500 italic mb-6 leading-relaxed relative z-10">
                    "{test.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-300/50 pt-6">
                    <div>
                      <h4 className="font-bold text-gray-800">{test.name}</h4>
                      <p className="text-sm text-indigo-400 font-medium">{test.role}</p>
                    </div>
                  </div>
                </div>
              </ClayCard>
            ))}
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section className="pb-12 text-center max-w-4xl mx-auto">
          <ClayCard className="p-12 md:p-20 flex flex-col items-center">
            <Award className="w-16 h-16 text-amber-400 mb-6 drop-shadow-md" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Let's Build Something</h2>
            <p className="text-xl text-gray-500 mb-12 max-w-xl">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            
            <ClayButton href={`mailto:${socials.email}`} className="px-12 py-5 text-xl font-bold text-rose-500 hover:text-rose-600 mb-12">
              <Mail className="w-6 h-6 mr-3" /> Say Hello
            </ClayButton>
            
            <div className="flex gap-6 justify-center">
              {socials.github && (
                <ClayButton href={socials.github} className="w-16 h-16 rounded-full text-gray-500 hover:text-gray-800">
                  <Github className="w-7 h-7" />
                </ClayButton>
              )}
              {socials.linkedin && (
                <ClayButton href={socials.linkedin} className="w-16 h-16 rounded-full text-blue-500 hover:text-blue-600">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </ClayButton>
              )}
              {socials.twitter && (
                <ClayButton href={socials.twitter} className="w-16 h-16 rounded-full text-sky-500 hover:text-sky-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </ClayButton>
              )}
            </div>
          </ClayCard>
        </section>

      </div>
    </div>
  );
}
