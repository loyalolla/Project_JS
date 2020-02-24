<template>
  <div>
    <Page>
      <section class="breadcrumb">
        <div class="container flex-box">
          <div class="breadcrumb-left">
            <h4 class="breadcrumb-name">Checkout</h4>
          </div>
          <div class="breadcrumb-right">
            <p class="breadcrumb-path">
              <router-link to="/index">Home</router-link>/
              <router-link to="/checkout">
                <span>Checkout</span>
              </router-link>
            </p>
          </div>
        </div>
      </section>

      <section class="checkout">
        <div class="container checkout-menu">
          <details class="checkout-menu__details">
            <summary>01. &nbsp; Shipping Adress</summary>
            <div class="checkout-register">
              <form action="#">
                <p>Check as a guest or register</p>
                <span>Register with us for future convenience</span>
                <label>
                  <input name="register-type" type="radio" />
                  checkout as guest
                </label>
                <label class="register">
                  <input name="register-type" type="radio" checked />
                  register
                </label>
                <p>register and save time!</p>
                <span>Register with us for future convenience</span>
                <span class="fast">
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  Fast and easy checkout
                </span>
                <span>
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  Easy access to your order history and status
                </span>
                <div class="black_button">
                  <input type="submit" value="Continue" />
                </div>
              </form>
              <form action="#">
                <p>Already registed?</p>
                <span class="log">Please log in below</span>
                <p class="input">
                  EMAIL ADDRESS
                  <span class="red">*</span>
                </p>
                <input type="email" />
                <p class="input">
                  PASSWORD
                  <span class="red">*</span>
                </p>
                <input type="password" />
                <p>
                  <span class="red">* Required Fileds</span>
                </p>
                <div class="black_button">
                  <input type="submit" value="Log in" />
                </div>
                <a href="#" class="forgot">Forgot Password ?</a>
              </form>
            </div>
          </details>
          <hr />
          <details class="checkout-menu__details">
            <summary>02. &nbsp; BILLING INFORMATION</summary>
            <div class="checkout-register"></div>
          </details>
          <hr />
          <details class="checkout-menu__details">
            <summary>03. &nbsp; SHIPPING INFORMATION</summary>
            <div class="checkout-register"></div>
          </details>
          <hr />
          <details class="checkout-menu__details">
            <summary>04. &nbsp; SHIPPING METHOD</summary>
            <div class="checkout-register"></div>
          </details>
          <hr />
          <details class="checkout-menu__details">
            <summary>05. &nbsp; PAYMENT METHOD</summary>
            <div class="checkout-register"></div>
          </details>
          <hr />
          <details class="checkout-menu__details">
            <summary>06. &nbsp; ORDER REVIEW</summary>
            <div class="checkout-register"></div>
          </details>
          <hr />
        </div>
      </section>
    </Page>
  </div>
</template>

<script>
import Page from "@/views/Page.vue";

export default {
  name: 'Checkout',
  components: {
    Page
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
