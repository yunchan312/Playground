import { atom } from "recoil";
import { contactForm } from "./Pages/Contact";

export const homeState = atom({
  key: "homeState",
  default: true,
});

export const contactLists = atom({
  key: "contacts lists",
  default: <contactForm[]>[],
});
