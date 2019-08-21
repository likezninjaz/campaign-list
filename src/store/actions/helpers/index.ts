const act = (type: string, payload?: any) => ({
  type,
  payload
});

export const getFetchActions = (constant: any) => ({
  request: (req?: any) => act(constant.REQUEST, req),
  success: (res: any) => act(constant.SUCCESS, res),
  failure: (res?: any) => act(constant.FAILURE, res)
});
