<template>
  <div>
    <section class="subscribe">
      <div class="container subscribe-block">
        <div class="subscribe-block-left">
          <img src="../assets/img/avatar.png" alt="avatar" />
          <p>
            "Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum
            mattis neque sed pretium"
          </p>
          <p class="signature">
            Bin Burhan
            <span class="place">Dhaka, Bd</span>
          </p>
          <div class="scroll">
            <a class="scroll__btn" href="#" title="recommendation"></a>
            <a class="scroll__btn scroll__btn_active" href="#" title="recommendation"></a>
            <a class="scroll__btn" href="#" title="recommendation"></a>
          </div>
        </div>
        <div class="subscribe-block-right">
          <div class="box">
            <h4>
              Subscribe
              <span class="small">FOR OUR NEWLETTER AND PROMOTION</span>
            </h4>
            <form action="#">
              <input type="email" placeholder="Enter Your Email" required pattern="#" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container flex-box-up">
        <div class="footer-block">
          <a class="logo footer__logo" href="index.html">
            <img src="../assets/img/logo.png" alt="Brand" />
            <p class="logo__text">
              Bran
              <span class="logo__text_pink">d</span>
            </p>
          </a>
          <p class="footer-text">
            Objectively transition extensive data rather than cross functional solutions.
            Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an
            expanded array of processes and cross-unit partnerships.
          </p>
          <p class="footer-text">
            Efficiently plagiarize 24/365 action items and focused infomediaries.
            <br />Distinctively
            seize superior initiatives for wireless technologies. Dynamically optimize.
          </p>
        </div>
        <div class="footer-menu-block">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href>Home</a>
            </li>
            <li>
              <a href>Shop</a>
            </li>
            <li>
              <a href>About</a>
            </li>
            <li>
              <a href>How It Works</a>
            </li>
            <li>
              <a href>Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-menu-block">
          <h4>INFORMATION</h4>
          <ul>
            <li>
              <a href>Tearms & Condition</a>
            </li>
            <li>
              <a href>Privacy Policy</a>
            </li>
            <li>
              <a href>How to Buy</a>
            </li>
            <li>
              <a href>How to Sell</a>
            </li>
            <li>
              <a href>Promotion</a>
            </li>
          </ul>
        </div>
        <div class="footer-menu-block">
          <h4>SHOP CATEGORY</h4>
          <ul>
            <li>
              <a href>Men</a>
            </li>
            <li>
              <a href>Women</a>
            </li>
            <li>
              <a href>Child</a>
            </li>
            <li>
              <a href>Apparel</a>
            </li>
            <li>
              <a href>Brows All</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="lower-footer">
        <div class="container lower-footer__box">
          <p class="lower-footer-text">© 2019 Brand All Rights Reserved.</p>
          <div class="lower-footer-social">
            <div class="lower-footer-social-item">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="lower-footer-social-item">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="lower-footer-social-item">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="lower-footer-social-item">
              <i class="fab fa-pinterest-p"></i>
            </div>
            <div class="lower-footer-social-item">
              <i class="fab fa-google-plus-g"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
