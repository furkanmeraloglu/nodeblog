<template>
  <div>
    <footer
        class="text-center text-lg-start text-white"
        style="background-color: #232b2b"
    >
      <FooterSocials/>
      <FooterBody/>
      <FooterCopyright/>
    </footer>
  </div>
</template>

<script setup lang="ts">
import FooterSocials from "@/components/Footer/FooterSocials.vue";
import FooterCopyright from "@/components/Footer/FooterCopyright.vue";
import FooterBody from "@/components/Footer/FooterBody.vue";
</script>