import { create } from "zustand";
import { players, type PlayerData } from "./players";

type PlayerStoreType = {
    players: PlayerData[]
}

export const playerStore = create<PlayerStoreType>((set) => ({
    players: players
}))