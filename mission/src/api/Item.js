import Send from '.';

// get item
export const getItem = async () => {
  const res = await Send.get('/item');
  return res;
};

export const getItemByItemNo = async (itemNo) => {
  const res = await Send.get(`/item/${itemNo}`);
  return res;
};

export const getItemWish = async () => {
  const res = await Send.get('/wish');
  return res;
};

export const getCartItem = async () => {
  const res = await Send.get('/cart');
  return res;
};
