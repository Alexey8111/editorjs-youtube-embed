/**
 * YouTube embed plugin for Editor.js.
 *
 * @author Tei Yuan Wei
 * @license MIT License (MIT)
 * @version 1.0.3
 *
 */

import "./main.css";
import ToolboxIcon from "./svg/toolbox.svg";

export default class YoutubeEmbed {
  /**
   *
   * Get toolbox settings
   *
   * @return {{icon: string, title: string}}
   *
   */
  static get toolbox() {
    return {
      title: "YouTube",
      icon: ToolboxIcon,
    };
  }

  /**
   *
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {data: DelimiterData} — previously saved data
   *
   */
  constructor({ data, config, api, readOnly }) {
    this.data = data;
    this.readOnly = readOnly;

    this.wrapper = null;
    this.url = null;
    this.caption = '';
    this.isEdited = false;
  }
  get CSS() {
    return {
      caption: 'embed-tool__caption',
    };
  }

  /**
   *
   * Return tool's view
   *
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    this.wrapper = document.createElement("div");
    const input = document.createElement("input");
    input.value = this.data && this.data.url ? this.data.url : "";
    this.url = input.value;
    input.placeholder = "Вставьте сюда url видео с YouTube ...";

    this.wrapper.classList.add("block-wrapper");
    this.wrapper.appendChild(input);
    this._createIframe(input.value);

    input.addEventListener("change", (event) => {
      this.isEdited = true;

      this.url = input.value;
      this._createIframe(input.value);
    });
    return this.wrapper;
  }

  /**
   *
   * Create iframe for YouTube embed
   * @private
   * @param {string} url
   *
   */
  _createIframe(url) {
    const videoId = url.match(/(?<=v=)[a-zA-Z0-9_]+(?=\&?)/);
    if (videoId == null) {
      if (this.isEdited) {
        this.wrapper.querySelector("input").classList.add("invalid");
      }
      return;
    }

    this.wrapper.innerHTML = null;
    const plyrContainer = document.createElement("div");
    plyrContainer.classList.add("video-wrapper");

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    iframe.setAttribute("allowfullscreen", true);

    plyrContainer.appendChild(iframe);

    const caption = document.createElement("div");
    caption.classList.add(this.CSS.caption);
    caption.contentEditable = true;
    caption.dataset.placeholder = "Введите описание";
    this.wrapper.appendChild(plyrContainer);
    this.wrapper.appendChild(caption);
  }

  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Return block data
   *
   * @public
   * @param {HTMLDivElement} blockContent - Block wrapper
   * @returns {object}
   */
  save(blockContent) {
    const input = blockContent.querySelector("input");
    const caption = blockContent.querySelector(`.${this.CSS.caption}`) || '';
    return {
      url: this.url,
      caption: caption.innerHTML
    };
  }
}
