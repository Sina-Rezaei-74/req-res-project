<template>
  <div>
    <header>
      <b-container>
        <AppHeader />
      </b-container>
    </header>
    <b-container class="description">
      <slot />
    </b-container>
    <footer></footer>
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>


<style scoped>
header {
  background: lightblue;
  text-align: center;
}
</style>