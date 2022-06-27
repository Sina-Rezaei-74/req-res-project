<template>
  <b-alert :variant="status" show>{{ text }}</b-alert>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    status: {
      type: String, // success, warning, error
      default: "success",
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>