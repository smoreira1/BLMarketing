import { component$ } from "@builder.io/qwik";
import LandingPage from "~/components/landing-page/landing-page";
import Products from "~/components/products/products";
import Testimonies from "~/components/testimonies/testimonies";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <LandingPage></LandingPage>
        <Products></Products>
        <Testimonies></Testimonies>
      </main>
      <footer class="d-flex justify-content-center">
        <a href="./">Made with ♡ by B.L. Media Group LLC</a>
      </footer>
    </>
  );
});
