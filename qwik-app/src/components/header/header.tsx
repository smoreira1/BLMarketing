import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <nav class="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-body rounded fixed-top d-flex justify-content-between">
      <div class="d-flex justify-content-between flex-row">
        <a
          class="navbar-brand d-flex align-items-center justify-content-center me-auto"
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
        <div class="p-2 flex-grow-2"></div>
        <div class="collapse navbar-collapse">
          <a
            href="mailto:stephen.d.moreira@blmediagroup.org"
            class="btn btn-light"
          >
            <img src="/mail.svg"></img>
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
});
