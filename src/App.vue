<template>
  <div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from "./components/SiteNavigation.vue";
import BaseModel from './components/BaseModel.vue';
import Features from './components/Features.vue';

</script>

<style lang="scss" scoped></style>