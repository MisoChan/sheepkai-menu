import axios from "axios";

// Axios設定をここで行う → 外部のJSに切り出しても使えるようにする

export const axiosApp = axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json;charset=UTF-8",
    "X-REQUESTED-BY-MEKURI-APP": "Blog",
  },
});
