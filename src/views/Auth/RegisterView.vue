<template>
  <section style="background-color: white">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0 d-flex align-items-center">
              <div class="card-body p-4 p-md-5 text-black">
                <RegisterForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import RegisterForm from "@/components/Auth/RegisterForm.vue";
</script>