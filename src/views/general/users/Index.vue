<template>
  <AppPageManager
    :apiIsLoaded="apiIsLoaded"
    :error="error"
    :status="status"
    :text="text"
  >
    <b-btn class="mb-3" :to="{ name: 'users.create' }" variant="success">
      <b-icon icon="person-plus-fill" variant="none" class="mb-1 ml-1" /> ایجاد
      کاربر جدید
    </b-btn>
    <b-table
      hover
      striped
      bordered
      responsive
      :fields="fields"
      :items="users"
      class="text-center"
    >
      <template #cell()="data">
        {{ data.value }}
      </template>
      <template #cell(آواتار)="{ item }">
        <b-img
          :src="item.avatar"
          v-bind="mainProps"
          rounded="circle"
          :alt="item.first_name"
        />
      </template>
      <template #cell(اقدامات)="{ item }">
        <b-btn
          :to="{ name: 'users.show', params: { id: item.id } }"
          variant="primary"
          pill
          class="mr-1"
        >
          <b-icon icon="eye" variant="none" font-scale="1.5" class="pb-1" />
        </b-btn>
        <b-btn
          :to="{ name: 'users.edit', params: { id: item.id } }"
          variant="secondary"
          pill
          class="mr-1 my-1"
        >
          <b-icon
            icon="pencil-square"
            variant="none"
            font-scale="1.5"
            class="pb-1"
          />
        </b-btn>
        <b-btn @click="destroy(item.id)" variant="danger" pill class="mr-1">
          <b-icon icon="trash" variant="none" font-scale="1.5" class="pb-1" />
        </b-btn>
      </template>
    </b-table>
    <div class="mt-3">
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="total"
        :per-page="perPage"
        align="center"
      ></b-pagination>
    </div>
  </AppPageManager>
</template>

<script>
import Repository from "@/api/repositoryFactory";
const usersRepository = Repository.get("users");

export default {
  name: "UsersIndex",
  title: "Users list",
  data: () => {
    return {
      users: [],
      fields: [
        { key: "id", label: "#" },
        "آواتار",
        { key: "first_name", label: "نام" },
        { key: "last_name", label: "نام خانوادگی" },
        { key: "email", label: "ایمیل" },
        "اقدامات",
      ],
      mainProps: {
        blankColor: "gray",
        width: 75,
        height: 75,
        class: "m1",
      },
      apiIsLoaded: false,
      error: false,
      status: "info",
      text: "please wait ....",
      total: "",
      perPage: 6,
      currentPage: 1,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const loader = this.$loading.show();
      try {
        let users = await usersRepository.get(this.currentPage);
        this.users = users.data.data;
        this.total = users.data.total;
        this.apiIsLoaded = true;
      } catch (error) {
        this.error = true;
        this.status = "danger";
        this.text = error.message;
      }
      loader.hide();
    },
    async destroy(id) {
      const loader = this.$loading.show();
      try {
        this.apiIsLoaded = false;
        this.status = "info";
        this.text = "please wait ....";
        await usersRepository.delete(id);
        await this.fetch();
        this.$bvToast.toast("کاربر با موفقیت حذف شد.", {
          title: "پیغام",
          variant: "success",
          toaster: "b-toaster-bottom-left",
          noCloseButton: true,
        });
      } catch (error) {
        this.status = "danger";
        this.text = error.message;
        this.$bvToast.toast("یک اشکال پیش آمده است.", {
          title: "پیغام",
          toaster: "b-toaster-bottom-left",
          variant: "warning",
          solid: true,
          to: "/users",
          noCloseButton: true,
        });
      }
      loader.hide();
    },
  },
  watch: {
    currentPage: async function () {
      await this.fetch();
    },
  },
};
</script>

<style scoped>
::v-deep table tbody tr td {
  vertical-align: middle !important;
}
::v-deep table thead tr th {
  vertical-align: middle !important;
}
</style>