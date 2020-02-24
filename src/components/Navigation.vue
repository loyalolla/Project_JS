<template>
  <nav class="header__nav">
    <ul>
      <li>
        <router-link exact-active-class="active_link" to="/">Home</router-link>
      </li>
      <li>
        <router-link active-class="active_link" to="/brand">Man</router-link>
      </li>
      <li>
        <div class="dropdown">
          <router-link active-class="active_link" to="/single">Women</router-link>
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
  name: 'Navigation'
};
</script>
