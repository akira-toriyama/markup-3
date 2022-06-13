import { useContext } from "react";
import { MediaContext } from "~/presenter/context/Media";
import type { State as Props } from "~/presenter/context/Media";

type UseMedia = () => Props;
export const useMedia: UseMedia = () => useContext(MediaContext);
