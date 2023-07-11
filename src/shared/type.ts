export interface TodoType {
  id: number;
  text: string;
  checked: boolean;
}

export type ActionType = { type: "INSERT"; todo: TodoType } | { type: "REMOVE" | "TOGGLE"; id: number };
