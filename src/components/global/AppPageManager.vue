<template>
  <div class="mt-3">
    <AppAlert v-if="error" :status="status" :text="text" />
    <AppAlert v-else-if="!apiIsLoaded" :status="status" :text="text" />
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    apiIsLoaded: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  methods: {
    x() {
      console.log("SINA");
    },
  },
};
</script>