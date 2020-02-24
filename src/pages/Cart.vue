<template>
  <div>
    <Page>
      <section class="breadcrumb">
        <div class="container flex-box">
          <div class="breadcrumb-left">
            <h4 class="breadcrumb-name">Shopping cart</h4>
          </div>
          <div class="breadcrumb-right">
            <p class="breadcrumb-path">
              <a href="index.html">Home</a> /
              <a href="checkout.html">
                <span>Checkout</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <div class="page-cart container">
        <header class="cart-header">
          <div class="cart-column cart-header__main">Product details</div>
          <div class="cart-column cart-header__price">Unite Price</div>
          <div class="cart-column cart-header__quantity">Quantity</div>
          <div class="cart-column cart-header__shipping">Shipping</div>
          <div class="cart-column cart-header__subtotal">Subtotal</div>
          <div class="cart-column cart-header__action">Action</div>
        </header>
        <article class="cart-product">
          <div class="cart-column cart-product__main">
            <a class="cart-image" href="single.html">
              <img src="../assets/img/123.jpg" title="Mango people t-shirt" alt="Mango people t-shirt" />
            </a>
            <div class="cart-product__details">
              <a class="cart-product__title" href="single.html">
                <h2>Mango people t-shirt</h2>
              </a>
              <div class="cart-product__attr">
                Color:
                <a href="#">Red</a>
              </div>
              <div class="cart-product__attr">
                Size:
                <a href="#">XXL</a>
              </div>
            </div>
          </div>
          <div class="cart-column cart-product__price">
            <span class="currency">150</span>
          </div>
          <div class="cart-column cart-product__quantity">
            <input type="number" value="2" />
          </div>
          <div class="cart-column cart-product__shipping text-uppercase">Free</div>
          <div class="cart-column cart-product__subtotal">
            <span class="currency">300</span>
          </div>
          <div class="cart-column cart-product__action">
            <a class="cart-item__delete" href="#item-delete">
              <i class="fa fa-times-circle"></i>
            </a>
          </div>
        </article>
        <article class="cart-product">
          <div class="cart-column cart-product__main">
            <a class="cart-image" href="single.html">
              <img src="../assets/img/product1-2.jpg" title="Mango people t-shirt" alt="Mango people t-shirt" />
            </a>
            <div class="cart-product__details">
              <a class="cart-product__title" href="single.html">
                <h2>Mango people t-shirt</h2>
              </a>
              <div class="cart-product__attr">
                Color:
                <a href="#">Red</a>
              </div>
              <div class="cart-product__attr">
                Size:
                <a href="#">XXL</a>
              </div>
            </div>
          </div>
          <div class="cart-column cart-product__price">
            <span class="currency">150</span>
          </div>
          <div class="cart-column cart-product__quantity">
            <input type="number" value="2" />
          </div>
          <div class="cart-column cart-product__shipping text-uppercase">Free</div>
          <div class="cart-column cart-product__subtotal">
            <span class="currency">300</span>
          </div>
          <div class="cart-column cart-product__action">
            <a class="cart-item__delete" href="#item-delete">
              <i class="fa fa-times-circle"></i>
            </a>
          </div>
        </article>
        <article class="cart-product">
          <div class="cart-column cart-product__main">
            <a class="cart-image" href="single.html">
              <img src="../assets/img/product1-3.jpg" title="Mango people t-shirt" alt="Mango people t-shirt" />
            </a>
            <div class="cart-product__details">
              <a class="cart-product__title" href="single.html">
                <h2>Mango people t-shirt</h2>
              </a>
              <div class="cart-product__attr">
                Color:
                <a href="#">Red</a>
              </div>
              <div class="cart-product__attr">
                Size:
                <a href="#">XXL</a>
              </div>
            </div>
          </div>
          <div class="cart-column cart-product__price">
            <span class="currency">150</span>
          </div>
          <div class="cart-column cart-product__quantity">
            <input type="number" value="2" />
          </div>
          <div class="cart-column cart-product__shipping text-uppercase">Free</div>
          <div class="cart-column cart-product__subtotal">
            <span class="currency">300</span>
          </div>
          <div class="cart-column cart-product__action">
            <a class="cart-item__delete" href="#item-delete">
              <i class="fa fa-times-circle"></i>
            </a>
          </div>
        </article>
        <footer class="cart-footer">
          <a class="button-second" href="#">CLEAR SHOPPING CART</a>
          <a class="button-second" href="products.html">CONTINUE sHOPPING</a>
        </footer>
      </div>
      <aside class="cart-blocks container">
        <section class="cart-block cart-block__shipping-address">
          <h2 class="cart-block__title">Shipping Address</h2>
          <div class="select select-dropdown">
            Bangladesh
            <ul class="options">
              <li>USA</li>
              <li>Russia</li>
              <li>France</li>
              <li>Germany</li>
            </ul>
          </div>
          <input class="select" placeholder="State" />
          <input class="select" placeholder="Postcode/Zip" />
          <a class="button-second button-second--small" href="#">
            Get a
            Quote
          </a>
        </section>
        <section class="cart-block cart-block__discount">
          <h2 class="cart-block__title">coupon discount</h2>
          <div class="cart-block__subtitle">Enter your coupon code if you have one</div>
          <input class="select" placeholder="Coupon" />
          <a class="button-second button-second--small" href="#">Apply coupon</a>
        </section>
        <section class="cart-block cart-block__total">
          <div class="cart-total__sub">
            Sub total
            <span class="currency">900</span>
          </div>
          <h2 class="cart-total__grand">
            GRAND TOTAL
            <span class="currency">900</span>
          </h2>
          <hr />
          <a class="button-main button-main--cart" href="checkout.html">Proceed to checkout</a>
        </section>
      </aside>
    </Page>
  </div>
</template>

<script>
import Page from "@/views/Page.vue";

export default {
  name: "Cart",
  components: {
    Page
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
