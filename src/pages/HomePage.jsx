import {
  blogPosts,
  categoryProducts,
  featuredProducts,
  latestProducts,
  offers,
  sideProducts,
  trendingProducts,
  assets,
} from "../data/siteData";
import {
  BlogCard,
  CategoryCard,
  DiscountSection,
  FeatureStrip,
  FeaturedCard,
  HeroSection,
  LatestProductCard,
  NewsletterBanner,
  OfferCard,
  PromoBanner,
  SideProductCard,
  TrendingCard,
} from "../components/homeSections";
import { PaginationDots, Section, SectionTitle } from "../components/shared";

export function HomePage({ openProduct, setRoute }) {
  return (
    <main>
      <HeroSection setRoute={setRoute} />

      <Section title="Featured Products">
        <div className="featured-grid">
          {featuredProducts.map((product, index) => (
            <FeaturedCard
              key={product.code}
              product={product}
              showActions={index === 0}
              onOpenProduct={openProduct}
            />
          ))}
        </div>
        <PaginationDots count={4} activeIndex={1} />
      </Section>

      <Section title="Leatest Products">
        <div className="section-tabs">
          <button className="tab tab--active">New Arrival</button>
          <button className="tab">Best Seller</button>
          <button className="tab">Featured</button>
          <button className="tab">Special Offer</button>
        </div>
        <div className="latest-grid">
          {latestProducts.map((product) => (
            <LatestProductCard key={`${product.name}-${product.current}`} onOpenProduct={openProduct} product={product} />
          ))}
        </div>
      </Section>

      <Section title="What Shopex Offer!">
        <div className="offer-grid">
          {offers.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>
      </Section>

      <FeatureStrip />

      <Section className="promo-stack">
        <div className="promo-row">
          <PromoBanner tone="pink" title="23% off in all products" action="Shop Now" image={assets.promoClock} />
          <PromoBanner tone="lavender" title="23% off in all products" action="View Collection" image={assets.promoConsole} />
        </div>

        <div className="trending-layout">
          <div className="trending-main">
            <SectionTitle>Trending Products</SectionTitle>
            <div className="trending-grid">
              {trendingProducts.map((product) => (
                <TrendingCard key={`${product.name}-${product.current}`} onOpenProduct={openProduct} product={product} />
              ))}
            </div>
          </div>

          <aside className="trending-side-list">
            {sideProducts.map((product) => (
              <SideProductCard key={product.name} onOpenProduct={openProduct} product={product} />
            ))}
          </aside>
        </div>
      </Section>

      <Section title="Discount Item">
        <div className="section-tabs section-tabs--compact">
          <button className="tab tab--active">Wood Chair</button>
          <button className="tab">Plastic Chair</button>
          <button className="tab">Sofa Collection</button>
        </div>
        <DiscountSection />
      </Section>

      <Section title="Top Categories">
        <div className="category-grid">
          {categoryProducts.map((product) => (
            <CategoryCard key={product.name} onOpenProduct={openProduct} product={product} />
          ))}
        </div>
        <PaginationDots count={4} activeIndex={1} />
      </Section>

      <NewsletterBanner />

      <section className="brand-strip section-shell">
        <div className="brand-strip__track">
          <span>olympia</span>
          <span>studioluxe</span>
          <span>urbanform</span>
          <span>furnitech</span>
          <span>hektodesign</span>
        </div>
      </section>

      <Section title="Leatest Blog">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={`${post.author}-${post.image}`} post={post} setRoute={setRoute} />
          ))}
        </div>
      </Section>
    </main>
  );
}
