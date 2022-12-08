import { atom } from "recoil"

export const currentTrackedIdState = atom({
  key: 'currentTrackedIdState',
  default: null
})

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false
})