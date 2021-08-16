import instance from '../instance';
export const demoServices = async () => {
  try {
    const res = await instance.get('/', );
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
