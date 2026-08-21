import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight, BookOpen, CheckCircle2, Facebook, GraduationCap, HandHeart,
  HeartPulse, Leaf, MapPin, Mail, Menu, Phone, Search, Send, ShieldCheck,
  Sprout, TreePine, Users, Wheat, X
} from "lucide-react";
import {
  advisors, focusAreas, images, projects, resources, siteContent, socialLinks,
  stats, stories, team, values
} from "./content";

/**
 * ============================================================
 * DEVELOPER NOTE
 * ============================================================
 * Almost all organization content lives in ./content.js.
 *
 * If you are updating the website for NCDC, start there.
 * You should only need to edit this file when changing layout,
 * components, navigation or functionality.
 * ============================================================
 */

const iconMap = {
  leaf: Leaf,
  book: BookOpen,
  learning: GraduationCap,
  tree: TreePine,
  file: BookOpen,
  report: BookOpen,
  guide: GraduationCap,
  wheat: Wheat,
  health: HeartPulse,
  users: Users,
  treeFocus: TreePine,
  hand: HandHeart,
  sprout: Sprout,
  shield: ShieldCheck
};

function ContentIcon({ name, size = 25 }) {
  const Icon = iconMap[name] || BookOpen;
  return <Icon size={size} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href={`tel:${siteContent.phone.replace(/\s/g, "")}`}><Phone size={14}/> {siteContent.phone}</a>
          <a href={`mailto:${siteContent.email}`}><Mail size={14}/> {siteContent.email}</a>
          <div className="top-social">
            <a href={socialLinks.facebook} aria-label="Facebook"><Facebook size={14}/></a>
            <a href={socialLinks.instagram} aria-label="Instagram">IG</a>
            <a href={socialLinks.youtube} aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" aria-label="NCDC home">
            <span className="brand-mark"><img src="/images/logo.png" alt="NCDC logo" /></span>
            <span><strong>{siteContent.shortName}</strong><small>{siteContent.name}</small></span>
          </Link>

          <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X/> : <Menu/>}
          </button>

          <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/success-stories">Success Stories</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <button className="search-btn" onClick={() => setSearch(true)} aria-label="Search"><Search size={19}/></button>
            <Link to="/contact-us" className="btn btn-primary nav-cta">Get Involved <ArrowRight size={16}/></Link>
          </nav>
        </div>
      </header>

      {search && <SearchOverlay close={() => setSearch(false)} />}
    </>
  );
}

function SearchOverlay({ close }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return [
      ...projects.map(item => ({ ...item, type: "Project", path: "/projects", searchable: `${item.title} ${item.location} ${item.text}` })),
      ...stories.map(item => ({ ...item, type: "Success Story", path: "/success-stories", searchable: `${item.title} ${item.excerpt}` })),
      ...resources.map(item => ({ ...item, type: "Resource", path: "/resources", searchable: `${item.title} ${item.description} ${item.category}` }))
    ].filter(item => item.searchable.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  const go = path => { close(); navigate(path); };

  return (
    <div className="search-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Site search">
      <div className="search-box search-results-box" onClick={e => e.stopPropagation()}>
        <div className="search-input-row">
          <Search size={20}/>
          <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects, stories and resources..." />
          <button onClick={close} aria-label="Close search"><X/></button>
        </div>
        {query && (
          <div className="search-results">
            {results.length ? results.map((item, i) => (
              <button className="search-result" key={`${item.type}-${i}`} onClick={() => go(item.path)}>
                <span>{item.type}</span><strong>{item.title}</strong>
              </button>
            )) : <p className="search-empty">No matching content found.</p>}
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark"><img src="/images/logo.png" alt="NCDC logo" /></span>
            <span><strong>{siteContent.shortName}</strong><small>{siteContent.name}</small></span>
          </Link>
          <p className="footer-copy">{siteContent.footerDescription}</p>
          <div className="social-row">
            <a href={socialLinks.facebook} aria-label="Facebook"><Facebook size={17}/></a>
            <a href={socialLinks.instagram} aria-label="Instagram">IG</a>
            <a href={socialLinks.youtube} aria-label="YouTube">YT</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about-us">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/success-stories">Success Stories</Link>
          <Link to="/resources">Resources</Link>
        </div>
        <div>
          <h4>Our Focus</h4>
          <Link to="/about-us#focus">Agriculture & Livelihoods</Link>
          <Link to="/about-us#focus">Health & Awareness</Link>
          <Link to="/about-us#focus">Gender & Inclusion</Link>
          <Link to="/about-us#focus">Environment & Resilience</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p><MapPin size={16}/> {siteContent.address}</p>
          <p><Phone size={16}/> <a href={`tel:${siteContent.phone.replace(/\s/g, "")}`}>{siteContent.phone}</a></p>
          <p><Mail size={16}/> <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} {siteContent.name} ({siteContent.shortName}). All rights reserved.</div>
      </div>
    </footer>
  );
}

function PageHero({ eyebrow, title, text, image = images.hero }) {
  return (
    <section className="page-hero" style={{backgroundImage:`linear-gradient(90deg, rgba(7,52,39,.9), rgba(7,52,39,.5)), url(${image})`}}>
      <div className="container">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text, center=false }) {
  return <div className={center ? "section-title center" : "section-title"}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function Home() {
  return <>
    <section className="hero" style={{backgroundImage:`linear-gradient(90deg, rgba(4,45,34,.93) 0%, rgba(4,45,34,.72) 46%, rgba(4,45,34,.15) 100%), url(${images.hero})`}}>
      <div className="container hero-content">
        <span className="eyebrow light">{siteContent.tagline}</span>
        <h1>{siteContent.heroTitle}</h1>
        <p>{siteContent.heroText}</p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">Explore Our Work <ArrowRight size={18}/></Link>
          <Link to="/about-us" className="btn btn-outline-light">Who We Are</Link>
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore <span></span></div>
    </section>

    <section className="intro section">
      <div className="container intro-grid">
        <div className="intro-image">
          <img src={images.community} alt="Community development activities" />
          <div className="floating-card"><strong>Since {siteContent.founded}</strong><span>Serving communities through holistic development</span></div>
        </div>
        <div>
          <span className="eyebrow">Welcome to NCDC</span>
          <h2>{siteContent.introTitle}</h2>
          {siteContent.introParagraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          <Link className="text-link" to="/about-us">More about NCDC <ArrowRight size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="focus section soft" id="focus">
      <div className="container">
        <SectionTitle eyebrow="What we do" title="Areas where communities can thrive" text="Our work brings practical support, knowledge and partnerships together around local priorities." center />
        <div className="focus-grid">
          {focusAreas.map((item, i) => <Focus key={i} {...item}/>) }
        </div>
      </div>
    </section>

    <section className="vision section">
      <div className="container vision-grid">
        <div>
          <span className="eyebrow">Our vision</span>
          <h2>A just and equitable society.</h2>
          <p>“{siteContent.vision}”</p>
          <Link to="/about-us" className="btn btn-dark">Our story <ArrowRight size={17}/></Link>
        </div>
        <div className="mission-box">
          <div className="icon-circle"><HandHeart/></div>
          <span className="eyebrow">Our mission</span>
          <h3>{siteContent.missionTitle}</h3>
          <p>{siteContent.missionText}</p>
        </div>
      </div>
    </section>

    <section className="projects section">
      <div className="container">
        <div className="section-head">
          <SectionTitle eyebrow="Our projects" title="Turning ideas into local action" text="A snapshot of initiatives that reflect NCDC's community-led approach." />
          <Link to="/projects" className="text-link">View all projects <ArrowRight size={17}/></Link>
        </div>
        <div className="project-grid">{projects.slice(0, 3).map((p, i) => <ProjectCard key={i} project={p}/>)}</div>
      </div>
    </section>

    <section className="impact section">
      <div className="container">
        <SectionTitle eyebrow="Our impact" title="Progress built together" text="The organization profile documents experience across agriculture, healthcare, gender equality and community development." center />
        <div className="impact-grid">{stats.map((item, i) => <Stat key={i} {...item}/>)}</div>
      </div>
    </section>

    <section className="stories section soft">
      <div className="container">
        <div className="section-head">
          <SectionTitle eyebrow="Success stories" title="People, places, progress" text="Stories can make the outcomes of community-led work visible and memorable." />
          <Link to="/success-stories" className="text-link">View stories <ArrowRight size={17}/></Link>
        </div>
        <div className="story-grid">{stories.slice(0, 3).map((s,i)=><StoryCard story={s} key={i}/>)}</div>
      </div>
    </section>

    <CTA />
  </>;
}

function Focus({icon,title,text}) {
  return <article className="focus-card"><div className="card-icon"><ContentIcon name={icon}/></div><h3>{title}</h3><p>{text}</p><span className="arrow"><ArrowRight size={17}/></span></article>;
}
function Stat({number,label,detail}) {
  return <div className="stat"><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></div>;
}
function ProjectCard({project}) {
  return <article className="project-card">
    <div className="project-img"><img src={project.image} alt={project.title} /><span>{project.status}</span></div>
    <div className="project-body">
      <div className="location"><MapPin size={14}/>{project.location}</div>
      <h3>{project.title}</h3><p>{project.text}</p>
      {project.tags?.length > 0 && <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
      <Link to="/projects" className="text-link">Learn more <ArrowRight size={16}/></Link>
    </div>
  </article>;
}
function StoryCard({story}) {
  return <article className="story-card">
    <img src={story.image} alt={story.title}/>
    <div className="story-body"><span className="eyebrow">{story.category || "Community story"}</span><h3>{story.title}</h3><p>{story.excerpt}</p><Link to="/success-stories" className="text-link">Read story <ArrowRight size={16}/></Link></div>
  </article>;
}
function CTA() {
  return <section className="cta"><div className="container cta-inner"><div><span className="eyebrow light">Work with us</span><h2>Stronger communities start with shared action.</h2><p>Connect with NCDC to learn about our work, partnerships and community initiatives.</p></div><Link to="/contact-us" className="btn btn-white">Contact NCDC <ArrowRight size={17}/></Link></div></section>;
}

function About() {
  return <>
    <PageHero eyebrow="About NCDC" title="People-led development with a focus on resilience and equity." text="Learn about NCDC's vision, mission, principles and community development approach." image={images.community}/>
    <section className="section"><div className="container two-col">
      <div><span className="eyebrow">Who we are</span><h2>Rooted in local communities.</h2><p>{siteContent.introParagraphs[0]}</p><p>{siteContent.introParagraphs[1]}</p></div>
      <div className="about-panel"><div className="mini-stat"><Leaf/><strong>{siteContent.founded}</strong><span>Established</span></div><div className="mini-stat"><Users/><strong>{team.length}</strong><span>Board members</span></div><div className="mini-stat"><HeartPulse/><strong>4</strong><span>Program focus areas</span></div><div className="mini-stat"><MapPin/><strong>Banke</strong><span>Home base in Nepal</span></div></div>
    </div></section>
    <section className="section soft"><div className="container two-col"><div className="quote-panel"><span className="eyebrow">Vision</span><h2>“{siteContent.vision}”</h2></div><div><span className="eyebrow">Mission</span><h2>Empower vulnerable groups.</h2><p>{siteContent.missionText}</p></div></div></section>
    <section className="section" id="focus"><div className="container"><SectionTitle eyebrow="Core values" title="Principles reflected in our work" text="The source profile does not provide a separately labeled list of core values. The following values are distilled from its stated mission, structure and program approach." center/><div className="values-grid">{values.map((v,i)=><Value key={i} {...v}/>)}</div></div></section>
  </>;
}
function Value({icon,title,text}) { return <div className="value-card"><div className="card-icon"><ContentIcon name={icon}/></div><h3>{title}</h3><p>{text}</p></div>; }

function Projects() {
  const featured = projects.find(p => p.featured) || projects[0];
  return <>
    <PageHero eyebrow="Our work" title="Projects that connect livelihoods, resilience and inclusion." text="Explore the project areas and activities described in NCDC's organization and project profile." image={images.farming}/>
    <section className="section"><div className="container"><SectionTitle eyebrow="Featured initiative" title={featured.title} text="An 8-month proposed program designed to strengthen climate resilience, food security and livelihoods in Rajapur Municipality."/>
      <div className="featured-project"><img src={featured.image} alt={featured.title}/><div><span className="tag">Climate resilience</span><h2>Turning riverbed land into an opportunity.</h2><p>{featured.text}</p><ul className="check-list"><li><CheckCircle2/> Riverbed vegetable farming demonstrations</li><li><CheckCircle2/> Organic compost production</li><li><CheckCircle2/> Indigenous tree planting and riverbank stabilization</li><li><CheckCircle2/> Wildlife interference reduction and awareness</li><li><CheckCircle2/> Seed capital and entrepreneurship support</li></ul></div></div>
    </div></section>
    <section className="section soft"><div className="container"><SectionTitle eyebrow="Program areas" title="A practical portfolio of community development." center/><div className="project-list">{projects.map((p,i)=><ProjectCard key={i} project={p}/>)}</div></div></section>
  </>;
}

function SuccessStories() {
  const featured = stories.find(s => s.featured) || stories[0];
  return <>
    <PageHero eyebrow="Stories" title="Small changes can create lasting momentum." text="A story-led section for documenting the people, learning and outcomes behind NCDC's work." image={images.community}/>
    <section className="section"><div className="container"><SectionTitle eyebrow="Featured stories" title="Community voices and outcomes" text="These starter stories are based on the documented activities and expected outcomes in the supplied NCDC profile."/>
      <div className="story-large"><img src={featured.image} alt={featured.title}/><div><span className="eyebrow">{featured.category || "Riverbed Farming"}</span><h2>{featured.title}</h2><p>{featured.excerpt} The project responds to limited agricultural land, gaps in modern agricultural knowledge, market challenges and the need for sustainable livelihoods.</p><div className="story-facts"><span><strong>75</strong> target households</span><span><strong>10</strong> wards</span><span><strong>8</strong> months</span></div></div></div>
      <div className="story-grid three">{stories.map((s,i)=><StoryCard story={s} key={i}/>)}</div>
    </div></section>
  </>;
}

function Resources() {
  return <>
    <PageHero eyebrow="Resources" title="Knowledge for better community action." text="A clean resource hub for profiles, project documents, publications and learning materials." image={images.crops}/>
    <section className="section"><div className="container"><SectionTitle eyebrow="Resource library" title="Documents and learning areas" text="Add downloadable files or external links in src/content.js. The layout will update automatically."/><div className="resource-grid">{resources.map((r,i)=><ResourceCard resource={r} key={i}/>)}</div></div></section>
    <section className="newsletter section soft"><div className="container newsletter-box"><div><span className="eyebrow">Stay connected</span><h2>Receive updates from NCDC.</h2><p>Newsletter integration can be connected later without changing the resource content structure.</p></div><div className="newsletter-form"><input aria-label="Email address" placeholder="Your email address"/><button className="btn btn-primary" type="button" onClick={() => alert("Newsletter signup is not connected yet. Add your mailing-service endpoint before launch.")}>Subscribe <Send size={16}/></button></div></div></section>
  </>;
}

function ResourceCard({ resource }) {
  const content = <><div className="resource-icon"><ContentIcon name={resource.type}/></div><span>{resource.category}</span><h3>{resource.title}</h3><p>{resource.description}</p><span className="text-link">{resource.file || resource.url ? "Open resource" : "Resource coming soon"} <ArrowRight size={16}/></span></>;
  if (resource.file) return <a className="resource-card" href={resource.file} target="_blank" rel="noreferrer">{content}</a>;
  if (resource.url) return <a className="resource-card" href={resource.url} target="_blank" rel="noreferrer">{content}</a>;
  return <article className="resource-card">{content}</article>;
}

function TeamCard({ person }) {
  const initials = person.name.split(" ").filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
  return <article className="team-card">
    <div className="team-avatar">{person.photo ? <img src={person.photo} alt={person.name}/> : initials}</div>
    <div className="team-info"><h3>{person.name}</h3><span>{person.role}</span></div>
  </article>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(data.get("subject") || "Website enquiry");
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${siteContent.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return <>
    <PageHero eyebrow="Contact us" title="Let's connect around community-led development." text={`Reach out to NCDC in ${siteContent.address}.`} image={images.community}/>
    <section className="section"><div className="container contact-grid">
      <div><SectionTitle eyebrow="Get in touch" title="We would be glad to hear from you." text="For partnership, project or general enquiries, use the contact details below."/><div className="contact-cards"><div><MapPin/><span><strong>Office</strong>{siteContent.address}</span></div><div><Phone/><span><strong>Phone</strong><a href={`tel:${siteContent.phone.replace(/\s/g, "")}`}>{siteContent.phone}</a></span></div><div><Mail/><span><strong>Email</strong><a href={`mailto:${siteContent.email}`}>{siteContent.email}</a></span></div></div></div>
      <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label></div><label>Subject<input name="subject" placeholder="How can we help?"/></label><label>Message<textarea name="message" rows="6" required placeholder="Write your message..."></textarea></label><button className="btn btn-primary" type="submit">Open email <Send size={17}/></button>{sent && <p className="form-note">Your email app should now open with the enquiry prepared. For server-side submissions, connect a form service/backend before launch.</p>}</form>
    </div></section>
    <section className="team-section section soft"><div className="container"><SectionTitle eyebrow="Our team" title="People behind the work." text="Meet the leadership, board members and advisors supporting NCDC's community development work." center/>
      <div className="team-heading"><div><span className="eyebrow">Leadership & Board</span><h3>Leadership and board members</h3></div><span className="team-count">{team.length} members</span></div>
      <div className="team-grid">{team.map((person, i) => <TeamCard person={person} key={i}/>)}</div>
      <div className="team-heading advisor-heading"><div><span className="eyebrow">Advisors</span><h3>Advisory team</h3></div><span className="team-count">{advisors.length} advisors</span></div>
      <div className="team-grid advisors-grid">{advisors.map((person, i) => <TeamCard person={person} key={i}/>)}</div>
    </div></section>
    <section className="map-placeholder"><div><MapPin size={35}/><h3>{siteContent.address}</h3><p>Replace this placeholder with a Google Maps or OpenStreetMap embed when the final office pin is confirmed.</p></div></section>
  </>;
}

function App() {
  return <><Header/><main><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about-us" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/success-stories" element={<SuccessStories/>}/>
    <Route path="/resources" element={<Resources/>}/>
    <Route path="/contact-us" element={<Contact/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></main><Footer/></>;
}

export default App;
