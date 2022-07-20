<template>
  <ModalMessage ref="popup"></ModalMessage>
  <div id="article_view_wrapper">
    <div id="article_top_wrapper">
      <div id="article_title_wrapper">
        <div id="article_title">{{ article_property.article_title }}</div>
        <div id="article_title_sub">
          {{ article_property.article_subtitle }}
        </div>
      </div>
      <div class="article_top_information" v-if="is_articlepage & pageLoaded">
        <div class="article_top_author">著者:ナノ式</div>
        <div class="article_reflesh_date">
          最終更新: {{ article_property.upload_date }}
        </div>
      </div>
    </div>
    <div id="article_border">
      <div id="article_border_links">
        <div class="border_link">
          <router-link to="/">
            <img src="pictures/KinokoHouse.png" class="border_button_img" />
            <div>HOME</div>
          </router-link>
        </div>

        <div class="border_link border_last">
          <a href="#" @click.prevent.stop="$router.go(-1)">
            <img
              src="pictures/Planaria_Back_senpai.png"
              class="border_button_img chotto_small"
            />
            <div>BACK</div>
          </a>
        </div>

        <hr />
      </div>
    </div>
    <div id="article_information_margin"></div>
    <!-- V-IF ↓記事を表示する場合↓ -->
    <div id="article_view" v-if="is_articlepage">
      <ArticleTextView
        v-if="is_articlepage"
        :articleInformation="this.article_property"
      ></ArticleTextView>
    </div>
    <!-- IF END ↑記事を表示する場合↑ -->
    <!-- V-IF ELSE ↓記事リストを表示する場合↓ -->
    <ArticleListView
      v-else
      :articleInformation="this.article_property"
    ></ArticleListView>
    <!-- ELSE END ↑記事リストを表示する場合↑ -->
  </div>
</template>

<style lang="scss" scoped src="@/assets/sass/article/article.scss"></style>

<script>
import ArticleTextView from "@/components/article/ArticleTextView.vue";
import ArticleListView from "@/components/article/ArticleListView.vue";
import { ArticleRequest } from "@/script/ArticleRequest";
import { MetatagController } from "@/script/MetaTagController.js";
export default {
  components: {
    ArticleTextView,
    ArticleListView,
  },
  data: function () {
    return {
      article_property: {},
      loading_property: {
        article_title: this.$translate("Common", "loading"),
        article_subtitle: this.$translate("Common", "loading..."),
        article_md_text: "#" + this.$translate("Common", "loading"),
      },
      pageLoaded: false,
      is_articlepage: false,
    };
  },
  watch: {
    // 記事コンポーネント同士のRouter Push時に、再ロードさせる
    $route() {
      this.article_property = this.loading_property;
      this.onLoad();
    },
  },
  methods: {
    // 記事ページのロード処理
    async onLoad() {
      this.pageLoaded = false;

      const request = new ArticleRequest(window.location.search);
      // 早期リターン：UNKNOWNだった場合は即Returnして処理を終了する
      if (request.judgeArticleRequestType() === "UNKNOWN") {
        return null;
      }
      // 記事ページかどうかを判定
      this.is_articlepage =
        (await request.judgeArticleRequestType()) === "ARTICLE_DATA";
      // TRUE：記事ページ、FALSE：記事一覧取得ルーチン実行
      try {
        this.$refs.popup.closeModal();
        if (this.is_articlepage) {
          this.article_property = await request.getArticleAsync();
        } else {
          this.article_property = await request.getArticleListAsync();
          // リストタイトルと説明をセット
          this.article_property.article_title = this.$translate(
            "FunctionProperty",
            request.getArticleRequestParameter()["function_cd"]
          )["name"];
          this.article_property.article_subtitle = this.$translate(
            "FunctionProperty",
            request.getArticleRequestParameter()["function_cd"]
          )["description"];
        }
        this.$store.commit(
          "setPageDescription",
          this.article_property.article_subtitle
        );
        new MetatagController().setMetatag({
          title: this.article_property.article_title,
          description: this.article_property.article_description,
          pagetype: "article",
        });
        this.$store.commit("setPageTitle", this.article_property.article_title);
        this.pageLoaded = true;
      } catch (exception) {
        this.$refs.popup.openModal(exception);
      }
    },
  },
  created: async function () {
    this.article_property = this.loading_property;
    await this.onLoad();
  },
};
</script>
