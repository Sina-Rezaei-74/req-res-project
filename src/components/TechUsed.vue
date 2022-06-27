<template>
  <div>
    <h3>تکنولوژی های استفاده شده:</h3>
    <b-row>
      <b-col sm="6" md="4" lg="3" class="mb-3">
        <b-card
          title="Vue JS"
          :img-src="require('@/assets/images/vuejs.png')"
          img-alt="Vue JS"
          img-top
        >
          <b-card-text>
            {{
              truncate("برای منطق سمت کاربر از فریم ورک Vue استفاده کرده‌ایم.")
            }}
          </b-card-text>
          <template #footer>
            <small
              ><b-link href="https://v2.vuejs.org/" target="_blank"
                >مراجعه به سایت رسمی Vue JS</b-link
              ></small
            >
          </template>
        </b-card>
      </b-col>

      <b-col sm="6" md="4" lg="3" class="mb-3">
        <b-card
          title="Webpack"
          :img-src="require('@/assets/images/webpack.png')"
          img-alt="Webpack"
          img-top
        >
          <b-card-text>
            {{
              truncate("مسئولیت باندل کردن اطلاعات بر عهده Webpack می‌باشد.")
            }}
          </b-card-text>
          <template #footer>
            <small
              ><b-link href="https://webpack.js.org/" target="_blank"
                >مراجعه به سایت رسمی Webpack</b-link
              ></small
            >
          </template>
        </b-card>
      </b-col>

      <b-col sm="6" md="4" lg="3" class="mb-3">
        <b-card
          title="Bootstrap-vue"
          :img-src="require('@/assets/images/bootstrap-vue.png')"
          img-alt="Bootstrap-vue"
          img-top
        >
          <b-card-text>
            {{
              truncate("برای طراحی دیزاین از Bootstrap Vue استفاده شده است.")
            }}
          </b-card-text>
          <template #footer>
            <small
              ><b-link href="https://bootstrap-vue.org/" target="_blank"
                >مراجعه به سایت رسمی Bootstrap-vue</b-link
              ></small
            >
          </template>
        </b-card>
      </b-col>

      <b-col sm="6" md="4" lg="3" class="mb-3">
        <b-card
          title="Axios"
          :img-src="require('@/assets/images/axios.png')"
          img-alt="Axios"
          img-top
        >
          <b-card-text>
            {{
              truncate(
                "برای تبادل اطلاعات با سرور و api از Axios بهره می‌بریم."
              )
            }}
          </b-card-text>
          <template #footer>
            <small
              ><b-link href="https://axios-http.com/" target="_blank"
                >مراجعه به سایت رسمی Axios</b-link
              ></small
            >
          </template>
        </b-card></b-col
      >
    </b-row>
  </div>
</template>

<script>
export default {
  name: "TechUsed",
  methods: {
    truncate: function (str) {
      if (str.length <= 70) {
        return str;
      }
      return str.slice(0, 69) + "....";
    },
  },
};
</script>