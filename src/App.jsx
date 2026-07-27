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
          <a href="/eli_maholik_resume.pdf" className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">Resume</a>
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
          <a href="/eli_maholik_resume.pdf" className="btn-secondary">
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

const rentOpsScreenshots = [
  {
    src: "/images/booking.png",
    alt: "RentOps 360 booking form with unit, customer, rental dates, locations, and accessories",
    title: "Booking Workflow",
    caption:
      "Create a complete reservation with unit availability, customer details, pickup and return locations, rental dates, and accessory quantities.",
  },
  {
    src: "/images/calendar.png",
    alt: "RentOps 360 monthly booking calendar and upcoming rental activity",
    title: "Bookings Calendar",
    caption:
      "See active reservations across the month and keep upcoming pickups and returns visible in one operational view.",
  },
  {
    src: "/images/customers.png",
    alt: "RentOps 360 customer details with contact information and rental history",
    title: "Customer Records",
    caption:
      "Keep customer information, notes, documentation placeholders, and complete rental history connected to a single profile.",
  },
  {
    src: "/images/Maintenance.png",
    alt: "RentOps 360 maintenance records with status, unit, date, and cost",
    title: "Maintenance Tracking",
    caption:
      "Search and filter service records while tracking maintenance status, scheduled dates, affected units, and repair costs.",
  },
  {
    src: "/images/UnitDetails.png",
    alt: "RentOps 360 unit details showing trailer photo, pricing, booking history, and maintenance notes",
    title: "Unit History",
    caption:
      "Review a trailer's profile, rental pricing, availability, booking history, maintenance notes, and uploaded photos in one place.",
  },
];

function FeaturedProject() {
  return (
    <section
      id="projects"
      className="border-y border-slate-200 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Left side: project introduction */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                Flagship Client Project
              </span>

              <span className="text-sm font-medium text-slate-500">
                Private beta · Active development
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              RentOps 360
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              A full-stack rental operations platform built for a real trailer
              rental business. RentOps 360 replaces disconnected spreadsheets
              and manual processes with one system for reservations, fleet
              availability, customers, accessories, maintenance, and damage
              tracking.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
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
                "Cloudinary",
              ].map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right side: important workflows */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              Core workflows
            </p>

            <ul className="mt-5 space-y-4 text-slate-700">
              <ProjectBullet text="Create and update reservations with availability and accessory checks" />
              <ProjectBullet text="Track fleet status, check-outs, check-ins, and yard locations" />
              <ProjectBullet text="Connect customer, booking, maintenance, and damage history" />
              <ProjectBullet text="Manage role-based access with secure JWT authentication" />
              <ProjectBullet text="Deploy and maintain a full production-style cloud stack" />
            </ul>
          </div>
        </div>

        {/* Screenshot selector */}
        <RentOpsGallery screenshots={rentOpsScreenshots} />

        <p className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Source code is private due to client confidentiality. Screenshots use
          demo data and represent features I designed and implemented across the
          React frontend, Express API, and PostgreSQL database.
        </p>
      </div>
    </section>
  );
}

function RentOpsGallery({ screenshots }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentScreenshot = screenshots[currentIndex];

  function showPreviousScreenshot() {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? screenshots.length - 1
        : previousIndex - 1
    );
  }

  function showNextScreenshot() {
    setCurrentIndex((previousIndex) =>
      previousIndex === screenshots.length - 1
        ? 0
        : previousIndex + 1
    );
  }

  return (
    <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
      {/* Fake browser header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Product walkthrough
        </p>
      </div>

      {/* Main selected image */}
      <div className="relative bg-slate-900 p-3 sm:p-5">
        <div className="aspect-[1920/947] overflow-hidden rounded-2xl bg-slate-900">
          <img
            key={currentScreenshot.src}
            src={currentScreenshot.src}
            alt={currentScreenshot.alt}
            className="block h-full w-full object-contain object-top"
          />
        </div>

        {/* Previous button */}
        <button
          type="button"
          onClick={showPreviousScreenshot}
          className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-2xl text-white shadow-lg backdrop-blur transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:left-8"
          aria-label="Show previous RentOps screenshot"
        >
          <span className="-translate-y-px">‹</span>
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={showNextScreenshot}
          className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-2xl text-white shadow-lg backdrop-blur transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:right-8"
          aria-label="Show next RentOps screenshot"
        >
          <span className="-translate-y-px">›</span>
        </button>
      </div>

      {/* Caption and screenshot selectors */}
      <div className="border-t border-white/10 bg-slate-950 px-5 py-6 sm:px-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">
              {currentScreenshot.title}
            </p>

            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-400">
              {currentScreenshot.caption}
            </p>
          </div>

          <p className="shrink-0 text-sm font-semibold text-blue-400">
            {currentIndex + 1} / {screenshots.length}
          </p>
        </div>

        {/* Thumbnail selector */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {screenshots.map((screenshot, index) => {
            const isSelected = index === currentIndex;

            return (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`rounded-lg border px-3 py-2.5 text-center text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isSelected
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                }`}
                aria-label={`Show ${screenshot.title} screenshot`}
                aria-pressed={isSelected}
              >
                {screenshot.title}
              </button>
            )
          })}
        </div>
      </div>
    </div>
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
        <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-slate-200 p-4 shadow-sm">
          <img 
            src="/images/headshot.jpg"
            alt="Headshot of Eli Maholik"
            className="h-72 w-72 rounded-2xl object-cover shadow-md"
          />
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