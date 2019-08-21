import { getFetchActions } from "./helpers";

import {
  mainConstants
} from '../constants';

export const getMainData = getFetchActions(mainConstants.GET_MAIN_DATA);