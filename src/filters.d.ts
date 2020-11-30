/**
 * LAVALINK DEV FEATURE
 */
import { EqualizerBand } from "./misc";

export interface Filters {
  equalizer?: EqualizerBand[];
  timescale?: TimescaleFilter | null;
  tremolo?: TremoloFilter | null;
  volume?: number;
  karaoke?: KaraokeFilter | null;
}

export type EqualizerFilter = EqualizerBand[];

export type VolumeFilter = number;

export interface TimescaleFilter {
  pitch?: number;
  rate?: number;
  speed?: number;
}

export interface TremoloFilter {
  depth?: number;
  frequency?: number;
}

export interface KaraokeFilter {
  level?: number;
  monoLevel?: number;
  filterBand?: number;
  filterWidth?: number;
}
