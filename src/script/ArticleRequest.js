import { axiosApp } from "@/script/settings/AxiosSettings.js";
let controller = new AbortController();
export class ArticleRequest {
  constructor(url) {
    this.url = url;
    // パラメタURL
    this.searchURLParameter = new URLSearchParams(url);
    //リクエストパラメタ名称
    this.REQUEST_PARAMETERS = {
      FUNCTION_CD: "function_cd",
      ARTICLE_URL: "article_url",
      PAGE_NO: "page_no",
    };
    // パラメタ数（今回は両方とも同じ）
    this.REQUEST_PARAMETERS_MAX = 3;

    this.axios = axiosApp;
  }

  // 記事リストか記事単体取得か、それ以外かを判定する
  // ページ番号のパラメータがURLにあるならARTICLE_LIST_DATA、そうでないなら記事単体取得としてARTICLE_DATAを返す
  judgeArticleRequestType() {
    //URLパラメータがない場合はそもそもお門違いとして返却
    if (!this.url) {
      return "UNKNOWN";
    }
    // 今回は機能CDと記事URLとページNoで判定。
    // 機能CDがない or パラメータがREQUEST_PARAMETERS_MAX以上ある→ タイプエラー。

    if (
      (Array.from(this.searchURLParameter).length === 0) |
      !this.searchURLParameter.has(this.REQUEST_PARAMETERS.FUNCTION_CD) |
      (Array.from(this.searchURLParameter).length ===
        this.REQUEST_PARAMETERS_MAX)
    ) {
      throw { response: { data: { status: "INVALID_VALUES" } } };
    }
    // ページ番号のパラメータがURLにあるならARTICLE_LIST_DATA、そうでないなら記事単体取得としてARTICLE_DATAを返す
    return this.searchURLParameter.has(this.REQUEST_PARAMETERS.PAGE_NO)
      ? "ARTICLE_LIST_DATA"
      : "ARTICLE_DATA";
  }
  //記事のURLパラメータの取得を行う
  getArticleRequestParameter() {
    // パラメタ：機能CDと記事URL
    let functionCode = this.searchURLParameter.get(
      this.REQUEST_PARAMETERS.FUNCTION_CD
    );
    let articleURL = this.searchURLParameter.get(
      this.REQUEST_PARAMETERS.ARTICLE_URL
    );
    return { function_cd: functionCode, article_url: articleURL };
  }
  //記事リストのURLパラメータの取得を行う
  getArticleListRequestParameter() {
    // パラメタ：機能CDとページ番号
    let functionCode = this.searchURLParameter.get(
      this.REQUEST_PARAMETERS.FUNCTION_CD
    );
    let pageNumber = this.searchURLParameter.get(
      this.REQUEST_PARAMETERS.PAGE_NO
    );
    return { function_cd: functionCode, page_no: pageNumber };
  }
  //記事の取得を行う
  async getArticleAsync() {
    const parameter = this.getArticleRequestParameter();
    //記事取得リクエスト発出
    let resultData = await this.axios.get("/article/getArticle", {
      params: parameter,
      signal: controller.signal,
    });
    return resultData.data;
  }
  //記事リストの取得を行う
  async getArticleListAsync() {
    const parameter = this.getArticleListRequestParameter();
    let resultData = await this.axios.get("/article/getArticleList", {
      params: parameter,
      signal: controller.signal,
    });
    return resultData.data;
  }
  cancelRequest() {
    controller.abort();
    controller = new AbortController();
  }
}
