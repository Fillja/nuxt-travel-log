<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <NuxtLink class="btn btn-accent" to="/">
        Sign in
        <Icon name="tabler:brand-github" size="20" />
      </NuxtLink>
    </div>
  </div>
</template>
