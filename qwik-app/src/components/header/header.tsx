import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <nav class="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-body rounded">
      <div class="container-fluid">
        <a
          class="navbar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <img
            class="d-block mx-auto"
            src="/favicon.svg"
            alt=""
            width="40"
            height="40"
          ></img>
          Be Live
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
      </div>
    </nav>
  );
});
