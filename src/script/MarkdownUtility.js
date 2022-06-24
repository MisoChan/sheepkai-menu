import { marked } from "marked";
import sanitizer from "sanitize-html";
import sanitizeOption from "@/json/SanitizeOptions.json";
export class MarkDownUtility {
  // HTML変換を行う
  convertToHTML(mdtext, isSanitize) {
    const converted_md = marked(mdtext);
    if (isSanitize) {
      return sanitizer(converted_md, sanitizeOption);
    }
    return converted_md;
  }
  // MDからDOM（HTMLDocument）に変換する
  getParsedBodyDOM(mdtext, isSanitize) {
    const convertedHtmlText = this.convertToHTML(mdtext, isSanitize);
    let h2_id_number = 0;
    const result = new DOMParser().parseFromString(
      convertedHtmlText,
      "text/html"
    );
    const h2collection = result.getElementsByTagName("h2");
    // ここでH2に通しIDを振る
    Array.from(h2collection).map((row) => {
      row.id = "h2_index_" + h2_id_number;
      h2_id_number = h2_id_number + 1;
    });
    return result.querySelector("body");
  }
  // IMGタグのsrcをバックエンドのURLに変換する。
  convertImageSrc(element, urlHeader) {
    Array.from(element.getElementsByTagName("img")).map((element) => {
      element.setAttribute(
        "src",
        urlHeader + this.getRemovedURLOriginFromElementSrc(element)
      );
    });
    return element;
  }
  // src要素内のURLオリジンを消す
  getRemovedURLOriginFromElementSrc(element) {
    let url = new URL(element.src).toString();
    return url.replace(new URL(element.src).origin, "");
  }

  getMarkDownHeaderList(mdtext) {
    //HTML文字列からDOMパーサにかけてHTMLとして処理できるようにする;
    const parsedhtml = this.getParsedBodyDOM(mdtext, true);
    const h2collection = parsedhtml.getElementsByTagName("h2");
    // 取得できたH2の配列を指定のObjectに変換する
    const h2array = Array.from(h2collection).map((row) => {
      let result = {
        id: row.id,
        title: row.textContent,
      };
      return result;
    });
    return h2array;
  }
}
