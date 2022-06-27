<template>
  <AppPageManager
    :apiIsLoaded="apiIsLoaded"
    :error="error"
    :status="status"
    :text="text"
  >
    <div>
      <b-form @submit.prevent="edit">
        <b-form-group
          id="input-group-1"
          label="Your Name:"
          label-for="input-1"
          description="Please enter your name."
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Job:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.job"
            placeholder="Enter job"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button @click="destroy" variant="danger">Delete</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </AppPageManager>
</template>

<script>
import Repository from "@/api/repositoryFactory";
const usersRepository = Repository.get("users");

export default {
  name: "UsersEdit",
  title: "",
  data() {
    return {
      form: {
        name: "",
        job: "",
      },
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
        data: {
          data: { first_name, last_name },
        },
      } = await usersRepository.show(this.id);
      this.$title = `Edit ${first_name} information`;
      if (first_name && last_name) {
        this.form.name = first_name;
        this.form.job = last_name;
      } else {
        this.$router.push({ name: "error.404" });
      }
      this.apiIsLoaded = true;
    } catch (error) {
      this.error = true;
      this.status = "danger";
      this.text = error.message;
    }
    loader.hide();
  },
  methods: {
    redirectToList() {
      this.$router.push({ name: "users.index" });
    },
    edit: async function () {
      const loader = this.$loading.show();
      try {
        this.apiIsLoaded = false;
        this.status = "info";
        this.text = "please wait ....";
        await usersRepository.update(this.id, this.form);
        this.redirectToList();
        this.apiIsLoaded = true;
      } catch (error) {
        this.error = true;
        this.status = "danger";
        this.text = error.message;
      }
      loader.hide();
    },
    destroy: async function () {
      const loader = this.$loading.show();
      try {
        this.apiIsLoaded = false;
        this.status = "info";
        this.text = "please wait ....";
        await usersRepository.delete(this.id);
        this.redirectToList();
      } catch (error) {
        this.error = true;
        this.status = "danger";
        this.text = error.message;
      }
      loader.hide();
    },
  },
};
</script>