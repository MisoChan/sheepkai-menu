<template>
  <div class="contact_information">
    <img :src="mediaData.image" class="contact_icon" />
    <p>{{ mediaData.name }}</p>
    <div v-for="media in mediaData.contactMedia" :key="media.type">
      <div class="media_line">
        <img :src="imageSrc" class="media_icon" />
        <a :href="media.url" target="_blank" rel="noopener noreferrer">{{
          media.name
        }}</a>
      </div>
    </div>
  </div>
</template>

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
