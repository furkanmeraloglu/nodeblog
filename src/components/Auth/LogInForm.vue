<template>
  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label p-1" for="form3Example3">Email address</label>
    <input type="email" id="form3Example3" class="form-control form-control-lg"
           placeholder="Your email address"/>
  </div>

  <div data-mdb-input-init class="form-outline mb-3">
    <label class="form-label p-1" for="form3Example4">Password</label>
    <input type="password" id="form3Example4" class="form-control form-control-lg"
           placeholder="Your password"/>
  </div>
  <div class="d-flex justify-content-between align-items-center">
    <!-- Checkbox -->
    <div class="form-check mb-0">
      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3"/>
      <label class="form-check-label" for="form2Example3">
        Remember me
      </label>
    </div>
    <router-link class="register-link" to="/forgot-password">Forgot Password?</router-link>
  </div>
</template>