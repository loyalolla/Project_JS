<template>
  <div class="products__container">
    <router-link to="/cart" v-for="(item, index) in items" :key="index">
      <article class="product-box">
        <img :src="item.img" alt />
        <button>
          <img class="basket" src="/img/basket-w.svg" alt="Add to Cart" />Add to Cart
        </button>
        <p class="product-box-name">{{item.name}}</p>
        <p class="product-box-price">${{item.cost}}</p>
      </article>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductItems",
  props: {
    items: Array
  },
};
</script>
