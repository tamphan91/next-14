import { Person } from "@/app/dashboard/make-data";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  jobs: Person[];
  filteredJobs: Person[];
  filteredValue: { statuses: any[]; jobName: string };
};

type Actions = {
  setJobs: (value: Person[]) => void;
  setFilteredJobs: (value: Person[]) => void;
  addStatus: (value: any) => void;
  removeStatus: (value: any) => void;
  setJobName: (value: any) => void;
  reset: () => void;
};

const initialState: State = {
  jobs: [],
  filteredJobs: [],
  filteredValue: { statuses: [], jobName: "" },
};

export const useBearStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,
      setJobs: (value: Person[]) =>
        set((state) => {
          state.jobs = value;
        }),
      setFilteredJobs: (value: Person[]) =>
        set((state) => {
          state.filteredJobs = value;
        }),
      addStatus: (value) =>
        set((state) => {
          state.filteredValue.statuses.push(value);
        }),
      removeStatus: (value) =>
        set((state) => {
          state.filteredValue.statuses.filter((x) => x != value);
        }),
      setJobName: (value) =>
        set((state) => {
          state.filteredValue.jobName = value;
        }),
      reset: () => {
        set(initialState);
      },
    })),
    { name: "bearStore" }
  )
);
