import { INITIAL_STATE_GAME } from "./gameHelper";
export function saveGame(initialGame) {
  window.localStorage.setItem("initialGame", JSON.stringify(initialGame));
}

export function resetGame() {
  window.localStorage.removeItem("initialGame");
  return INITIAL_STATE_GAME;
}
