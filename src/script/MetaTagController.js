export class MetatagController {
  setMetatag(metatag) {
    document
      .querySelector("meta[property='og:title']")
      .setAttribute("content", metatag.title);
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", metatag.description);
    document
      .querySelector("meta[property='og:description']")
      .setAttribute("content", metatag.description);
    document
      .querySelector("meta[property='og:type']")
      .setAttribute("content", metatag.pagetype);
  }
}
