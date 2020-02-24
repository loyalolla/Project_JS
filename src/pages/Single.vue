<template>
  <div>
    <Page>
      <section class="breadcrumb">
        <div class="container flex-box">
          <div class="breadcrumb-left">
            <h4 class="breadcrumb-name">Single page</h4>
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

      <div class="singlepage-slider">
        <div class="container sp_nav">
          <img src="../assets/img/layer-43.jpg" alt="Moschino Cheap And Chic" />

          <a class="prev" href="#">
            <i class="fas fa-chevron-left fa-2x"></i>
          </a>
          <a class="next" href="#">
            <i class="fas fa-chevron-right fa-2x"></i>
          </a>
        </div>
      </div>

      <div class="container big-product-text">
        <p class="bp-group">WOMEN COLLECTION</p>
        <div class="line"></div>
        <p class="bp-name">Moschino Cheap And Chic</p>
        <p class="bp-text">
          Compellingly actualize fully researched processes before proactive outsourcing. Progressively
          syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core
          competencies rather than exceptional portals.
        </p>
        <p class="bp-material">
          MATERIAL:
          <span>COTTON</span>
        </p>
        <p class="bp-designer">
          DESIGNER:
          <span>BINBURHAN</span>
        </p>
        <p class="bp-price">$561</p>
      </div>

      <section class="container product blocks-margin">
        <h3 class="product-title">YOU MAY LIKE ALSO</h3>
        <router-link to="/cart">
          <article class="product-box">
            <img src="../assets/img/single1.jpg" alt />
            <button>
              <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to Cart
            </button>
            <p class="product-box-name">BLAZE LEGGINGS</p>
            <p class="product-box-price">$52.00</p>
          </article>
        </router-link>
        <router-link to="/cart">
          <article class="product-box">
            <img src="../assets/img/single2.jpg" alt />
            <button>
              <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to Cart
            </button>
            <p class="product-box-name">ALEXA SWEATER</p>
            <p class="product-box-price">$52.00</p>
          </article>
        </router-link>
        <router-link to="/cart">
          <article class="product-box">
            <img src="../assets/img/single3.jpg" alt />
            <button>
              <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to Cart
            </button>
            <p class="product-box-name">AGNES TOP</p>
            <p class="product-box-price">$52.00</p>
          </article>
        </router-link>
        <router-link to="/cart">
          <article class="product-box">
            <img src="../assets/img/single4.jpg" alt />
            <button>
              <img class="basket" src="../assets/img/basket-w.svg" alt="Add to Cart" />Add to Cart
            </button>
            <p class="product-box-name">SYLVA SWEATER</p>
            <p class="product-box-price">$52.00</p>
          </article>
        </router-link>
      </section>
    </Page>
  </div>
</template>

<script>
import Page from "@/views/Page.vue";

export default {
  name: "Single",
  components: {
    Page
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
