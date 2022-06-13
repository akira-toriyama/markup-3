import React, { createContext, useState } from "react";

export type State = {
  showMenu: boolean;
  dispatch: {
    setShowMenu: (p: Pick<State, "showMenu">) => void;
  };
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AppContext = createContext<State>(undefined!);

const useApp = () => {
  const [s, d] = useState<Omit<State, "dispatch">>({ showMenu: false });

  return {
    ...s,
    dispatch: {
      setShowMenu: (p: Pick<State, "showMenu">) =>
        d((state) => ({ ...state, showMenu: p.showMenu })),
    },
  };
};

export const App: React.FC<{ children: React.ReactNode }> = (props) => (
  <AppContext.Provider value={{ ...useApp() }}>
    {props.children}
  </AppContext.Provider>
);
