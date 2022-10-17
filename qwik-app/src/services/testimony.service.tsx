import { Testimony } from "~/models/Testimony.interface";
import { getRuntimeConfig } from "./config.service";

export function getTestimonies(): Promise<any> {
  const testimonyRequest = new URL(
    `${getRuntimeConfig().apiEndPoint}/testimony`
  );
  testimonyRequest.searchParams.set("companyDetails", "blmediagroup");
  return fetch(testimonyRequest);
}

export function mockTestimonies(): Array<Testimony> {
  const testimonies: Array<Testimony> = [];
  const testimony1: Testimony = {
    avatarPath: "will-avatar.jpeg",
    createDate: "10/31/2022",
    date: "10/31/2021",
    description: "",
    title: "True Real Time",
    personName: "Will Newlin",
    profession: "Director at YMCA",
  };
  const testimony2: Testimony = {
    avatarPath: "/rod-avatar.jpeg",
    createDate: "10/31/2022",
    date: "10/31/2021",
    description: "",
    title: "Highly Configurable!",
    profession: "Almost a doctor",
    personName: "Rod Zuniga",
  };
  const testimony3: Testimony = {
    avatarPath: "/stephen-avatar.jpeg",
    createDate: "10/31/2022",
    date: "10/31/2021",
    description: "",
    title: "Slick AF",
    profession: "Founder",
    personName: "Stephen Moreira",
  };
  testimonies.push(testimony1);
  testimonies.push(testimony2);
  testimonies.push(testimony3);
  return testimonies;
}
