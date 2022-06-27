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
          :title="fullName"
          :img-src="user.avatar"
          :img-alt="String(user.first_name)"
          :img-title="user.first_name"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> {{ user.email }} </b-card-text>
        </b-card>
      </b-row>
      <b-button :to="{ name: 'users.index' }" variant="primary">
        back to list
      </b-button>
      <b-button @click="destroy" variant="danger">delete user</b-button>
      <b-button :to="{ name: 'users.edit', params: user.id }" variant="warning">
        edit user
      </b-button>
    </div>
  </AppPageManager>
</template>

<script>
import Repository from "@/api/repositoryFactory";
const usersRepository = Repository.get("users");

export default {
  name: "UsersShow",
  title: "",
  data() {
    return {
      user: "",
      id: this.$route.params.id,
      apiIsLoaded: false,
      error: false,
      status: "info",
      text: "please wait ....",
    };
  },
  mounted: async function () {
    const loader = this.$loading.show();
    try {
      let {
        data: { data },
      } = await usersRepository.show(this.id);
      this.user = data;
      this.$title = `hi ${data.first_name}`;
      this.apiIsLoaded = true;
    } catch (error) {
      this.error = true;
      this.status = "danger";
      this.text = error.message;
    }
    loader.hide();
  },
  methods: {
    destroy: async function () {
      const loader = this.$loading.show();
      try {
        this.apiIsLoaded = false;
        this.status = "info";
        this.text = "please wait ....";
        await usersRepository.delete(this.id);
        this.$router.push({ name: "users.index" });
        this.apiIsLoaded = true;
      } catch (error) {
        this.error = true;
        this.status = "danger";
        this.text = error.message;
      }
      loader.hide();
    },
  },
  computed: {
    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },
};
</script>