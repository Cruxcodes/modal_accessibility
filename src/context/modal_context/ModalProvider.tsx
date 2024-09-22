import React, { createContext, ReactNode, useState } from "react";
import { ModalModel } from "../../domain/ModalInterface";
import { modalList } from "../../data/ModalList";

// Create the context
export const ModalContext = createContext<ModalProviderProps | null>(null);

interface ModalProviderProps {
  data: ModalModel[];
  selectedData?: ModalModel | null;
  updateList: (itemId: string) => void;
  selectData: (selectedItem: ModalModel) => void;
}

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ModalModel[]>(modalList);
  const [selectedData, setSelectedData] = useState<ModalModel | null>();

  const updateList = (itemId: string) => {
    setData((prevData) => {
      return prevData?.filter((element) => element.modalId !== itemId);
    });
    if (itemId === selectedData?.modalId) {
      setSelectedData(null);
    }
  };

  const selectData = (selectedItem: ModalModel) => {
    setSelectedData(selectedItem);
  };

  return (
    <ModalContext.Provider
      value={{ data, selectedData, updateList, selectData }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
