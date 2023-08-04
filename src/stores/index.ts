import { createEffect, createEvent, createStore, forward } from "effector";
import axios from "axios";

export const togglePosition = createEvent<string>();

export const carPositions = createStore<string[]>([]).on(
  togglePosition,
  (state, position) =>
    state.includes(position)
      ? state.filter((p) => p !== position)
      : [...state, position]
);

export const fetchPositionsFx = createEffect<void, string[]>({
  async handler() {
    try {
      const response = await axios.get(
        "https://myfailemtions.npkn.net/b944ff/"
      );
      return response.data;
    } catch (error) {
      console.log("Failed to fetch positions:", error);
      throw error;
    }
  },
});

export const sendPositionsFx = createEffect<string[], void>({
  async handler(positions) {
    try {
      await axios({
        method: "POST",
        url: "https://myfailemtions.npkn.net/b944ff",
        data: positions,
      });
    } catch (error) {
      console.error("Failed to send positions to API:", error);
      throw error;
    }
  },
});

export const activeButtons = createStore<string[]>([]);

activeButtons.on(fetchPositionsFx.doneData, (_, positions) => positions);

forward({
  from: carPositions.updates,
  to: sendPositionsFx,
});
