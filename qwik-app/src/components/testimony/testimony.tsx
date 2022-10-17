import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Testimony } from "~/models/Testimony.interface";
import styles from "./testimony.css?inline";

export default component$((props: Testimony) => {
  useStylesScoped$(styles);

  return (
    <div>
      <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        Icon
      </div>
      <div>
        <h3 class="fs-2">{props.title}</h3>
        <p>
          Paragraph of text beneath the heading to explain the heading. We'll
          add onto it with another sentence and probably just keep going until
          we run out of words.
        </p>
      </div>
    </div>
  );
});
