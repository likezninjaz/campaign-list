import { generateRequestTypes, IRequestGenerator } from "./helpers";

interface IMainConstants {
  GET_MAIN_DATA: IRequestGenerator,
}

export const mainConstants: IMainConstants = {
  GET_MAIN_DATA: generateRequestTypes('GET_MAIN_DATA')
};
