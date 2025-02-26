<template>
  <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
    <SocialAuth mode="Sign In"/>
    <div data-mdb-input-init class="form-outline mb-4">
      <label class="form-label p-1" for="form3Example3">Email address</label>
      <Field type="email" name="email" class="form-control form-control-lg"
             placeholder="Your email address"/>
    </div>

    <div data-mdb-input-init class="form-outline mb-3">
      <label class="form-label p-1" for="form3Example4">Password</label>
      <Field type="password" name="password" class="form-control form-control-lg"
             placeholder="Your password"/>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <router-link class="register-link" to="/forgot-password">Forgot Password?</router-link>
    </div>
    <div class="text-center text-lg-start mt-4 pt-2">
      <button data-mdb-button-init data-mdb-ripple-init class="submit-btn btn btn-light btn-lg btn-block" type="submit"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login
      </button>
      <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
        <router-link class="register-link" to="/register">Register</router-link>
      </p>
    </div>
  </Form>
</template>
<script setup lang="ts">
import {RouterLink} from "vue-router";
import SocialAuth from "@/components/Auth/SocialAuth.vue";
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required()
});

function onSubmit(values: Record<string, number>) {
  alert(JSON.stringify(values, null, 2));
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.classList.add('disabled');
    setTimeout(() => {
      submitBtn.classList.remove('disabled');
    }, 1500);
  }
}
</script>

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

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>