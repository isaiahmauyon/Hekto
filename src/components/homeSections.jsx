import { assets } from "../data/siteData";
import { PaginationDots } from "./shared";
import { CalendarIcon, CartIcon, CheckIcon, HeartIcon, PenIcon, SearchPlusIcon } from "./icons";

export function HeroSection({ setRoute }) {
  return (
    <section className="hero">
      <div className="shell hero__inner">
        <div className="hero__lamp">
          <img src={assets.heroLamp} alt="" />
        </div>
        <div className="hero__content">
          <p className="eyebrow">Best Furniture For Your Castle....</p>
          <h1>New Furniture Collection Trends in 2020</h1>
          <p className="hero__copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
          <button className="button button--primary" onClick={() => setRoute("product")}>Shop Now</button>
        </div>
        <div className="hero__visual">
          <div className="hero__halo hero__halo--outer" />
          <div className="hero__halo hero__halo--inner" />
          <img src={assets.heroChair} alt="Pink velvet accent chair" />
          <div className="hero__badge">50% off</div>
        </div>
      </div>
      <div className="hero__dot" />
      <PaginationDots count={3} activeIndex={0} />
    </section>
  );
}

export function FeaturedCard({ product, showActions, onOpenProduct }) {
  return (
    <article className={`featured-card ${product.accent || ""}`}>
      <div className="featured-card__media">
        {showActions ? (
          <div className="featured-card__actions">
            <button aria-label="Add to cart"><CartIcon /></button>
            <button aria-label="Add to wishlist"><HeartIcon /></button>
            <button aria-label="Preview product"><SearchPlusIcon /></button>
          </div>
        ) : null}
        <img src={product.image} alt={product.name} />
        {showActions ? <button className="button button--green button--small" onClick={() => onOpenProduct(product)}>View Details</button> : null}
      </div>
      <button className="card-reset featured-card__body" onClick={() => onOpenProduct(product)}>
        <h3>{product.name}</h3>
        <div className="swatches">
          <span className="swatch swatch--mint" />
          <span className="swatch swatch--pink" />
          <span className="swatch swatch--navy" />
        </div>
        <p>Code - {product.code}</p>
        <strong>{product.price}</strong>
      </button>
    </article>
  );
}

export function LatestProductCard({ onOpenProduct, product }) {
  return (
    <button className="card-reset latest-card" onClick={() => onOpenProduct(product)}>
      <div className="latest-card__media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="latest-card__body">
        <h3>{product.name}</h3>
        <div className="latest-card__prices">
          <span>{product.current}</span>
          <del>{product.previous}</del>
        </div>
      </div>
    </button>
  );
}

export function OfferCard({ offer }) {
  return (
    <article className="offer-card">
      <div className={`offer-card__icon offer-card__icon--${offer.icon}`}>
        <OfferGlyph type={offer.icon} />
      </div>
      <h3>{offer.title}</h3>
      <p>{offer.text}</p>
    </article>
  );
}

export function FeatureStrip() {
  return (
    <section className="feature-strip">
      <div className="shell feature-strip__inner">
        <div className="feature-strip__visual">
          <div className="feature-strip__circle" />
          <img src={assets.featureChair} alt="Blue lounge chair" />
        </div>
        <div className="feature-strip__content">
          <h2>Unique Features Of leatest & Trending Products</h2>
          <ul className="feature-list">
            <li><span className="feature-dot feature-dot--pink" />All frames constructed with hardwood solids and laminates</li>
            <li><span className="feature-dot feature-dot--blue" />Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
            <li><span className="feature-dot feature-dot--mint" />Arms, backs and seats are structurally reinforced</li>
          </ul>
          <div className="feature-strip__cta">
            <button className="button button--primary">Add To Cart</button>
            <div>
              <p>B&amp;B Italian Sofa</p>
              <span>$32.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PromoBanner({ tone, title, action, image }) {
  return (
    <article className={`promo-banner promo-banner--${tone}`}>
      <div>
        <h3>{title}</h3>
        <a href="#shop">{action}</a>
      </div>
      <img src={image} alt="" />
    </article>
  );
}

export function TrendingCard({ onOpenProduct, product }) {
  return (
    <button className="card-reset trending-card" onClick={() => onOpenProduct(product)}>
      <div className="trending-card__media">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <div className="trending-card__prices">
        <span>{product.current}</span>
        <del>{product.previous}</del>
      </div>
    </button>
  );
}

export function SideProductCard({ onOpenProduct, product }) {
  return (
    <button className="card-reset side-product" onClick={() => onOpenProduct(product)}>
      <div className="side-product__media">
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <del>{product.price}</del>
      </div>
    </button>
  );
}

export function DiscountSection() {
  return (
    <div className="discount">
      <div className="discount__content">
        <h3>20% Discount Of All Products</h3>
        <p className="discount__eyebrow">Eams Sofa Compact</p>
        <p className="discount__copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat
          habitasse nec, bibendum condimentum.
        </p>
        <div className="discount__list">
          <p><CheckIcon /> Material expose like metals</p>
          <p><CheckIcon /> Clear lines and geomatric figures</p>
          <p><CheckIcon /> Simple neutral colours.</p>
          <p><CheckIcon /> Material expose like metals</p>
        </div>
        <button className="button button--primary">Shop Now</button>
      </div>
      <div className="discount__visual">
        <div className="discount__circle" />
        <img src={assets.discountChair} alt="Modern swivel accent chair" />
      </div>
    </div>
  );
}

export function CategoryCard({ onOpenProduct, product }) {
  return (
    <article className={`category-card ${product.active ? "category-card--active" : ""}`}>
      <div className="category-card__ring" />
      <button className="card-reset category-card__media" onClick={() => onOpenProduct(product)}>
        <img src={product.image} alt={product.name} />
        {product.active ? <span className="button button--green button--small">View Shop</span> : null}
      </button>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </article>
  );
}

export function NewsletterBanner() {
  return (
    <section className="newsletter">
      <img className="newsletter__bg" src={assets.newsletterBackground} alt="" />
      <div className="newsletter__overlay">
        <h2>Get Leatest Update By Subscribe 0ur Newslater</h2>
        <button className="button button--primary">Shop Now</button>
      </div>
    </section>
  );
}

export function BlogCard({ post, setRoute }) {
  return (
    <article className="blog-card">
      <img className="blog-card__image" src={post.image} alt={post.title} />
      <div className="blog-card__meta">
        <span><PenIcon /> {post.author}</span>
        <span><CalendarIcon /> {post.date}</span>
      </div>
      <h3 className={post.highlight ? "blog-card__title blog-card__title--accent" : "blog-card__title"}>
        {post.title}
      </h3>
      <p>
        More off this less hello samlande lied much over tightly circa horse
        taped mightly
      </p>
      <button className={post.highlight ? "blog-card__link blog-card__link--accent nav-button" : "blog-card__link nav-button"} onClick={() => setRoute("blog")}>
        Read More
      </button>
    </article>
  );
}

function OfferGlyph({ type }) {
  const glyphMap = {
    support: "24",
    cashback: "$",
    quality: "Q",
    delivery: "D",
  };

  return <span className="offer-glyph">{glyphMap[type] || "H"}</span>;
}
