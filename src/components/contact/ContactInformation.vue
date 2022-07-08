<template>
  <div class="contact_information">
    <p class="contact_name">{{ mediaData.name }}</p>
    <div>{{ getRoleString(mediaData.role).join(",") }}</div>
    <div>{{ getContactTitle(mediaData.contact_title) }}</div>
    <div
      v-for="media in mediaData.contactMedia"
      :key="media.type"
      class="media_line_wrapper"
    >
      <div class="media_line">
        <a
          :href="media.url"
          target="_blank"
          rel="noopener noreferrer"
          class="media_link"
        >
          <img :src="getMediaTypeIconURL(media.type)" class="media_icon" />
          {{ media.name }}</a
        >
      </div>
    </div>
  </div>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/contact/contact_information.scss"
/>
<script>
import SNSInfo from "@/json/SNSInformation.json";
export default {
  props: {
    mediaData: {
      Type: Object,
      require: true,
    },
  },
  methods: {
    getMediaTypeIconURL(type) {
      return SNSInfo[type].logo;
    },
    getRoleString(roles) {
      return roles.map((data) => {
        return this.$translate("Contacts", "role")[data];
      });
    },
    getContactTitle(key) {
      return this.$translate("Contacts", "contact_title")[key];
    },
  },
};
</script>
