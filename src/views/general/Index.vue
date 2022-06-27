<template>
  <AppPageManager
    :error="error"
    :apiIsLoaded="apiIsLoaded"
    :status="status"
    :text="text"
  >
    <b-row>
      <b-col>
        <b-img
          :src="require('@/assets/images/me.jpg')"
          height="400px"
          width="400px"
          fluid
        ></b-img>
      </b-col>
      <b-col>
        <p>
          برای ورود به دنیای برنامه نویسی ، کار خود را با یادگیری زبان python
          شروع کردم ، در ادامه برای ساخت وبسایت ، شروع به یادگیری فریم وورک
          django کرده و در طول این مسیر ، برای طراحی اولیه ی صفحات وب HTML و CSS
          را نیز تا حدودی یاد گرفتم . بعد به توصیه ی یکی از دوستانم به NodeJS
          روی آوردم و در طول یادگیری آن با MongoDB ، RestAPI ، Socket.IO و طراحی
          MicroService آشنا شده و در حال یادگیری آن ها هستم . در طی این پروسه ،
          با پکیج هایی مانند jwt ، Express و mongoose کار کرده ام و با شیوه‌ی
          پیاده سازی به صورت MicroService، REST API‌ ,Socket.IO آشنایی دارم و
          برای بعضی از این موارد پروژه‌هایی تستی را بروی GIT به آدرس زیر قرار
          داده ام : https://github.com/Sina-Rezaei-74
        </p>
      </b-col>
    </b-row>
    <hr />
    <TechUsed />
  </AppPageManager>
</template>

<script>
import AppPageManager from "@/components/global/AppPageManager.vue";
import TechUsed from "@/components/TechUsed.vue";

export default {
  name: "Index",
  data: () => {
    return {
      error: false,
      apiIsLoaded: true,
      status: "",
      text: "",
    };
  },
  components: {
    AppPageManager,
    TechUsed,
  },
};
</script>