<template>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-5">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <p>
            NodeBlog is a product developed by Bay Software which provides the latest news and updates on technology, business, and
            lifestyle. Become a writer and share your knowledge with the world.
          </p>
          <div>
            <a href="" class="text-white me-4 social-icons">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4 social-icons">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4 social-icons">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4 social-icons">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4 social-icons">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="text-white me-4 social-icons">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div class="footer-logo-container">
            <a class="text-white nodeblog-logo" href="https://baysoftware.com/" target="_blank">
              <img src="@public/images/nodeblog-logo.png" alt="Bay Software Logo">
            </a>
            <a class="text-white bay-software-logo" href="https://baysoftware.com/" target="_blank">
              <img src="@public/images/bay-software.png" alt="Bay Software Logo">
            </a>
          </div>
        </div>
        <UsefulLinks/>
        <SiteMap/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SiteMap from "@/components/Footer/FooterBody/SiteMap.vue";
import UsefulLinks from "@/components/Footer/FooterBody/UsefulLinks.vue";
</script>

<style>

.nodeblog-logo img {
  width: 100px;
  height: 40px;
}

.footer-logo-container img {
  margin-top: 20px;
  margin-left: -10px;
}

@media (max-width: 768px) {
  .footer-logo-container img {
    margin-left: 4px;
  }
}

.footer-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

@media (min-width: 768px) and (max-width: 991px) {
  .footer-logo-container img, .social-icons i {
    display: none;
  }
}

.social-icons i:hover {
  color: #203423;
}
</style>