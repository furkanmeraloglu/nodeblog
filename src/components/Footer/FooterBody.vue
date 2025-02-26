<template>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <img class="footer-logo mb-3" src="@public/images/node-blog-logo.png" alt="Bay Software Logo">
          <p>
            NodeBlog is a product developed by Bay Software which provides the latest news and updates on technology, business, and
            lifestyle. Become a writer and share your knowledge with the world.
          </p>
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

.footer-logo {
  width: 100px;
  height: 100px;
}
</style>