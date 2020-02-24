<template>
  <header class="header">
    <div class="container top-header">
      <div class="top-left-header">
        <router-link class="logo top-left-header__logo" to="/">
          <img src="../assets/img/logo.png" alt="Brand" />
          <p class="logo__text">
            Bran
            <span class="logo__text_pink">d</span>
          </p>
        </router-link>
        <div class="search-from dropdown">
          <button class="search-from__button">
            Browse
            <i class="fas fa-caret-down"></i>
          </button>
          <div class="search-from__list list-dropdown dropdown-content">
            <p class="title-dropdown">Women</p>
            <ul>
              <li>
                <a href="#">Dresses</a>
              </li>
              <li>
                <a href="#">Tops</a>
              </li>
              <li>
                <a href="#">Sweaters/Knits</a>
              </li>
              <li>
                <a href="#">Jackets/Coats</a>
              </li>
              <li>
                <a href="#">Blazers</a>
              </li>
              <li>
                <a href="#">Denim</a>
              </li>
              <li>
                <a href="#">Leggings/Pants</a>
              </li>
              <li>
                <a href="#">Skirts/Shorts</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
            <p class="title-dropdown">Men</p>
            <ul>
              <li>
                <a href="#">Tees/Tank tops</a>
              </li>
              <li>
                <a href="#">Shirts/Polos</a>
              </li>
              <li>
                <a href="#">Sweaters</a>
              </li>
              <li>
                <a href="#">Sweatshirts/Hoodies</a>
              </li>
              <li>
                <a href="#">Blazers</a>
              </li>
              <li>
                <a href="#">Jackets/vests</a>
              </li>
            </ul>
          </div>
          <input class="search-from__input" type="text" placeholder="Search for Item..." />
          <a class="search-from__icon" href="#">
            <i class="fa fa-search"></i>
          </a>
        </div>
      </div>

      <div class="top-right-header">
        <div class="dropdown">
          <router-link to="/cart" class="dropbtn">
            <img class="basket" src="../assets/img/basket.svg" alt="My Basket" />
          </router-link>
          <div class="cart__items-count">2</div>
          <div class="cart dropdown-content">
            <div class="goods cf">
              <img src="../assets/img/layer-44.jpg" alt="Rebox Zane" />
              <div class="info">
                <router-link to="/single">
                  <p class="name">Rebox Zane</p>
                </router-link>
                <div class="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
                <p class="price">1 x $250</p>
              </div>
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </div>
            <div class="goods cf">
              <img src="../assets/img/layer-45.jpg" alt="Rebox Zane" />
              <div class="info">
                <router-link to="/brand">
                  <p class="name">Rebox Zane</p>
                </router-link>
                <div class="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
                <p class="price">1 x $250</p>
              </div>
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </div>
            <p class="total cf">
              TOTAL
              <span>$500.00</span>
            </p>
            <router-link to="/checkout">
              <button type="submit">Checkout</button>
            </router-link>
            <router-link to="/cart">
              <button type="submit">go to cart</button>
            </router-link>
          </div>
        </div>
        <button class="btn my_acc">
          My Account
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    </div>

    <Navigation />
  </header>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: 'Header',
  components: {
    Navigation
  }
};
</script>
