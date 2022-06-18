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
}
