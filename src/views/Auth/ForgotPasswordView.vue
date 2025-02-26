<template>
  <section>
    <section class="d-flex justify-content-center align-items-center" style="min-height: 61vh;">
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col col-md-8">
            <div class="card" style="border-radius: 1rem; width: 100%;">
              <div class="row d-flex justify-content-around align-items-center">
                <div class="col-md-6 col-lg-7 d-flex justify-content-center align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <Form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit">
                      <div>
                        <h2 class="fw-bold text-center mb-4">Forgot your password?</h2>
                        <p class="text-center mb-4">Enter your email address and we'll send you a link to reset your password</p>
                      </div>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <Field type="email" name="email" class="form-control form-control-lg"
                               placeholder="Your email address"/>
                      </div>
                      <div class="text-center text-lg-start mt-4 pt-2">
                        <button data-mdb-button-init data-mdb-ripple-init class="submit-btn btn btn-light btn-lg btn-block" type="submit"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">Reset
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import {RouterLink} from "vue-router";
const schema = Yup.object().shape({
  email: Yup.string().email().required()
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
@media (min-width: 992px) {
  .text-lg-start {
    text-align: center !important;
  }
}
</style>