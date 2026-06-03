import { useState } from "react";

const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Prisma", "SQLite", "MongoDB"],
  },
  {
    title: "Languages & Tools",
    items: ["Java", "Python", "C++", "Git", "GitHub", "Postman", "Vercel", "Render", "Neon"],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <AndroidProject />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          Eli Maholik
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="/resume.pdf" className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">Resume</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Hey, I’m Eli
        </div>

        <h1 className="max-w-xl text-5xl font-extrabold tracking-tight md:text-6xl">
          Full-Stack Software Developer
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          I build practical, user-focused web applications with React,
          TypeScript, Node.js, Express, PostgreSQL, and Prisma.
        </p>

        <p className="mt-4 max-w-xl text-slate-600">
          Currently focused on building RentOps 360, a rental management
          platform that helps businesses streamline operations.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn-secondary">
            Download Resume
          </a>
          <a href="https://github.com/eli-maholik" className="btn-secondary">
            GitHub
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>
      </div>

      <DashboardPreview />
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="flex gap-2 border-b border-slate-200 bg-slate-100 px-4 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>

      <img
        src='/images/dashboard.png'
        alt="RentOps 360 dashboard showing rental metrics and upcoming rentals"
        className="w-full object-cover"
      />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}

function FeaturedProject() {
  return (
    <section id="projects" className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
         <div className="flex justify-center">
          <img
            src="/images/upcoming.png"
            alt="RentOps 360 upcoming rentals screen"
            className="w-full max-w-md rounded-xl border border-slate-200 shadow-sm"
          />
         </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-blue-600">
            Featured Project
          </p>
          <h2 className="text-4xl font-bold">RentOps 360</h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            A full-stack rental management platform built for a trailer rental
            business.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL",
              "Neon",
              "Vercel",
              "Render",
            ].map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>

          <ul className="mt-6 space-y-3 text-slate-700">
            <ProjectBullet text="Complete reservation and customer management system" />
            <ProjectBullet text="Responsive dashboards, customer profiles, and booking workflows" />
            <ProjectBullet text="Secure JWT authentication with protected API routes" />
            <ProjectBullet text="Deployed frontend on Vercel and backend on Render" />
          </ul>

          <p className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Source code is private due to client confidentiality. Screenshots shown use demo data where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}

const androidScreenshots = [
  {
    src: "/images/inventory.png",
    alt: "Android inventory app main inventory screen",
    caption: "Main inventory screen with item cards and stock information.",
  },
  {
    src: "/images/search.png",
    alt: "Android inventory app search features",
    caption: "Search functionality for quickly finding inventory items.",
  },
  {
    src: "/images/filter.png",
    alt: "Android inventory app filter features",
    caption: "Filtering tools for narrowing inventory results."
  }
]

function AndroidProject() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-blue-600">
            Featured Academic Project
          </p>

          <h2 className="text-4xl font-bold">
            Android Inventory Management App
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            A native Android inventory management app build in Java for tracking 
            inventory items, managing stock levels, and supporting common mobile 
            app workflows like search, filtering, local persistence, and user 
            interaction. 
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Java",
              "Android Studio",
              "SQLite",
              "Mobile UI",
              "CRUD",
              "Search",
              "Filtering",
            ].map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>

          <ul className="mt-6 space-y-3 text-slate-700">
            <ProjectBullet text="Built a native Android interface for managing inventory items" />
            <ProjectBullet text="Implemented inventory viewing, searching, and filtering workflows" />
            <ProjectBullet text="Used local data persistence to store and manage inventory records" />
            <ProjectBullet text="Designed mobile-friendly screens with a clear visual hierarchy" />
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/eli-maholik/inventory-application-system"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>

        <ScreenshotCarousel screenshots={androidScreenshots} />
      </div>
    </section>
  )
}

function ScreenshotCarousel({ screenshots }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentScreenshot = screenshots[currentIndex];

  function showPreviousScreenshot() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? screenshots.length - 1 : previousIndex - 1
    );
  }

  function showNextScreenshot() {
    setCurrentIndex((previousIndex) =>
      previousIndex === screenshots.length - 1 ? 0 : previousIndex + 1
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="relative mx-auto flex max-w-md items-center justify-center">
        <button
          type="button"
          onClick={showPreviousScreenshot}
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80"
          aria-label="Previous screenshot"
        >
          <span className="leading-none -translate-y-px">‹</span>
        </button>

        <div className="max-w-xs overflow-hidden rounded-[2rem] border-8 border-slate-900 bg-slate-900 shadow-xl">
          <img 
            src={currentScreenshot.src}
            alt={currentScreenshot.alt}
            className="h-[560px] w-full rounded-[1.45rem] object-cover"
          />
        </div>

        <button
          type="button"
          onClick={showNextScreenshot}
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black/80"
          aria-label="Next screenshot"
        >
          <span className="leading-none -translate-y-px">›</span>
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-slate-600">
        {currentScreenshot.caption}
      </p>

      <div className="mt-4 flex justify-center gap-2">
        {screenshots.map((screenshot, index) =>(
          <button 
            key={screenshot.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === currentIndex ? "bg-blue-600" : "bg-slate-300"
            }`}
            aria-label={`Show screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectBullet({ text }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
        ✓
      </span>
      <span>{text}</span>
    </li>
  );
}


function Skills() {
  return (
    <section id="skills" className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                {group.title === "Frontend"
                  ? "🖥️"
                  : group.title === "Backend"
                    ? "🧩"
                    : group.title === "Databases"
                      ? "🗄️"
                      : "🛠️"}
              </div>

              <h3 className="mb-4 text-lg font-bold">{group.title}</h3>

              <ul className="space-y-1 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="mt-5 leading-8 text-slate-600">
          I’m a Computer Science graduate from Southern New Hampshire University
          with a concentration in Software Engineering. I enjoy building
          practical software with clean interfaces and reliable backend systems.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          My recent work includes RentOps 360, a rental management platform for
          a local trailer rental business. Through that project, I gained
          hands-on experience with client communication, MVP planning,
          authentication, database modeling, cloud deployment, and building
          features for real users.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-blue-700">
          <span>B.S. Computer Science</span>
          <span>Full-Stack Developer</span>
          <span>Continuous Learner</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex h-72 w-72 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-slate-200 text-7xl shadow-sm">
          👨‍💻
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold">Let’s Connect</h2>
        <p className="mt-3 text-slate-600">
          I’m open to junior software engineering and full-stack developer
          opportunities.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ContactCard label="Email" value="elimaholik@gmail.com" href="mailto:elimaholik@gmail.com" />
          <ContactCard label="GitHub" value="github.com/eli-maholik" href="https://github.com/eli-maholik" />
          <ContactCard label="Location" value="Bradenton, FL" />
        </div>

        <a href="mailto:elimaholik@gmail.com" className="mt-8 inline-flex btn-primary">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }) {
  const content = (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-2 font-medium text-blue-700">{value}</p>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-8 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
        <p className="font-bold text-white">Eli Maholik</p>
        <p className="text-sm">© 2026 Eli Maholik. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;