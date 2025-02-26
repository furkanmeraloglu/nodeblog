<template>
  <div>
    <footer
        class="text-center text-lg-start text-white pt-3"
        style="background-color: #6b7f6f"
    >
      <FooterBody/>
      <FooterCopyright/>
    </footer>
  </div>
</template>

<script setup lang="ts">
import FooterCopyright from "@/components/Footer/FooterCopyright.vue";
import FooterBody from "@/components/Footer/FooterBody.vue";
</script>

<style>
footer {
  font-weight: 700;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>