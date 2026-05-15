import { BreadcrumbBanner, BrandsStrip } from "../components/layout";
import { ProductOverview, ProductTabs, RelatedProducts } from "../components/productSections";

export function ProductPage({ addToCart, product, setRoute }) {
  return (
    <main>
      <BreadcrumbBanner setRoute={setRoute} />
      <ProductOverview addToCart={addToCart} product={product} setRoute={setRoute} />
      <ProductTabs />
      <RelatedProducts />
      <BrandsStrip />
    </main>
  );
}
