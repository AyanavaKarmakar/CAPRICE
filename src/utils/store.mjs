import create from "zustand";

// ! Fix later
export const SheetDataJSONStore = create((set) => ({
  sheetDataJSON: [],
  setSheetDataJSON: (updatedState) =>
    set((state) => ({
      sheetDataJSON: (state.sheetDataJSON = updatedState),
    })),
}));
