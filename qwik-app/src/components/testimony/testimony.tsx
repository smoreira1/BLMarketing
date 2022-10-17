import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Testimony } from "~/models/Testimony.interface";
import styles from "./testimony.css?inline";

export default component$((props: Testimony) => {
  useStylesScoped$(styles);

  return (
    <div>
      <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <img
          class="border border-primary border-1"
          src={props.avatarPath}
          style="width:50px;height:50px;border-radius: 25% 10%;"
        ></img>
      </div>
      <div>
        <h4 class="fs-2">{props.title}</h4>
        <h6>
          {props.personName} -{" "}
          <span class="fst-italic">{props.profession}</span>
        </h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
});
