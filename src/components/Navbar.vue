<template>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-xxl flex-wrap flex-md-nowrap">
          <router-link class="navbar-brand" to="/home">
            <img src="../../public/images/nodeblog-logo.png" alt="Node Blog Logo" class="d-inline-block align-top">
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'nav-link-active': isActive('/authors') }" to="/authors">Authors</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'nav-link-active': isActive('/news') }" to="/news">News</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'nav-link-active': isActive('/categories') }" to="/categories">Categories</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'nav-link-active': isActive('/about') }" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="{ 'nav-link-active': isActive('/contact') }" to="/contact">Contact Us</router-link>
              </li>
            </ul>
            <div class="dropdown user-avatar">
              <a class="nav-link dropdown-toggle" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="@public/images/user-avatar.png" alt="User Avatar" class="rounded-circle">
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="nav-link" to="/profile">My Profile</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/my-articles">My Articles</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/liked-articles">Liked Articles</router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <router-link class="nav-link" to="/profile">Log Out</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </template>

    <script setup lang="ts">
    import { RouterLink, useRoute } from "vue-router";
    const route = useRoute();

    const isActive = (path: string) => {
      return route.path === path;
    };
    </script>

    <style>
    .navbar {
      background-color: #6b7f6f !important;
      font-weight: 700;
      font-family: "Playfair Display", serif;
      font-optical-sizing: auto;
      font-style: normal;
    }

    .dropdown-menu {
      background-color: #6b7f6f !important;
    }

    .navbar-brand img {
      width: 75px;
      height: 30px;
      margin-right: 50px;
    }

    @media (max-width: 768px) {
      .navbar-brand {
        margin-bottom: 15px; /* Mesafeyi artırmak için bu değeri ayarlayın */
        margin-top: 15px; /* Mesafeyi artırmak için bu değeri ayarlayın */
      }
    }

    .nav-link {
      position: relative;
      color: white;
      font-weight: 500;
      padding: 10px;
      transition: color 0.3s;
    }

    .nav-link:hover {
      color: #203423;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: white;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    .nav-link-active::after {
      transform: scaleX(1);
    }

    .user-avatar {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    .user-avatar img {
      width: 40px;
      height: 40px;
    }
    </style>