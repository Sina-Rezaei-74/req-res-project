<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import GeneralLayout from "@/layouts/GeneralLayout.vue";
import ErrorsLayout from "@/layouts/ErrorsLayout.vue";

export default {
  name: "App",
  components: {
    GeneralLayout,
    ErrorsLayout,
  },
  computed: {
    layout: function () {
      try {
        return this.$route.meta.layout
          ? this.$route.meta.layout
          : GeneralLayout;
      } catch (error) {
        return GeneralLayout;
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "yekan";
  src: url("./assets/fonts/yekan/yekan-regular.eot"); /* IE9 Compat Modes */
  src: url("./assets/fonts/yekan/yekan-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/yekan/yekan-regular.woff") format("woff"),
    /* Pretty Modern Browsers */ url("./assets/fonts/yekan/yekan-regular.ttf")
      format("truetype"); /* Safari, Android, iOS */
}

html,
body {
  direction: rtl !important;
  text-align: right !important;
  padding: 0;
  margin: 0;
  font-family: "yekan" !important;
  font-size: 14px;
}
</style>