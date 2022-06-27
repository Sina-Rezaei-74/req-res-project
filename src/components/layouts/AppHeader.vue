<template>
  <b-row
    align-h="between"
    align-v="center"
    class="d-flex justify-content-between"
  >
    <b-col class="d-flex justify-content-start">
      <b-btn :to="{ name: 'users.index' }" variant="none">
        <b-icon icon="house" font-scale="1.5" />
      </b-btn>
      <b-btn href="https://reqres.in" target="_blank" variant="none">
        <b-icon icon="globe2" font-scale="1.5" />
      </b-btn>
      <b-btn
        href="https://github.com/Sina-Rezaei-74"
        target="_blank"
        variant="none"
      >
        <b-icon icon="github" font-scale="1.5" />
      </b-btn>
      <b-btn href="#" target="_blank" variant="none">
        <b-icon icon="person-circle" font-scale="1.5" />
      </b-btn>
    </b-col>
    <b-col class="d-flex justify-content-end">
      <Logo />
    </b-col>
  </b-row>
</template>

<script>
import Logo from "@/components/TheLogo.vue";

export default {
  components: {
    Logo,
  },
};
</script>