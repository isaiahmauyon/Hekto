import { CartBanner } from "../components/layout";

export function CartPage({ cartItems, clearCart, goToCart, setRoute, updateQuantity }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + 106;

  return (
    <main>
      <CartBanner setRoute={setRoute} />
      <section className="cart-page shell">
        <div className="cart-layout">
          <section className="cart-table">
            <div className="cart-table__head">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {cartItems.map((item) => (
              <article key={item.id} className="cart-row">
                <div className="cart-row__product">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                  </div>
                </div>
                <span className="cart-row__price">${item.price.toFixed(2)}</span>
                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)} type="button">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} type="button">+</button>
                </div>
                <span className="cart-row__total">£{(item.total * item.quantity).toFixed(2)}</span>
              </article>
            ))}

            <div className="cart-actions">
              <button className="button button--primary button--small" onClick={() => setRoute("home")}>Update Curt</button>
              <button className="button button--primary button--small" onClick={clearCart}>Clear Curt</button>
            </div>
          </section>

          <aside className="cart-sidebar">
            <section className="cart-panel">
              <h2>Cart Totals</h2>
              <div className="cart-panel__row">
                <span>Subtotals:</span>
                <strong>£{subtotal.toFixed(2)}</strong>
              </div>
              <div className="cart-panel__row">
                <span>Totals:</span>
                <strong>£{total.toFixed(2)}</strong>
              </div>
              <p className="cart-panel__note">Shipping & taxes calculated at checkout</p>
              <button className="button cart-panel__checkout">Proceed To Checkout</button>
            </section>

            <section className="cart-panel cart-panel--shipping">
              <h2>Calculate Shipping</h2>
              <label>
                <span>Country</span>
                <input defaultValue="Bangladesh" />
              </label>
              <label>
                <span>City</span>
                <input defaultValue="Mirpur Dhaka - 1200" />
              </label>
              <label>
                <span>Postal Code</span>
                <input defaultValue="1200" />
              </label>
              <button className="button button--primary button--small" onClick={goToCart}>Calculate Shipping</button>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
