import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./landing-page.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="px-4 py-5 my-5 text-center bg-light">
      <img
        class="d-block mx-auto mb-4"
        src="/favicon.svg"
        alt=""
        width="150"
        height="150"
      ></img>
      <h1 class="display-5 fw-bold">B.L. Media Group LLC</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Next generation real time products.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
            href="#products"
          >
            Products
          </a>
          <a
            type="button"
            class="btn btn-primary btn-lg px-4"
            href="#testimonies"
          >
            Testimonies
          </a>
        </div>
      </div>
    </div>
  );
});
