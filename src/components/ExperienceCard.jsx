function ExperienceCard({ title, place, date, description }) {
  return (
    <div className="exp-card shadow-sm p-4">
      <h4 className="mb-1">{title}</h4>

      <p className="text-muted mb-1">
        {place} • {date}
      </p>

      <p className="mb-0">{description}</p>
    </div>
  );
}

export default ExperienceCard;
