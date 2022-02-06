import Send from '.';

export const getInfo = async () => {
  const res = await Send.get('/info');
  return res;
};

// 수정 예정: ESLint로 인해 post 임시로 만들어 둠
export const postInfo = async () => {
  const req = await Send.post('/info');
  return req;
};
