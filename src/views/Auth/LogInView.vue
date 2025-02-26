<template>
  <section class="d-flex justify-content-center align-items-center" style="min-height: 61vh;">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col col-md-8">
          <div class="card" style="border-radius: 1rem; width: 100%;">
            <div class="row d-flex justify-content-around align-items-center">
              <div class="col-md-6 col-lg-7 d-flex justify-content-center align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <LogInForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LogInForm from "@/components/Auth/LogInForm.vue";
</script>