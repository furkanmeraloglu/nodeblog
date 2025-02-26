<template>
  <section style="background-color: white">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0 d-flex align-items-center">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="@public/images/register.png"
                     alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <SocialAuth mode="Register"/>
                    <RegisterForm/>
                    <div class="pt-1 mb-4">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-light btn-lg btn-block" type="button">Register</button>
                    </div>
                    <p class="mb-5 pb-lg-2" style="color: #393f81;">
                      Already registered?
                      <router-link class="log-in-link" to="/login">Sign in here</router-link>
                    </p>
                  </form>
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
import SocialAuth from "@/components/Auth/SocialAuth.vue";
import RegisterForm from "@/components/Auth/RegisterForm.vue";
import {RouterLink} from "vue-router";
</script>
<style>
.log-in-link {
  color: #ed0080;
  text-decoration: none;
}
.log-in-link:hover {
  color: #232b2b;
}

.img-fluid {
  max-width: none;
}
</style>