<template>
  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    <p class="lead fw-normal mb-0 me-3">{{ mode }} with</p>
    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-linkedin-in"></i>
    </button>
  </div>
  <div class="divider d-flex align-items-center my-4">
    <p class="text-center fw-bold mx-3 mb-0">Or</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  mode: string;
}>();
</script>