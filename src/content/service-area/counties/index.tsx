import type { ComponentType } from "react";
import Lancaster from "./lancaster";
import Berks from "./berks";
import Chester from "./chester";
import Lebanon from "./lebanon";
import Dauphin from "./dauphin";
import York from "./york";

// Every slug in src/lib/counties.ts must have an entry here.
export const countyContentMap: Record<string, ComponentType> = {
  lancaster: Lancaster,
  berks: Berks,
  chester: Chester,
  lebanon: Lebanon,
  dauphin: Dauphin,
  york: York,
};
