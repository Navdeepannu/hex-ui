import { Navbar } from "@/components/showcase/navbar";
import LogoHexagon from "@/components/ui/logo";
import {
  IconHexagonFilled,
  IconArrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-neutral-900">
      <Navbar
        logo={"/images/image.jpg"}
        links={[
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Resume", href: "#resume" },
        ]}
        cta={{ label: "Get in touch", href: "#talk" }}
        position="top"
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <LogoHexagon size={80} className="mx-auto mb-6" />
          </div>

          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            John{" "}
            <span className="bg-gradient-to-r from-neutral-700 to-neutral-900 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300 md:text-2xl">
            Full-stack developer crafting digital experiences with modern
            technologies. Passionate about creating beautiful, functional, and
            user-centered applications.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="transform rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700">
              View My Work
            </button>
            <button className="rounded-full border-2 border-purple-400 px-8 py-4 font-semibold text-purple-400 transition-all duration-300 hover:bg-purple-400 hover:text-white">
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <IconBrandGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <IconMail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <IconArrowDown className="text-gray-400" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              I'm a passionate developer with 5+ years of experience building
              web applications
            </p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  My Journey
                </h3>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Started as a curious student, evolved into a professional
                  developer. I love solving complex problems and creating
                  intuitive user experiences that make a real difference in
                  people's lives.
                </p>
                <p className="leading-relaxed text-gray-300">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or sharing
                  knowledge with the community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 text-center backdrop-blur-md">
                <div className="mb-2 text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 p-6 text-center backdrop-blur-md">
                <div className="mb-2 text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-6 text-center backdrop-blur-md">
                <div className="mb-2 text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>

              <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 text-center backdrop-blur-md">
                <div className="mb-2 text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="projects"
        className="flex min-h-screen items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Frontend */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="mb-6 text-2xl font-bold text-white">Frontend</h3>
              <div className="space-y-4">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="mb-6 text-2xl font-bold text-white">Backend</h3>
              <div className="space-y-4">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-700">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="mb-6 text-2xl font-bold text-white">Tools</h3>
              <div className="space-y-4">
                {["Git", "AWS", "Vercel", "Figma", "VS Code"].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
