'use client';

import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { projects, stages } from './curriculum';

const storageKey = 'galtech-ai-roadmap-v1';
const total = stages.reduce((count, stage) => count + stage.topics.length, 0);
const paths = {
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18',
  spark: 'M12 2c1.4 6 4 8.6 10 10-6 1.4-8.6 4-10 10-1.4-6-4-8.6-10-10 6-1.4 8.6-4 10-10Z',
  terminal: 'M3 5h18v14H3zM7 9l3 3-3 3m6 0h4',
  layers: 'm12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5',
  route: 'M6 4v16m12-16v5c0 4-3 6-7 6H6m0-11h.01M18 4h.01M6 20h.01',
  check: 'm5 12 4 4L19 6',
  search: 'm16 16 4 4M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
  close: 'm6 6 12 12M6 18 18 6',
  map: 'm3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Zm6-2v16m6-14v16',
};

function Icon({ name, size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}

export default function Roadmap() {
  const [completed, setCompleted] = useState([]);
  const [view, setView] = useState('roadmap');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (Array.isArray(saved)) {
        const valid = stages.flatMap(stage => stage.topics.map(([title]) => title));
        setCompleted(valid.filter(title => saved.includes(title)));
      }
    } catch {}
  }, []);

  function openTopic(topic, stage) {
    flushSync(() => setSelected({ topic, stage }));
    dialog.current.showModal();
  }

  function toggleTopic(title) {
    const next = completed.includes(title) ? completed.filter(item => item !== title) : [...completed, title];
    setCompleted(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
  }

  const search = query.trim().toLowerCase();
  const visible = stages.map((stage, index) => ({
    ...stage, index,
    topics: stage.topics.filter(([title]) => (stage.title + ' ' + title).toLowerCase().includes(search)),
  })).filter(stage => stage.topics.length);
  const percent = Math.round(completed.length * 100 / total);

  return <section className="shell roadmap" id="roadmap" aria-labelledby="roadmap-heading">
    <div className="roadmap-head"><div><div className="eyebrow">THE LEARNING PATH</div><h2 id="roadmap-heading">Your route into AI engineering</h2></div><span className="count">{stages.length} stages <b>·</b> {total} topics</span></div>
    <div className="controls">
      <div className="switch" aria-label="Learning path view">
        <button aria-pressed={view === 'roadmap'} onClick={() => setView('roadmap')}><Icon name="map" size={17}/> Roadmap</button>
        <button aria-pressed={view === 'projects'} onClick={() => setView('projects')}><Icon name="layers" size={17}/> Projects</button>
      </div>
      <div className="progress"><div><strong>Your progress</strong><span aria-live="polite">{completed.length}/{total} completed</span></div><progress aria-label="Completed topics" value={completed.length} max={total}>{percent}%</progress></div>
    </div>
    {view === 'roadmap' ? <div className="canvas">
      <div className="canvas-tools"><p><span className="live-dot"/> Select a topic to get started</p><label className="search"><Icon name="search" size={17}/><input type="search" aria-label="Find a topic" placeholder="Find a topic…" value={query} onChange={event => setQuery(event.target.value)}/></label></div>
      {visible.length ? <ol className="track">{visible.map(stage => <li className="stage" key={stage.title}>
        <div className="step">{String(stage.index + 1).padStart(2, '0')}</div>
        <article className="stage-card">
          <div className="stage-heading"><div className="stage-icon"><Icon name={stage.icon}/></div><div><h3>{stage.title}</h3><p>{stage.intro}</p></div></div>
          <div className="topics">{stage.topics.map(topic => <button key={topic[0]} className={completed.includes(topic[0]) ? 'topic done' : 'topic'} onClick={() => openTopic(topic, stage.title)}><span className="topic-status">{completed.includes(topic[0]) && <><Icon name="check" size={12}/><span className="sr-only">Completed </span></>}</span>{topic[0]} <span className="topic-arrow" aria-hidden="true">↗</span></button>)}</div>
        </article>
      </li>)}</ol> : <p className="no-results" role="status">No topics match “{query}”. <button onClick={() => setQuery('')}>Clear search</button></p>}
    </div> : <div className="projects">{projects.map(([number, title, description, skills]) => <article key={number}><span className="eyebrow">PROJECT {number}</span><h3>{title}</h3><p>{description}</p><small>{skills}</small></article>)}</div>}
    <dialog ref={dialog} aria-labelledby="topic-title">
      {selected && <div className="topic-detail">
        <div className="dialog-top"><span className="eyebrow">{selected.stage}</span><button className="icon-button" aria-label="Close topic" onClick={() => dialog.current.close()}><Icon name="close" /></button></div>
        <h2 id="topic-title">{selected.topic[0]}</h2><h3>Try it yourself</h3><p>{selected.topic[1]}</p>
        <div className="dialog-actions"><button className="button red" onClick={() => toggleTopic(selected.topic[0])}>{completed.includes(selected.topic[0]) ? 'Mark as incomplete' : 'Mark as complete'}</button><a className="text-link" href={selected.topic[2]} target="_blank" rel="noreferrer">Read the guide ↗</a></div>
      </div>}
    </dialog>
  </section>;
}
