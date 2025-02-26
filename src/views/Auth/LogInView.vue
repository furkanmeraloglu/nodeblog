<template>
  <section class="d-flex justify-content-center align-items-center" style="min-height: 61vh;">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col col-md-8">
          <div class="card" style="border-radius: 1rem; width: 100%;">
            <div class="row d-flex justify-content-around align-items-center">
              <div class="col-md-6 col-lg-7 d-flex justify-content-center align-items-center">
                <div class="card-body p-4 p-lg-5 text-black text-center">
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

.btn {
  --bs-btn-bg: #6b7f6f;
  --bs-btn-border-color: #6b7f6f;
  --bs-btn-border-hover-color: #6b7f6f;
  --bs-btn-hover-border-color: #f5f9fb;
  --bs-btn-hover-bg: #6b7f6f;
  --bs-btn-color: #ffffff;
  --bs-btn-hover-color: #232b2b;
}

.register-link {
  color: #6b7f6f;
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