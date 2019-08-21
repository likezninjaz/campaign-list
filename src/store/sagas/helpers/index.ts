import { call, put } from 'redux-saga/effects';

export function* fetchDataWorker(
  fetchEntity: any,
  req: any,
  {
    success,
    failure
  }: any,
) {

  try {
    const data = yield (call as any)(fetchEntity, req);
    yield put(success(data));
  }
  catch (error) {
    yield put(failure());
  }
}
