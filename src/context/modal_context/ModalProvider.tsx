import React, { createContext, ReactNode, useState } from "react";
import { ModalModel } from "../../domain/ModalInterface";
import { modalList } from "../../data/ModalList";

// Create the context
export const ModalContext = createContext<ModalProviderProps | null>(null);

interface ModalProviderProps {
  data: ModalModel[];
  updateList: (itemId: string) => void;
}

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ModalModel[]>(modalList);

  const updateList = (itemId: string) => {
    setData((prevData) => {
      // Filter the list by excluding the item with the same modalId
      return prevData?.filter((element) => element.modalId !== itemId);
    });
  };

  return (
    <ModalContext.Provider value={{ data, updateList }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
