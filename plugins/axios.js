import { getToken } from "@/utils/cookies";
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log(config.url)
    if (getToken()) {
      $axios.setToken(getToken());
    }
  });
  $axios.onResponse(response => {
    const res = response.data;
    return res;
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });
}

