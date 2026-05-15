import { galleryImages, relatedProducts } from "../data/siteData";
import { HeartIcon } from "./icons";
import { Stars } from "./shared";

export function ProductOverview({ addToCart, product, setRoute }) {
  return (
    <section className="product-section shell">
      <div className="product-card">
        <div className="product-gallery">
          <div className="product-gallery__thumbs">
            {galleryImages.map((image, index) => (
              <button key={image} className={index === 0 ? "product-gallery__thumb product-gallery__thumb--active" : "product-gallery__thumb"} type="button">
                <img src={image} alt="" />
              </button>
            ))}
          </div>
          <div className="product-gallery__hero">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-summary">
          <button className="back-home" onClick={() => setRoute("home")}>Back to Home</button>
          <h2>{product.name}</h2>
          <div className="rating-row">
            <Stars rating={product.rating} />
            <span>({product.reviews})</span>
          </div>
          <div className="price-row">
            <strong>{product.price}</strong>
            <del>{product.previousPrice}</del>
          </div>
          <p className="label">Color</p>
          <p className="product-summary__copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
            porttitor purus, et volutpat sit.
          </p>
          <div className="product-summary__actions">
            <button className="text-action" onClick={() => addToCart(product)} type="button">Add To Cart</button>
            <button className="icon-action" type="button" aria-label="Add to wishlist">
              <HeartIcon />
            </button>
          </div>
          <p className="meta-row"><strong>Categories:</strong> {product.category}</p>
          <p className="meta-row"><strong>Tags:</strong> {product.tags}</p>
          <div className="share-row">
            <span>Share</span>
            <div className="share-row__icons">
              <a href="#share" aria-label="Facebook">f</a>
              <a href="#share" aria-label="Instagram">i</a>
              <a href="#share" aria-label="Twitter">t</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductTabs() {
  return (
    <section className="info-panel">
      <div className="shell info-panel__inner">
        <div className="tab-links">
          <a className="tab-links__item tab-links__item--active" href="#description">Description</a>
          <a className="tab-links__item" href="#additional">Additional Info</a>
          <a className="tab-links__item" href="#reviews">Reviews</a>
          <a className="tab-links__item" href="#video">Video</a>
        </div>

        <div className="tab-copy" id="description">
          <h3>Varius tempor.</h3>
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
            faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
            est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
            elit, aliquet. Non varius proin sed urna, egestas consequat laoreet
            diam tincidunt.
          </p>
        </div>

        <div className="tab-copy" id="additional">
          <h3>More details</h3>
          <ul className="details-list">
            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare, nulla lobortis justo netus dis.</li>
            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</li>
            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</li>
            <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function RelatedProducts() {
  return (
    <section className="related shell">
      <h2>Related Products</h2>
      <div className="related__grid">
        {relatedProducts.map((product) => (
          <article key={product.name} className="related-card">
            <img src={product.image} alt={product.name} />
            <div className="related-card__meta">
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <Stars rating={product.rating} small />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
