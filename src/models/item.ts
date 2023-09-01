import type { Option } from "./option";

export type Item = {
  cut: {
    price: number | undefined;
    people: Option[];
  }[];
};
