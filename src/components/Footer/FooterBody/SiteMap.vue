<template>
  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    <h6 class="text-uppercase fw-bold">Site Map</h6>
    <hr
        class="mb-4 mt-0 d-inline-block mx-auto"
        style="width: 70px; background-color: #7c4dff; height: 2px"
    />
    <p>
      <router-link class="footer-menu-items" to="/authors">Authors</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/news">News</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/categories">Categories</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/about">About</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/contact">Contact Us</router-link>
    </p>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style>
.footer-menu-items {
  text-decoration: none;
  color: white;
}
.footer-menu-items:hover {
  color: #b3005c;
}
</style>