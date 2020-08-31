import {WAY_TO_MOVE} from "./wayTypes";

export const wayToMove = (way) => {
  return {
      type: WAY_TO_MOVE,
      way: way
  }
};