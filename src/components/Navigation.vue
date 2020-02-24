<template>
<!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/brand">Man</router-link>
</div> -->
  <nav class="header__nav">
    <ul>
      <li>
        <a class="active_link" href="index.html">Home</a>
      </li>
      <li>
        <a href="brand.html">Man</a>
      </li>
      <li>
        <div class="dropdown">
          <a href="single.html">Women</a>
          <div class="mega-menu dropdown-content">
            <div class="mega-menu-row list-dropdown">
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
            </div>
            <div class="mega-menu-row list-dropdown">
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
              </ul>
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
              </ul>
            </div>
            <div class="mega-menu-row list-dropdown">
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
              </ul>
              <div class="super-sale">
                <img src="../assets/img/sale.jpg" alt="Super sale" />
                <p>Super sale!</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a href="#">Kids</a>
      </li>
      <li>
        <a href="#">Accessories</a>
      </li>
      <li>
        <a href="#">Featured</a>
      </li>
      <li>
        <a href="#">Hot Deals</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "Navigation",
};
</script>
