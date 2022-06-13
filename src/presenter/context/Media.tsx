import React, { createContext } from "react";
import { useMedia } from "react-use";

const device = {
  pc: "(min-width: 900px)",
} as const;

export type State = {
  media: "pc" | "sp";
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const MediaContext = createContext<State>(undefined!);

export const Media: React.FC<{ children: React.ReactNode }> = (props) => (
  <MediaContext.Provider value={{ media: useMedia(device.pc) ? "pc" : "sp" }}>
    {props.children}
  </MediaContext.Provider>
);
