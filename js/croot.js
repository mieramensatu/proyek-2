import { token } from "./controller/cookies.js";

if (token === "") {
  window.location.replace("/proyek-2/auth");
}
