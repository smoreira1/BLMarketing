import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { mockTestimonies } from "~/services/testimony.service";
import Testimony from "../testimony/testimony";
import styles from "./testimonies.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const testimonies = mockTestimonies();

  return (
    <div class="container px-4 py-5" id="testimonies">
      <h2 class="pb-2 border-bottom">Testimonies</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {testimonies.map((element) => (
          <Testimony
            title={element.title}
            personName={element.personName}
            createDate={element.createDate}
            description={element.description}
            avatarPath={element.avatarPath}
            date={element.date}
            profession={element.profession}
          ></Testimony>
        ))}
      </div>
    </div>
  );
});
