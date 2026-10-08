import { create } from "zustand";
import { players, type PlayerData } from "./players";

type PlayerStoreType = {
    players: PlayerData[],
    sortByName: (direction: number)=>void
}

export const playerStore = create<PlayerStoreType>((set) => ({
    players: players,
    sortByName: (direction: number) => set((state) => ({
        players: direction > 0 ? [...state.players].sort((a, b) => a.name.localeCompare(b.name)) : [...state.players].sort((a, b) => b.name.localeCompare(a.name))
    }))
}))