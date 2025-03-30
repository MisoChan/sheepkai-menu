<template>
  <div id="contact_view">
    <div id="contact_view_wrapper">
      <div id="contact_image_wrapper">
        <img
          src="@/assets/pictures/Contact.png"
          class="contact_image pc_only"
        />
        <img
          src="@/assets/pictures/Contact_Nanoshiki.png"
          class="contact_image sp_only sp_left"
        />
        <img
          src="@/assets/pictures/Contact_Imobe.png"
          class="contact_image sp_only sp_right"
        />
      </div>
      <div id="contact_information_wrapper">
        <ContactInformation
          :mediaData="getInfoData('NanoShiki')"
        ></ContactInformation>
        <ContactInformation
          :mediaData="getInfoData('Imobe')"
        ></ContactInformation>
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
    return {};
  },
  methods: {
    sendRequest: () => {},
    getInfoData: (key) => {
      return ContactInfoData[key];
    },
  },
  computed: {},
  mounted: function () {},
};
</script>
