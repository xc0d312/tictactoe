import { INITIAL_STATE_GAME } from "./gameHelper";
export function saveGameStorage(initialGame) {
  window.localStorage.setItem("initialGame", JSON.stringify(initialGame));
}

export function resetGameStorage() {
  window.localStorage.removeItem("initialGame");
  return INITIAL_STATE_GAME;
}

export function getGameStorage(initialGame) {
  const fromStorage = window.localStorage.getItem("initialGame", initialGame);
  return fromStorage ? JSON.parse(fromStorage) : false;
}
