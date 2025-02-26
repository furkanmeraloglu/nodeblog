<template>
  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    <!-- Links -->
    <h6 class="text-uppercase fw-bold">Useful links</h6>
    <hr
        class="mb-4 mt-0 d-inline-block mx-auto"
        style="width: 60px; background-color: #7c4dff; height: 2px"
    />
    <p>
      <router-link class="footer-menu-items" to="/register">Become a Writer</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/featured-articles">Discover Featured Articles</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/trending-subjects">Trending Subjects</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/get-help">Get Help</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/terms-of-use">Terms of Use</router-link>
    </p>
    <p>
      <router-link class="footer-menu-items" to="/privacy-policy">Privacy Policy</router-link>
    </p>
  </div>
</template>
<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>