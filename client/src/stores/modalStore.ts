import create from "zustand";
import { RefObject } from "react";

interface ModalState {
  modalRef: RefObject<HTMLDivElement> | null;
  isShowModal: boolean;
  setModalRef: (targetRef: RefObject<HTMLDivElement>) => void;
  openModal: () => void;
  closeModal: () => void;
}

const modalStore = create<ModalState>((set) => ({
  modalRef: null,
  isShowModal: false,
  setModalRef: (targetRef: RefObject<HTMLDivElement>) => set({ modalRef: targetRef }),
  openModal: () => set({ isShowModal: true }),
  closeModal: () => set({ isShowModal: false }),
}));

export default modalStore;
