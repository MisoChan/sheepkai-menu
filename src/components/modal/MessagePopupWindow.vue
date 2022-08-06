<template>
  <ModalPopup :show="this.showModal" :onClose="this.closeModal">
    <div class="message_window" @click.stop="">
      <img
        class="message_icon"
        :src="'/icons/popup/' + this.messageProperty.icon"
      />
      <p class="message_title">{{ this.messageProperty.title }}</p>
      <p class="message_description">
        {{ this.messageProperty.description }}
      </p>
      <button class="messsage_action_button button_normal" @click="onClick()">
        {{ this.$translate("MessageAction", this.messageProperty.action) }}
      </button>
    </div>
  </ModalPopup>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/modal/message_popup.scss"
></style>
<script>
"use strict";
import ModalPopup from "@/components/modal/ModalPopup.vue";
import ModalMessages from "@/json/PopupMessages.json";
export default {
  emits: ["onClose"],
  components: {
    ModalPopup,
  },
  props: {
    messageId: {
      Type: String,
      Required: true,
    },
  },
  data: function () {
    return {
      showModal: false,
      messageProperty: {
        icon: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal(messageId) {
      // 今の所日本語しか対応してません！
      const language = this.$store.getters.getLanguage;
      const message =
        ModalMessages[language] ??
        ModalMessages[process.env.VUE_APP_DEFAULT_LANGUAGE];
      this.messageProperty =
        message["POPUP"][messageId] ?? message["POPUP"]["ERROR_FAILED"];
      this.showModal = true;
    },
    onClick() {
      const actions = {
        reload() {
          location.reload();
        },
        back() {
          history.back();
        },
      };
      this.showModal = true;
      actions[this.messageProperty.action].call();
    },
  },
};
</script>
