import { footerColumns, assets } from "../data/siteData";
import { CalendarIcon, CartIcon, ChevronDownIcon, HeartIcon, MailIcon, PenIcon, PhoneIcon, SearchIcon, UserIcon } from "./icons";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="shell topbar__inner">
        <div className="topbar__group">
          <span className="topbar__item"><MailIcon /> mhhasanul@gmail.com</span>
          <span className="topbar__item"><PhoneIcon /> (12345)67890</span>
        </div>
        <div className="topbar__group topbar__group--actions">
          <span className="topbar__item">English <ChevronDownIcon /></span>
          <span className="topbar__item">USD <ChevronDownIcon /></span>
          <span className="topbar__item"><UserIcon /> Login</span>
          <span className="topbar__item"><HeartIcon /> Wishlist</span>
          <button className="topbar__icon-button" aria-label="Cart" type="button">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Header({ goToCart, route, setRoute }) {
  return (
    <header className="header shell">
      <button className="logo logo-button" onClick={() => setRoute("home")}>Hekto</button>
      <nav className="nav" aria-label="Primary">
        <button className={route === "home" ? "nav__link nav__link--active nav-button" : "nav__link nav-button"} onClick={() => setRoute("home")}>
          Home <ChevronDownIcon />
        </button>
        <button className="nav__link nav-button" onClick={() => setRoute("product")}>
          Pages
        </button>
        <button className={route === "product" ? "nav__link nav__link--active nav-button" : "nav__link nav-button"} onClick={() => setRoute("product")}>
          Products
        </button>
        <button className={route === "blog" ? "nav__link nav__link--active nav-button" : "nav__link nav-button"} onClick={() => setRoute("blog")}>
          Blog
        </button>
        <a className="nav__link" href="#shop">Shop</a>
        <a className="nav__link" href="#contact">Contact</a>
      </nav>
      <form className="search" onSubmit={(event) => event.preventDefault()}>
        <input aria-label="Search" placeholder="" />
        <button aria-label="Search" type="submit">
          <SearchIcon />
        </button>
      </form>
    </header>
  );
}

export function BlogBanner({ setRoute }) {
  return (
    <section className="banner">
      <img className="banner__bg" src={assets.breadcrumbBg} alt="" />
      <div className="shell banner__content">
        <h1>Single Blog</h1>
        <p>
          <button className="inline-route" onClick={() => setRoute("home")}>Home</button>
          <span>.</span>
          Pages
          <span>.</span>
          <strong>Blog</strong>
        </p>
      </div>
    </section>
  );
}

export function BreadcrumbBanner({ setRoute }) {
  return (
    <section className="banner">
      <img className="banner__bg" src={assets.breadcrumbBg} alt="" />
      <div className="shell banner__content">
        <h1>Product Details</h1>
        <p>
          <button className="inline-route" onClick={() => setRoute("home")}>Home</button>
          <span>.</span>
          Pages
          <span>.</span>
          <strong>Product Details</strong>
        </p>
      </div>
    </section>
  );
}

export function CartBanner({ setRoute }) {
  return (
    <section className="banner">
      <img className="banner__bg" src={assets.breadcrumbBg} alt="" />
      <div className="shell banner__content">
        <h1>Shopping Curt</h1>
        <p>
          <button className="inline-route" onClick={() => setRoute("home")}>Home</button>
          <span>.</span>
          Pages
          <span>.</span>
          <strong>shopping curt</strong>
        </p>
      </div>
    </section>
  );
}

export function BrandsStrip() {
  return (
    <section className="brands shell">
      <img src={assets.brandsStrip} alt="Brand partners" />
    </section>
  );
}

export function SidebarSection({ title, children }) {
  return (
    <section className="sidebar-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function Footer({ setRoute }) {
  return (
    <footer className="footer">
      <div className="shell footer__main">
        <div className="footer__brand">
          <button className="logo logo-button" onClick={() => setRoute("home")}>Hekto</button>
          <form className="footer__signup" onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Email address" placeholder="Enter Email Address" />
            <button className="button button--primary button--small" type="submit">Sign Up</button>
          </form>
          <p>Contact Info</p>
          <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer__column">
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a key={link} href="#footer">{link}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="shell footer__bottom-inner">
          <p>©Webecy - All Rights Reserved</p>
          <div className="socials">
            <a aria-label="Facebook" href="#footer">f</a>
            <a aria-label="Instagram" href="#footer">i</a>
            <a aria-label="Twitter" href="#footer">t</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { CalendarIcon, PenIcon, SearchIcon };
