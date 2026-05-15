import {
  singleBlogComments,
  singleBlogFeatureProducts,
  singleBlogCategories,
  singleBlogMeta,
  singleBlogOfferProducts,
  singleBlogRecentPosts,
  singleBlogSaleProducts,
  singleBlogTags,
  assets,
} from "../data/siteData";
import { BlogBanner, BrandsStrip, CalendarIcon, PenIcon, SearchIcon, SidebarSection } from "../components/layout";

export function BlogPage({ setRoute }) {
  return (
    <main>
      <BlogBanner setRoute={setRoute} />
      <section className="single-blog shell">
        <article className="single-blog__main">
          <img className="single-blog__hero" src={assets.blogHeroImage} alt="Woman using a smartphone at her desk" />
          <div className="single-blog__meta">
            <span><PenIcon /> {singleBlogMeta.author}</span>
            <span><CalendarIcon /> {singleBlogMeta.date}</span>
          </div>
          <h2>{singleBlogMeta.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.
            Condimentum eu malesuada vitae ultrices in adipiscing et. Consequat dignissim lacus, purus blandit magnis
            cursus tellus. Eget morbi risus imperdiet at erat pellentesque mauris at et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi diam tortor quis volutpat dolor. Convallis
            viverra, eu et vitae praesent. Suspendisse arcu urna, faucibus at commodo non, tincidunt. Viverra feugiat
            laoreet condimentum dui, integer nulla quam. Sit blandit morbi lacinia lacus.
          </p>

          <blockquote className="single-blog__quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risus.
          </blockquote>

          <div className="single-blog__gallery">
            <div className="single-blog__gallery-card single-blog__gallery-card--video">
              <img src={assets.blogFeatureLeft} alt="Woman in a hat outdoors" />
              <span className="single-blog__play">▶</span>
            </div>
            <div className="single-blog__gallery-card">
              <img src={assets.blogFeatureRight} alt="Woman standing outdoors" />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
            integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
            integer viverra.
          </p>

          <div className="single-blog__products">
            {singleBlogFeatureProducts.map((product) => (
              <article key={product.name} className="blog-product-card">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>
                    <span>{product.current}</span>
                    <del>{product.previous}</del>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
            integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
            integer viverra. Sit morbi etiam quam rhoncus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat
            integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="single-blog__share">
            <a aria-label="Facebook" href="#share">f</a>
            <a aria-label="Instagram" href="#share">i</a>
            <a aria-label="Twitter" href="#share">t</a>
          </div>

          <div className="single-blog__pager">
            <a href="#blog">← Previous Post</a>
            <div className="single-blog__dots">
              <span className="single-blog__dot" />
              <span className="single-blog__dot single-blog__dot--active" />
              <span className="single-blog__dot" />
            </div>
            <a href="#blog">Next Post →</a>
          </div>

          <div className="single-blog__comments">
            {singleBlogComments.map((comment) => (
              <article key={comment.name} className="comment-card">
                <img src={comment.image} alt={comment.name} />
                <div>
                  <div className="comment-card__head">
                    <h3>{comment.name}</h3>
                    <span>{comment.date}</span>
                  </div>
                  <p>{comment.text}</p>
                </div>
              </article>
            ))}
          </div>

          <form className="comment-form" onSubmit={(event) => event.preventDefault()}>
            <div className="comment-form__row">
              <input aria-label="Your name" placeholder="Your Name*" />
              <input aria-label="Write your email" placeholder="Write Your Email*" />
            </div>
            <textarea aria-label="Write your comment" placeholder="Write your comment*" rows={7} />
            <label className="comment-form__check">
              <input type="checkbox" />
              <span>Save my name, email, and website in this browser for the next time I comment.</span>
            </label>
            <button className="button button--primary comment-form__button" type="submit">Continue Shipping</button>
          </form>
        </article>

        <aside className="blog-sidebar">
          <SidebarSection title="Search">
            <form className="blog-sidebar__search" onSubmit={(event) => event.preventDefault()}>
              <input aria-label="Search blog" />
              <button aria-label="Search blog" type="submit">
                <SearchIcon />
              </button>
            </form>
          </SidebarSection>

          <SidebarSection title="Categories">
            <div className="category-pills">
              {singleBlogCategories.map((item, index) => (
                <button key={`${item.label}-${index}`} className={item.active ? "category-pill category-pill--active" : "category-pill"} type="button">
                  {item.label} ({item.count})
                </button>
              ))}
            </div>
          </SidebarSection>

          <SidebarSection title="Recent Post">
            <div className="sidebar-posts">
              {singleBlogRecentPosts.map((post) => (
                <article key={`${post.title}-${post.image}`} className="sidebar-post">
                  <img src={post.image} alt={post.title} />
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </SidebarSection>

          <SidebarSection title="Sale Product">
            <div className="sidebar-posts">
              {singleBlogSaleProducts.map((post) => (
                <article key={`${post.title}-${post.image}`} className="sidebar-post sidebar-post--sale">
                  <img src={post.image} alt={post.title} />
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </SidebarSection>

          <SidebarSection title="Offer product">
            <div className="offer-products">
              {singleBlogOfferProducts.map((product) => (
                <article key={product.name} className="offer-product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </article>
              ))}
            </div>
          </SidebarSection>

          <SidebarSection title="Follow">
            <div className="blog-sidebar__socials">
              <a aria-label="Facebook" href="#follow">f</a>
              <a aria-label="Instagram" href="#follow">i</a>
              <a aria-label="Twitter" href="#follow">t</a>
            </div>
          </SidebarSection>

          <SidebarSection title="Tags">
            <div className="blog-tags">
              {singleBlogTags.map((tag) => (
                <a key={tag} className={tag === "Atsanil" ? "blog-tags__item blog-tags__item--active" : "blog-tags__item"} href="#tags">
                  {tag}
                </a>
              ))}
            </div>
          </SidebarSection>
        </aside>
      </section>
      <BrandsStrip />
    </main>
  );
}
