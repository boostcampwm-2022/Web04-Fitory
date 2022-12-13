/* eslint-disable no-param-reassign */
import create from "zustand";
import produce from "immer";

interface ModalList {
  [key: string]: boolean;
}

interface ModalState {
  modalList: ModalList;
  setModalList: (key: string) => void;
  openModal: (key: string) => void;
  closeModal: () => void;
}

const modalStore = create<ModalState>((set) => ({
  modalList: {},
  setModalList: (key: string) => {
    set(
      produce(({ modalList }: ModalState) => {
        modalList[key] = false;
      }),
    );
  },
  openModal: (key: string) => {
    set(
      produce(({ modalList }: ModalState) => {
        modalList[key] = true;
      }),
    );
  },
  closeModal: () => {
    set(
      produce(({ modalList }: ModalState) => {
        Object.keys(modalList).forEach((key) => {
          modalList[key] = false;
        });
      }),
    );
  },
}));

export default modalStore;
