<template>
  <div class="contact_information">
    <p class="contact_name">{{ mediaData.name }}</p>
    <div v-for="media in mediaData.contactMedia" :key="media.type">
      <div class="media_line">
        <img :src="getMediaTypeIconURL(media.type)" class="media_icon" />
        <a
          :href="media.url"
          target="_blank"
          rel="noopener noreferrer"
          class="media_link"
          >{{ media.name }}</a
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
export default {
  props: {
    mediaData: {
      Type: Object,
      require: true,
    },
  },
  methods: {
    getMediaTypeIconURL() {},
  },
};
</script>
