export type IRequestGenerator = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE';

export const generateRequestTypes = (action: any) =>
  [REQUEST, SUCCESS, FAILURE].reduce(
    (acc: any, type) => {
      acc[type] = `${action}_${type}`;

      return acc;
    },
    {}
  );
