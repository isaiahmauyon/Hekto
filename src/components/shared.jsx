export function Section({ title, className = "", children }) {
  return (
    <section className={`section-shell ${className}`}>
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      {children}
    </section>
  );
}

export function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export function PaginationDots({ count, activeIndex }) {
  return (
    <div className="pagination-dots" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className={index === activeIndex ? "pagination-dots__dot pagination-dots__dot--active" : "pagination-dots__dot"} />
      ))}
    </div>
  );
}

export function Stars({ rating, small = false }) {
  return (
    <div className={small ? "stars stars--small" : "stars"} aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < rating ? "star star--filled" : "star"}>★</span>
      ))}
    </div>
  );
}
