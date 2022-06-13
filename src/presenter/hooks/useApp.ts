import { useContext } from "react";
import { AppContext } from "~/presenter/context/App";
import type * as AppType from "~/presenter/context/App";

type UseApp = () => AppType.State;
export const useApp: UseApp = () => useContext(AppContext);
