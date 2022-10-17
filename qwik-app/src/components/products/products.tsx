import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./products.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container px-4 py-5" id="products">
      <h2 class="pb-2 border-bottom">Products</h2>
      <div class="px-4 py-5 my-5 text-center bg-light">
        <img
          class="d-block mx-auto mb-4"
          src="/starlight.svg"
          alt=""
          width="150"
          height="150"
        ></img>
        <h1 class="display-5 fw-bold">Starlight</h1>
        <div class="col-lg-6 mx-auto">
          <p>
            <a
              href="https://starlight-public.azurewebsites.net"
              class="btn btn-sm btn-outline-info"
              target="_blank"
            >
              Visit
            </a>
          </p>
          <p class="lead mb-4">
            Real time. Reactive. Resilient. Reconfigurable.
          </p>
        </div>
      </div>
    </div>
  );
});
