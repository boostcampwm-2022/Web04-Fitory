import create from "zustand";

interface ModalState {
  isShowModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const modalStore = create<ModalState>((set) => ({
  isShowModal: false,
  openModal: () => set({ isShowModal: true }),
  closeModal: () => set({ isShowModal: false }),
}));

export default modalStore;