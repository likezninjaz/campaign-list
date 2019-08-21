import { call, take } from 'redux-saga/effects';

import { network } from '../../services/network';
import { fetchDataWorker } from "./helpers";
import { getMainData } from '../actions/main';
import { mainConstants } from '../constants';

export function* getMainDataWatcher() {

  while(true) {
    yield take(mainConstants.GET_MAIN_DATA.REQUEST);
    yield (call as any)(
      fetchDataWorker,
      network.get,
      `http://www.mocky.io/v2/5d5cfa10330000770057b5c5`,
      getMainData
    )
  }
}
