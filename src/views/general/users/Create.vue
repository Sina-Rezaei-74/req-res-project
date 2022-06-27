<template>
  <AppPageManager
    :apiIsLoaded="apiIsLoaded"
    :error="error"
    :status="status"
    :text="text"
  >
    <div>
      <b-form @submit.prevent="store">
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
  name: "UsersCreate",
  title: "Create new user",
  data: () => {
    return {
      form: {
        name: "",
        job: "",
      },
      apiIsLoaded: true,
      error: false,
      status: "info",
      text: "please wait ....",
    };
  },
  methods: {
    store: async function () {
      const loader = this.$loading.show();
      try {
        this.apiIsLoaded = false;
        await usersRepository.create(this.form);
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
};
</script>