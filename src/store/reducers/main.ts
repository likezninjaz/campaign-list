import { Reducer } from "redux";

import { mainConstants } from '../constants';
import { IData } from '../../containers/Main'

interface IMainReducer {
  mainData: IData[],
  isDataLoading: boolean,
  isDataLoadingFailure: boolean
} 

const inititalState = {
  mainData: [],
  isDataLoading: false,
  isDataLoadingFailure: false
};

export const main: Reducer<IMainReducer, any> = (state = inititalState, action) => {

  switch (action.type) {

    case mainConstants.GET_MAIN_DATA.REQUEST:
      return {
        ...state,
        isDataLoading: true
      };
    
    case mainConstants.GET_MAIN_DATA.SUCCESS:
      return {
        ...state,
        mainData: action.payload.data,
        isDataLoading: false
      };

    case mainConstants.GET_MAIN_DATA.FAILURE:
      return {
        ...state,
        isDataLoading: false,
        isDataLoadingFailure: true
      };

    default:
      return state;
  }
};
