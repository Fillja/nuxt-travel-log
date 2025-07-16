<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <Icon
      size="24"
      class="swap-on"
      name="tabler:sun"
    />

    <Icon
      size="24"
      class="swap-off"
      name="tabler:moon-filled"
    />
  </label>
</template>
