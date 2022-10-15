import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <nav class="nav-bar-brand">
      <button>B.L. Media</button>
    </nav>
  );
});
