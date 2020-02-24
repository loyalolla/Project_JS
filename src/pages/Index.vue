<template>
  <div>
    <Page>
      <section class="slider">
        <div class="container slider-bg flex-center">
          <h1>
            <span class="title-big">THE BRAND</span>OF LUXERIOUS
            <span class="title-red">FASHION</span>
          </h1>
        </div>
      </section>

      <section>
        <div class="container category">
          <div class="category-box">
            <img src="/img/banner_1.png" alt="hOT dEAL FOR MEN" />
            <h2 class="category-box-title">
              HOT DEAL
              <span class="category-box-title-red">FOR MEN</span>
            </h2>
          </div>
          <div class="category-box">
            <img src="/img/banner_3.png" alt="LUXIROUS & trendy ACCESORIES" />
            <h2 class="category-box-title">
              LUXIROUS & trendy
              <span class="category-box-title-red">ACCESORIES</span>
            </h2>
          </div>
          <div class="category-box">
            <img src="/img/banner_2.png" alt="30% offer women" />
            <h2 class="category-box-title">
              30% offer
              <span class="category-box-title-red">women</span>
            </h2>
          </div>
          <div class="category-box">
            <img src="/img/banner_4.png" alt="new arrivals FOR kids" />
            <h2 class="category-box-title">
              new arrivals
              <span class="category-box-title-red">FOR kids</span>
            </h2>
          </div>
        </div>
      </section>

      <section class="container product">
        <h3 class="product-title">Featured Items</h3>
        <p class="product-desc">Shop for items based on what we featured in this week</p>
        <ProductItems :items="productItems" />
        <button class="btn browse-products">
          Browse All Products
          <i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </section>

      <section class="container feature cf">
        <div class="feature-title">
          <h2>
            30%
            <span class="offer">OFFER</span>
            <span class="forwomen">FOR WOMEN</span>
          </h2>
        </div>
        <div class="feature-sidebox">
          <ul class="feature-list">
            <li class="feature-list-item">
              <img src="/img/icn-bus.png" alt />
              <h3>Free Delivery</h3>
              <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </li>
            <li class="feature-list-item">
              <img src="/img/icn-proc.png" alt />
              <h3>Sales & discounts</h3>
              <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </li>
            <li class="feature-list-item">
              <img src="/img/icn-crown.png" alt />
              <h3>Quality assurance</h3>
              <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </li>
          </ul>
        </div>
      </section>
    </Page>
  </div>
</template>

<script>
import Page from "@/views/Page.vue";
import ProductItems from "@/components/ProductItems.vue";

export default {
  name: "Index",
  data: () => ({
    productItems: [
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_2.png"
      },
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_3.png"
      },
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_4.png"
      },
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_5.png"
      },
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_6.png"
      },
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_7.png"
      },
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_8.png"
      },
      {
        name: "Mango People T-shirt",
        cost: 52,
        img: "/img/Layer_9.png"
      }
    ]
  }),
  components: {
    Page,
    ProductItems
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
