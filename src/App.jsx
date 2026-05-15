import { useState } from "react";
import { defaultCartItems, defaultProduct } from "./data/siteData";
import { useHashRoute } from "./hooks/useHashRoute";
import { Footer, Header, TopBar } from "./components/layout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { BlogPage } from "./pages/BlogPage";

function App() {
  const [route, setRoute] = useHashRoute();
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct);
  const [cartItems, setCartItems] = useState(defaultCartItems);

  const openProduct = (product) => {
    setSelectedProduct({
      name: product.name,
      price: product.current || product.price || defaultProduct.price,
      previousPrice: product.previous || product.previousPrice || product.price || defaultProduct.previousPrice,
      image: product.image || defaultProduct.image,
      rating: product.rating || 4,
      reviews: product.reviews || 22,
      category: product.category || "Furniture, Chair",
      tags: product.tags || "Decor, Modern",
    });
    setRoute("product");
  };

  const goToCart = () => {
    setRoute("cart");
  };

  const addToCart = (product) => {
    const parsedPrice = Number.parseFloat(String(product.price || product.current || defaultProduct.price).replace(/[^0-9.]/g, "")) || 32;
    const nextItem = {
      id: `${product.name}-${Date.now()}`,
      name: product.name,
      price: parsedPrice,
      total: 219,
      image: product.image || defaultProduct.image,
      color: "Brown",
      size: "XL",
      quantity: 1,
    };

    setCartItems((current) => [nextItem, ...current]);
    setRoute("cart");
  };

  const updateQuantity = (id, delta) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="page">
      <TopBar />
      <Header goToCart={goToCart} route={route} setRoute={setRoute} />
      {route === "product" ? (
        <ProductPage addToCart={addToCart} product={selectedProduct} setRoute={setRoute} />
      ) : route === "cart" ? (
        <CartPage cartItems={cartItems} clearCart={clearCart} goToCart={goToCart} setRoute={setRoute} updateQuantity={updateQuantity} />
      ) : route === "blog" ? (
        <BlogPage setRoute={setRoute} />
      ) : (
        <HomePage openProduct={openProduct} setRoute={setRoute} />
      )}
      <Footer setRoute={setRoute} />
    </div>
  );
}

export default App;
