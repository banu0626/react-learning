import React from "react";
import Home from "./pages/main/home";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import AppRoutes from "../routes/appRoutes";

export default function Register() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
