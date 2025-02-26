<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<style>
main {
  background-color: #f5f9fb;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
</style>

