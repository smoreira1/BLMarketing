import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { mockTestimonies } from "~/services/testimony.service";
import Testimony from "../testimony/testimony";
import styles from "./testimonies.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const testimonies = mockTestimonies();

  return (
    <div class="container px-4 py-5" id="testimoies">
      <h2 class="pb-2 border-bottom">Testimonies</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2"></use>
            </svg>
          </div>
          <div>
            <h3 class="fs-2">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
        {/* <Testimony></Testimony> */}
      </div>
    </div>
  );
});
