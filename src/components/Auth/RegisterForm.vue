<template>
  <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
    <SocialAuth mode="Register"/>
    <div data-mdb-input-init class="form-outline mb-4">
      <label class="form-label p-1" for="form3Example3">Name</label>
      <Field type="text" name="name" class="form-control form-control-lg"
             placeholder="Your name" />
    </div>

    <div data-mdb-input-init class="form-outline mb-4">
      <label class="form-label p-1" for="form3Example3">Username</label>
      <Field type="text" name="username" class="form-control form-control-lg"
             placeholder="Your username" />
    </div>

    <div data-mdb-input-init class="form-outline mb-4">
      <label class="form-label p-1" for="form3Example3">Email address</label>
      <Field type="email" name="email" class="form-control form-control-lg"
             placeholder="Your email address" />
    </div>

    <div data-mdb-input-init class="form-outline mb-3">
      <label class="form-label p-1" for="form3Example4">Password</label>
      <Field type="password" name="password" class="form-control form-control-lg"
             placeholder="Your password" />
    </div>

    <div data-mdb-input-init class="form-outline mb-3">
      <label class="form-label p-1" for="form3Example4">Confirm Password</label>
      <Field type="password" name="confirm_password" class="form-control form-control-lg"
             placeholder="Confirm your password" />
    </div>
    <div class="pt-1 mb-4">
      <button data-mdb-button-init data-mdb-ripple-init class="submit-btn btn btn-light btn-lg btn-block" type="submit">Register</button>
    </div>
    <p class="small fw-bold mt-2 pt-1 mb-0">Already registered?
      <router-link class="log-in-link" to="/login">Sign in here</router-link>
    </p>
  </Form>
</template>
<script setup lang="ts">
import {RouterLink} from "vue-router";
import SocialAuth from "@/components/Auth/SocialAuth.vue";
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
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
.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>