import { marked } from "marked";
import sanitizer from "sanitize-html";
import sanitizeOption from "@/script/settings/SanitizeOptions.json";
export class MarkDownUtility {
  convertToHTML(mdtext, isSanitize) {
    const converted_md = marked(mdtext);
    if (isSanitize) {
      return sanitizer(converted_md, sanitizeOption);
    }
    return converted_md;
  }
  getParsedDOM(mdtext, isSanitize) {
    const convertedHtmlText = this.convertToHTML(mdtext, isSanitize);
    let h2_id_number = 0;
    const h2collection = convertedHtmlText.getElementsByTagName("h2");
    // ここでH2に通しIDを振る
    Array.from(h2collection).map((row) => {
      row.id = "h2_index_" + h2_id_number;
      h2_id_number = h2_id_number + 1;
    });
    return new DOMParser().parseFromString(convertedHtmlText, "text/html");
  }
  convertImageSrc(mdtext, isSanitize, urlHeader) {
    let parsedDOM = this.getParsedDOM(mdtext, isSanitize);
    Array.from(parsedDOM.getElementsByTagName("img")).map((element) => {
      element.setAttribute(
        "src",
        urlHeader + this.getRemovedURLOriginFromElementSrc(element)
      );
    });
    return new XMLSerializer().serializeToString(parsedDOM);
  }
  getRemovedURLOriginFromElementSrc(element) {
    let url = new URL(element.src).toString();
    return url.replace(new URL(element.src).origin, "");
  }

  getMarkDownHeaderList(mdtext) {
    //HTML文字列からDOMパーサにかけてHTMLとして処理できるようにする;
    const parsedhtml = this.getParsedDOM(mdtext, true);
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
