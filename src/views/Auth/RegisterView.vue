<template>
  <section style="background-color: white">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0 d-flex align-items-center">
                <div class="card-body p-4 p-md-5 text-black">
                  <form>
                    <SocialAuth mode="Register"/>
                    <RegisterForm/>
                    <div class="pt-1 mb-4">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-light btn-lg btn-block" type="button">Register</button>
                    </div>
                    <p class="small fw-bold mt-2 pt-1 mb-0">Already registered?
                      <router-link class="log-in-link" to="/login">Sign in here</router-link>
                    </p>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SocialAuth from "@/components/Auth/SocialAuth.vue";
import RegisterForm from "@/components/Auth/RegisterForm.vue";
import {RouterLink} from "vue-router";
</script>
<style>
.log-in-link {
  color: #6b7f6f;
  text-decoration: none;
}
.log-in-link:hover {
  color: #232b2b;
}

.img-fluid {
  max-width: none;
}
</style>