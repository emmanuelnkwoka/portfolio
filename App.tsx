import React, { useState, useEffect, useCallback } from 'react';
import { ActionButton } from './components/ActionButton';
import { SectionTitle } from './components/SectionTitle';
import { ProjectCard } from './components/ProjectCard';
import { ArticleLink } from './components/ArticleLink';
import { SunIcon } from './components/icons/SunIcon';
import { MoonIcon } from './components/icons/MoonIcon';
import { CodeIcon } from './components/icons/CodeIcon';
import { LayoutGridIcon } from './components/icons/LayoutGridIcon';
import { SendIcon } from './components/icons/SendIcon';
import { FileTextIcon } from './components/icons/FileTextIcon';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { FeatherIcon } from './components/icons/FeatherIcon';
import { MessageSquareIcon } from './components/icons/MessageSquareIcon';
import { TwitterIcon } from './components/icons/TwitterIcon';
import { GithubIcon } from './components/icons/GithubIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
// import { YoutubeIcon } from './components/icons/YoutubeIcon';
import { BehanceIcon } from './components/icons/BehanceIcon';
import { CpuIcon } from './components/icons/CpuIcon';
import { RocketIcon } from './components/icons/RocketIcon';

const heroImageBase64 = "./hero.png"
const logo = "./logo.png"

const App: React.FC = () => {
  // Initialize state from the DOM, which is set by the inline script.
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    // When theme state changes, update the class and localStorage.
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage", error);
    }
  }, [theme]);
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon;
  const formInputClasses = "w-full p-3 rounded-xl border border-gray-300 bg-white transition-all dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const skillTagClasses = "py-1.5 px-3 text-sm font-medium rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 transition-colors";
  const footerIconLinkClasses = "text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-sm dark:shadow-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight">
                <img
                  src="https://dev.emmanuelnkwoka.com/hero.png"
                  alt="Emmanuel Nkwoka"
                  className="w-full h-full object-cover object-center"
                />
          </h1>
          {/* <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ThemeIcon className="w-6 h-6" />
          </button> */}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <section id="home" className="py-20 sm:py-28 lg:py-36 min-h-[60vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7">
              <span className="text-xl font-medium text-blue-500 dark:text-blue-400 block mb-2">
                Senior Web Developer | AI System Automation Expert
              </span>
              <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
                I build solid, <span className="text-blue-600 dark:text-blue-500">scalable</span> products.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
                Highly skilled at design systems, progressive enhancement, and delivering fast, resilient solutions optimized for scale.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <ActionButton icon={LayoutGridIcon} label="View My Work" href="https://emmanuelnkwoka.com" primary={true} />
                <ActionButton icon={FileTextIcon} label="My Résumé" href="https://emmanuelnkwoka.com/resume.pdf" newWindow={true} />
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center mt-12 lg:mt-0">
              <div className="w-full max-w-md h-96 bg-gray-100 dark:bg-gray-800/50 rounded-3xl shadow-2xl dark:shadow-blue-900/20 relative overflow-hidden">
                <img
                  src="https://dev.emmanuelnkwoka.com/hero.png"
                  alt="Emmanuel Nkwoka at office setup"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                Over the years, I've built products for companies around the globe, ranging from marketing sites to complex enterprise applications. My focus remains firmly on fast, elegant, and accessible user experiences that adhere to web standards.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <BriefcaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white"></h4>
                    <p className="text-gray-600 dark:text-gray-400">Senior Web Engineer, crafting thoughtful and inclusive experiences for millions of users.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BriefcaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white"></h4>
                    <p className="text-gray-600 dark:text-gray-400">AI Automation Specialist, focusing on complex solutions tailored towards automated compliance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner">
                <h3 className="flex items-center space-x-3 text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  <CodeIcon className="w-6 h-6" /> <span>Engineering</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Equipped with the right tools to deliver fast, resilient solutions. I function independently of specific frameworks, prioritizing performance and scalability.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={skillTagClasses}>React/Next.js</span>
                  <span className={skillTagClasses}>TypeScript</span>
                  <span className={skillTagClasses}>Node.js</span>
                  <span className={skillTagClasses}>Performance Tuning</span>
                  <span className={skillTagClasses}>Vercel/AWS</span>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner">
                <h3 className="flex items-center space-x-3 text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  <FeatherIcon className="w-6 h-6" /> <span>Design & UX</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Committed to creating fluent user experiences. I focus on stylesheets, accessibility, and design systems, ensuring pixel-perfect and inclusive interfaces.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={skillTagClasses}>Design Systems</span>
                  <span className={skillTagClasses}>Figma</span>
                  <span className={skillTagClasses}>Accessibility (A11y)</span>
                  <span className={skillTagClasses}>Tailwind CSS</span>
                  <span className={skillTagClasses}>Prototyping</span>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner">
                <h3 className="flex items-center space-x-3 text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  <CpuIcon className="w-6 h-6" /> <span>AI & System Automation</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Leveraging artificial intelligence to build intelligent systems, automate workflows, and create smarter, more efficient user experiences.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className={skillTagClasses}>Gemini API</span>
                    <span className={skillTagClasses}>LLM Integration</span>
                    <span className={skillTagClasses}>Process Automation</span>
                    <span className={skillTagClasses}>Python</span>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner">
                <h3 className="flex items-center space-x-3 text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  <RocketIcon className="w-6 h-6" /> <span>Performance & Speed</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  For E-commerce, FinTech, & SaaS. I deliver guaranteed ROI, not just code, directly converting performance into sales revenue.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className={skillTagClasses}>Core Web Vitals</span>
                    <span className={skillTagClasses}>Image Optimization</span>
                    <span className={skillTagClasses}>Code Splitting</span>
                    <span className={skillTagClasses}>CDN Configuration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <SectionTitle>My Work</SectionTitle>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Open-source projects, web apps, and experimentals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Next-Gen E-commerce Platform" 
              description="Built a highly scalable, serverless platform using Next.js and Vercel, achieving 98+ Lighthouse scores."
              tech={['Next.js', 'React', 'TypeScript']}
              demoUrl="#"
            />
            <ProjectCard 
              title="Design System Documentation" 
              description="Developed a centralized documentation site for a large organization's component library and UX guidelines."
              tech={['Storybook', 'Figma', 'Chromatic']}
              demoUrl="#"
            />
            <ProjectCard 
              title="Real-time Data Visualization Tool" 
              description="A complex internal tool for viewing and analyzing financial data streams with low-latency updates."
              tech={['D3.js', 'WebSockets', 'Tailwind']}
              demoUrl="#"
            />
          </div>
        </section>

        <section id="writing" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <SectionTitle>I Write, Sometimes</SectionTitle>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            About design, frontend development, learning, and life.
          </p>
          <div className="space-y-6 max-w-3xl">
            <ArticleLink title="The Power of Progressive Enhancement in Modern Apps" date="Oct 20, 2025" />
            <ArticleLink title="Scaling Frontend Architecture: From Monolith to Micro-Frontends" date="Sep 15, 2025" />
            <ArticleLink title="Using the new CSS features for better Design System components" date="Aug 01, 2025" />
          </div>
        </section>

        <section id="contact" className="py-20 border-t border-gray-200 dark:border-gray-800 mb-10">
          <SectionTitle>Send me a message!</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Got a question or a proposal for an exciting project? Or perhaps you just want to say hello? Go ahead, let's connect and build something great together.
              </p>
              <div className="space-y-3">
                <a href="mailto:speed@emmanuelnkwoka.com" className="flex items-center space-x-3 text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  <SendIcon className="w-5 h-5" /> <span>speed@emmanuelnkwoka.com</span>
                </a>
                <a href="https://t.me/yourtelegramid" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  <MessageSquareIcon className="w-5 h-5" /> <span>t.me/emmanuelnkwoka</span>
                </a>
              </div>
            </div>

            <form className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg space-y-4">
              <input type="text" placeholder="Your Name" className={formInputClasses} />
              <input type="email" placeholder="Email Address" className={formInputClasses} />
              <textarea placeholder="Your Message" rows={4} className={formInputClasses}></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Shoot Message
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Emmanuel Nkwoka. Built with <span className="text-red-500">❤️</span> and Code.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/emmankwoka" target="_blank" rel="noopener noreferrer" className={footerIconLinkClasses} aria-label="Twitter profile">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://github.com/emmanuelnkwoka" target="_blank" rel="noopener noreferrer" className={footerIconLinkClasses} aria-label="GitHub profile">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/emmanuelnkwoka" target="_blank" rel="noopener noreferrer" className={footerIconLinkClasses} aria-label="LinkedIn profile">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href="https://www.behance.net/emmankwoka" target="_blank" rel="noopener noreferrer" className={footerIconLinkClasses} aria-label="YouTube channel">
              <BehanceIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
