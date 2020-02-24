<template>
  <div>
    <Page>
      <section class="breadcrumb">
        <div class="container flex-box">
          <div class="breadcrumb-left">
            <h4 class="breadcrumb-name">New arrivals</h4>
          </div>
          <div class="breadcrumb-right">
            <p class="breadcrumb-path">
              <router-link to="/">Home</router-link> /
              <router-link to="/brand">Man</router-link> /
              <router-link to="/brand">
                <span>New Arrivals</span>
              </router-link>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div class="container flex-box-up">
          <nav class="side-nav">
            <details class="list-dropdown">
              <summary>Category</summary>
              <ul>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Bags</a>
                </li>
                <li>
                  <a href="#">Denim</a>
                </li>
                <li>
                  <a href="#">Hoodies & Sweatshirts</a>
                </li>
                <li>
                  <a href="#">Jackets & Coats</a>
                </li>
                <li>
                  <a href="#">Pants</a>
                </li>
                <li>
                  <a href="#">Polos</a>
                </li>
                <li>
                  <a href="#">Shirts</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">Shorts</a>
                </li>
                <li>
                  <a href="#">Sweaters & Knits</a>
                </li>
                <li>
                  <a href="#">T-Shirts</a>
                </li>
                <li>
                  <a href="#">Tanks</a>
                </li>
              </ul>
            </details>
            <details class="list-dropdown">
              <summary>Brand</summary>
              <ul>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Bags</a>
                </li>
                <li>
                  <a href="#">Denim</a>
                </li>
                <li>
                  <a href="#">Hoodies & Sweatshirts</a>
                </li>
                <li>
                  <a href="#">Jackets & Coats</a>
                </li>
                <li>
                  <a href="#">Pants</a>
                </li>
                <li>
                  <a href="#">Polos</a>
                </li>
                <li>
                  <a href="#">Shirts</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">Shorts</a>
                </li>
                <li>
                  <a href="#">Sweaters & Knits</a>
                </li>
                <li>
                  <a href="#">T-Shirts</a>
                </li>
                <li>
                  <a href="#">Tanks</a>
                </li>
              </ul>
            </details>
            <details class="list-dropdown">
              <summary>Designer</summary>
              <ul>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Bags</a>
                </li>
                <li>
                  <a href="#">Denim</a>
                </li>
                <li>
                  <a href="#">Hoodies & Sweatshirts</a>
                </li>
                <li>
                  <a href="#">Jackets & Coats</a>
                </li>
                <li>
                  <a href="#">Pants</a>
                </li>
                <li>
                  <a href="#">Polos</a>
                </li>
                <li>
                  <a href="#">Shirts</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">Shorts</a>
                </li>
                <li>
                  <a href="#">Sweaters & Knits</a>
                </li>
                <li>
                  <a href="#">T-Shirts</a>
                </li>
                <li>
                  <a href="#">Tanks</a>
                </li>
              </ul>
            </details>
          </nav>

          <section class="wide-block">
            <form class="product" oninput="result.value=(range.value)" action="#">
              <fieldset>
                <legend>Trending now</legend>
                <ul>
                  <li>
                    <a href="#">Bohemian</a>
                  </li>
                  <span>|</span>
                  <li>
                    <a href="#">Floral</a>
                  </li>
                  <span>|</span>
                  <li>
                    <a href="#">Lace</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">Floral</a>
                  </li>
                  <span>|</span>
                  <li>
                    <a href="#">Lace</a>
                  </li>
                  <span>|</span>
                  <li>
                    <a href="#">Bohemian</a>
                  </li>
                </ul>
              </fieldset>
              <fieldset>
                <legend>Size</legend>
                <label class="size" for="size-xxs">
                  XXS
                  <input id="size-xxs" type="checkbox" hidden />
                  <span class="check"></span>
                </label>
                <label class="size" for="size-xs">
                  XS
                  <input id="size-xs" type="checkbox" hidden />
                  <span class="check"></span>
                </label>
                <label class="size" for="size-s">
                  S
                  <input id="size-s" type="checkbox" hidden />
                  <span class="check"></span>
                </label>
                <label class="size" for="size-m">
                  M
                  <input id="size-m" type="checkbox" hidden />
                  <span class="check"></span>
                </label>
                <label class="size" for="size-l">
                  L
                  <input id="size-l" type="checkbox" hidden />
                  <span class="check"></span>
                </label>
                <label class="size" for="size-xl">
                  XL
                  <input id="size-xl" type="checkbox" hidden />
                  <span class="check"></span>
                </label>
                <label class="size" for="size-xxl">
                  XXL
                  <input id="size-xxl" type="checkbox" hidden />
                  <span class="check"></span>
                </label>
              </fieldset>
              <fieldset>
                <legend>Price</legend>
                <input id="range" type="range" min="0" max="1000" value="0" step="10" />
                <br />
                <p class="price-range">
                  $
                  <output name="result" for="range">0</output>
                </p>
              </fieldset>
            </form>
            <div class="sort-block">
              <p>Sort by</p>
              <select name="my-sort" id="my-sort">
                <option value>Name</option>
                <option value>Price</option>
                <option value>Brand</option>
                <option value>Size</option>
              </select>
              <p>Show</p>
              <select name="my-show" id="my-show">
                <option value>6</option>
                <option value>8</option>
                <option value>9</option>
                <option value>12</option>
                <option value>15</option>
              </select>
            </div>
            <div class="product">
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product1-1.jpg" alt="product" />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product1-2.jpg" alt="product" />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">
                    Mango People T-shirt Mango People T-shirt Mango People
                    T-shirt
                  </p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>

              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product1-3.jpg" alt />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product2-1.jpg" alt="product" />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product2-2.jpg" alt="product" />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product2-3.jpg" alt="product" />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product3-1.jpg" alt="product" />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product3-2.jpg" alt="product" />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
              <router-link to="/cart">
                <article class="product-box">
                  <img src="../assets/img/product3-3.jpg" alt />
                  <button>
                    <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to
                    Cart
                  </button>
                  <p class="product-box-name">Mango People T-shirt</p>
                  <p class="product-box-price">$52.00</p>
                </article>
              </router-link>
            </div>
            <div class="bottom-wide flex-box">
              <div class="pagination">
                <a href="#">
                  <i class="fas fa-angle-left"></i>
                </a>
                <a href="#">1</a>
                <a href="#" class="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">...</a>
                <a href="#">20</a>
                <a href="#">
                  <i class="fas fa-angle-right"></i>
                </a>
              </div>
              <button class="viewall-btn">View All</button>
            </div>
          </section>
        </div>
      </section>
      <section class="featurebox">
        <div class="container flex-box-up">
          <div class="featurebox-item">
            <img src="../assets/img/icn-bus.png" alt="bus" />
            <h3>Free Delivery</h3>
            <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
          <div class="featurebox-item">
            <img src="../assets/img/icn-proc.png" alt="proc" />
            <h3>Sales & discounts</h3>
            <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
          <div class="featurebox-item">
            <img src="../assets/img/icn-crown.png" alt="crown" />
            <h3>Quality assurance</h3>
            <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>
      </section>
    </Page>
  </div>
</template>


<script>
import Page from "@/views/Page.vue";

export default {
  name: "Brand",
  components: {
    Page
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
