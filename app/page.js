import Image from 'next/image';
import Roadmap from './roadmap';

const site = 'https://www.galtechlearning.com';

export default function Home() {
  return <>
    <div className="announcement">Live AI courses in Malayalam <span>·</span> <a href="https://youtube.com/@galtechlearninghub">Free lessons on YouTube ↗</a></div>
    <header><div className="shell header">
      <a className="brand" href={site}><Image src="/galtech-logo.webp" width={530} height={141} alt="GALTech School of Technology" priority /></a>
      <nav aria-label="Main navigation"><a href={site + '/courses'}>Courses</a><a href="#roadmap" aria-current="page">Roadmap</a><a href={site + '/about-us'}>About us</a></nav>
      <a className="button red apply" href={site + '/apply-now'}>Apply now <span aria-hidden="true">↗</span></a>
    </div></header>
    <main>
      <section className="hero"><div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> LEARNING ROADMAP <span className="divider" /> 2026 EDITION</div>
          <h1>AI Engineer<br/><em>Roadmap.</em></h1>
          <p>A step-by-step path from Python fundamentals to building and shipping real AI applications.</p>
          <div className="hero-actions"><a href="#roadmap" className="button red">Explore the roadmap <span aria-hidden="true">↓</span></a><a className="text-link" href={site + '/courses/ai-engineering-course'}>View AI course ↗</a></div>
        </div>
        <div className="blueprint" aria-hidden="true">
          <span className="drawing-id">FIG. 01 &nbsp; / &nbsp; AI SYSTEMS</span>
          <svg viewBox="0 0 520 330" fill="none">
            <defs><pattern id="dots" width="19" height="19" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#be8d7a" opacity=".38"/></pattern></defs>
            <rect width="520" height="330" fill="url(#dots)"/>
            <circle cx="260" cy="165" r="125" stroke="#e2b9a6" strokeDasharray="4 7"/><circle cx="260" cy="165" r="100" stroke="#eed1c2"/>
            <path d="M103 102h60l43 42m107 41 44 43h63M385 83h-35l-42 51M213 190l-49 56H96" stroke="#c92a22" strokeWidth="1.5"/>
            <rect x="200" y="105" width="120" height="120" rx="25" fill="#fffaf2" stroke="#d33229" strokeWidth="2"/>
            <rect x="211" y="116" width="98" height="98" rx="19" fill="#cf231e"/>
            <path d="M260 134c4 22 10 27 31 31-21 4-27 10-31 31-4-21-10-27-31-31 21-4 27-9 31-31Z" stroke="white" strokeWidth="2"/>
            <g fill="#fffaf2" stroke="#e5b6a3"><rect x="42" y="84" width="86" height="36" rx="8"/><rect x="380" y="65" width="100" height="36" rx="8"/><rect x="397" y="210" width="79" height="36" rx="8"/><rect x="50" y="228" width="87" height="36" rx="8"/></g>
            <g fill="#8a4237" fontSize="12" fontFamily="monospace" textAnchor="middle"><text x="85" y="107">CODE</text><text x="430" y="88">MODELS</text><text x="436" y="233">DEPLOY</text><text x="93" y="251">DATA</text></g>
            <g fill="#cf231e"><circle cx="163" cy="102" r="4"/><circle cx="350" cy="83" r="4"/><circle cx="357" cy="228" r="4"/><circle cx="164" cy="246" r="4"/></g>
          </svg>
          <span className="drawing-caption">FROM FIRST LINE OF CODE TO PRODUCTION</span>
        </div>
      </div></section>
      <Roadmap />
      <section className="shell faq"><div className="eyebrow">COMMON QUESTIONS</div><h2>Before you start</h2>
        <details><summary>What does an AI engineer do?</summary><p>AI engineers integrate models into software. They build features around model outputs, connect them to data and tools, evaluate their behavior, and monitor the systems in production.</p></details>
        <details><summary>Do I need programming experience?</summary><p>You can start with the foundations stage. If you already write Python and work with APIs, use the topic exercises to check your skills before moving on.</p></details>
        <details><summary>How should I use this roadmap?</summary><p>Work through the stages in order, open each topic for a practice task and resource, and use the projects to combine what you’ve learned.</p></details>
      </section>
      <section className="shell"><div className="course"><div><div className="eyebrow">LEARN WITH GALTECH</div><h2>Want instructor-led training?</h2><p>Explore GALTech’s AI Engineering course and see what’s covered.</p></div><a className="button red" href={site + '/courses/ai-engineering-course'}>Explore the course ↗</a></div></section>
    </main>
    <footer><div className="shell footer"><a href={site}>GALTech School of Technology</a><a href={site + '/contact-us'}>Contact us ↗</a></div></footer>
  </>;
}
