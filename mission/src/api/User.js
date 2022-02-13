import Send from '.';

export const getInfo = async () => {
  const res = await Send.get('/info');
  return res;
};

export const postInfo = async () => {
  const req = await Send.post('/info');
  return req;
};
