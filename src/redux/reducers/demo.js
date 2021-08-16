const initialState = {
  data: 0,
};

const demo = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE':
      return state;
    default:
      return state;
  }
};

export default demo;
