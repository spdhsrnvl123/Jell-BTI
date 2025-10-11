import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store"; // Redux store import

// 전역 axios 에러 처리 - 가장 먼저!
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API 호출 실패 (백엔드 비활성화)");
    return Promise.resolve({ data: null, status: error.response?.status });
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
