<template>
  <PopupWindow :showPopup="popup">
    <template>
      <div class="message_window_wrapper">
        <img :src="messageData.icon" />
        <div class="message_title">{{ messageData.title }}</div>
        <div class="message_description">{{ messageData.description }}</div>
      </div>
    </template>
  </PopupWindow>
</template>

<script>
import PopupWindow from "@/components/commons/PopupWindow.vue";
import PopupMessages from "@/json/PopupMessages.json";
export default {
  components: {
    PopupWindow,
  },
  props: {
    messageID: {
      Type: String,
      Require: true,
    },
    closeAfterSeconds: {
      Type: Number,
      Require: true,
    },
    showPopup: {
      Type: Boolean,
      Require: true,
    },
  },
  data: function () {
    return {
      popup: false,
      messageData: {},
    };
  },
  watch: {
    messageID() {
      this.messageData =
        PopupMessages[this.$store.getLanguage()][this.messageID];
    },
    showPopup() {
      this.popup = this.showPopup;
    },
  },
};
</script>
