import './Stats.css';

const cards = [
  {
    title: 'Submission checklist',
    body: 'On GitHub, include pictures and a video demonstration of the finished hardware project, the completed CAD model, hourly logs, and a summary of the project.',
  },
  {
    title: 'Form details',
    body: 'When you submit your finished project using Hack Club Forms on the Tinko website, include details like the Hack Club the project belongs to.',
  },
  {
    title: 'Token rewards',
    body: 'After the Tinko team approves a project, the club receives token credits added to the club bank. Redeem them for electronic parts, club goodies, and more, with the top reward being a 3D printer.',
  },
];

const Stats = () => {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <div className="section-badge">Submission & rewards</div>
          <h2 className="section-title">What to send in and what you unlock</h2>
          <p className="section-description">
            A quick reminder of what reviewers need from each submission and how your club benefits once the project is approved.
          </p>
        </div>

        <div className="stats-grid">
          {cards.map((card) => (
            <div key={card.title} className="stat-item text-card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
