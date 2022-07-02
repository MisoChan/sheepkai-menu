<template>
  <div id="contact_view">
    <div id="contact_view_wrapper">
      <div id="contact_information_wrapper">
        <ContactInformation
          :mediaData="getInfoData('NanoShiki')"
        ></ContactInformation>
        <ContactInformation
          :mediaData="getInfoData('Imobe')"
        ></ContactInformation>
      </div>
      <div id="contact_form_wrapper">
        <form name="message" class="contact_form" onsubmit="return false;">
          <input type="email" name="mail_address" />
          <input type="text" name="message_title" />
          <input type="text" name="message_text" />
        </form>
        <input type="button" :value="this.$translate('Contacts', 'submit')" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="@/assets/sass/contact/contact.scss"></style>
<script>
import ContactInfoData from "@/json/ContactInformation.json";
import ContactInformation from "@/components/contact/ContactInformation.vue";
export default {
  components: {
    ContactInformation,
  },
  data: function () {
    return {
      recaptchaToken: "",
    };
  },
  methods: {
    sendRequest: () => {},
    getInfoData: (key) => {
      return ContactInfoData[key];
    },
  },
  mounted: function () {
    // // eslint-disable-next-line no-undef
    // grecaptcha.ready(() => {
    //   // eslint-disable-next-line no-undef
    //   grecaptcha
    //     .execute(process.env.VUE_APP_RECAPTCHA_SITE_KEY_V3, {
    //       action: "homepage",
    //     })
    //     .then((token) => {
    //       this.recaptchaToken = token;
    //     });
    // });
  },
};
</script>
