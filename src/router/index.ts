import { createRouter, createWebHistory } from 'vue-router'
import AuthorsView from '../views/AuthorsView.vue'
import NewsView from "@/views/NewsView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import FeaturedArticlesView from "@/views/FeaturedArticlesView.vue";
import TrendingSubjectsView from "@/views/TrendingSubjectsView.vue";
import GetHelpView from "@/views/GetHelpView.vue";
import LogInView from "@/views/Auth/LogInView.vue";
import TermsOfUseView from "@/views/TermsOfUseView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import ForgotPasswordView from "@/views/Auth/ForgotPasswordView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/Account/ProfileView.vue";
import MyArticlesView from "@/views/Account/MyArticlesView.vue";
import LikedArticlesView from "@/views/Account/LikedArticlesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
    },
    {
      path: '/featured-articles',
      name: 'featured-articles',
      component: FeaturedArticlesView,
    },
    {
      path: '/trending-subjects',
      name: 'trending-subjects',
      component: TrendingSubjectsView,
    },
    {
      path: '/get-help',
      name: 'get-help',
      component: GetHelpView,
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: TermsOfUseView,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/my-articles',
      name: 'my-articles',
      component: MyArticlesView,
    },
    {
      path: '/liked-articles',
      name: 'liked-articles',
      component: LikedArticlesView,
    }
  ],
})

export default router
