export interface Pokemon {
  id: number;
  name: string;
  type1: string;
  type2: string;
  generation: string;
}

export interface AppState {
  pokmeon: Pokemon[];
}

export const initialAppState: AppState = {
  pokmeon: [],
};
