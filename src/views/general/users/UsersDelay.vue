<template>
  <AppPageManager
    :apiIsLoaded="apiIsLoaded"
    :error="error"
    :status="status"
    :text="text"
  >
    <div>
      <b-row>
        <b-card
          v-for="(user, key) in users"
          :key="key"
          :title="fullName(user.first_name, user.last_name)"
          :img-src="user.avatar"
          :img-alt="String(user.first_name)"
          :img-title="user.first_name"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> {{ user.email }} </b-card-text>

          <b-button
            :to="{
              name: 'users.show',
              params: {
                id: user.id,
              },
            }"
            variant="primary"
            >go to profile</b-button
          >
        </b-card>
      </b-row>
    </div>
  </AppPageManager>
</template>

<script>
import Repository from "@/api/repositoryFactory";
const usersRepository = Repository.get("users");

export default {
  name: "UsersDelay",
  title: "Users list with delay",
  data() {
    return {
      users: [],
      delayTime: 2,
      apiIsLoaded: false,
      error: false,
      status: "info",
      text: "please wait ....",
    };
  },
  mounted: async function () {
    let loader = this.$loading.show();
    try {
      let {
        data: { data },
      } = await usersRepository.getDelay(this.delayTime);
      this.users = data;
      this.apiIsLoaded = true;
    } catch (error) {
      this.error = true;
      this.status = "danger";
      this.text = error.message;
    }
    loader.hide();
  },
  methods: {
    fullName: function (first_name, last_name) {
      return first_name + " " + last_name;
    },
  },
};
</script>