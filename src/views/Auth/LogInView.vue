<template>
  <section class="d-flex justify-content-center align-items-center" style="min-height: 57vh;">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0 d-flex align-items-center">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="@public/images/sign-in.png"
                     class="img-fluid log-in-image" alt="Sign In Image" style="border-radius: 1rem 0 0 1rem;">
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <SocialAuth mode="Sign In"/>
                    <LogInForm/>
                    <div class="text-center text-lg-start mt-4 pt-2">
                      <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
                              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login
                      </button>
                      <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                        <router-link class="register-link" to="/register">Register</router-link>
                      </p>
                    </div>
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

<style>

.log-in-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 0.8), black);
}

.btn {
  --bs-btn-bg: #ed0080;
  --bs-btn-border-color: #ed0080;
  --bs-btn-border-hover-color: #ed0080;
  --bs-btn-hover-border-color: #f5f9fb;
  --bs-btn-hover-bg: #b3005c;
  --bs-btn-color: #ffffff;
  --bs-btn-hover-color: #232b2b;
}

.register-link {
  color: #ed0080;
  text-decoration: none;
}

.register-link:hover {
  color: #232b2b;
}

</style>
<script setup lang="ts">
import SocialAuth from "@/components/Auth/SocialAuth.vue";
import LogInForm from "@/components/Auth/LogInForm.vue";
import {RouterLink} from "vue-router";
</script>