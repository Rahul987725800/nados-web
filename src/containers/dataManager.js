import { demoServices } from '../services/demoService';

export default getDemoService = () => {
  const data = await demoServices();
  return data;
};
