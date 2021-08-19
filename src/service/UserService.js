import axios from "axios";
import { baseURL } from "../constants/constant";

class CategoryService {
   
  async getCategory() {
    try {
      const URL = `${baseURL}/category/list`;
      const result = await axios.get(URL);
      return result;
    } catch (error) {
      console.error(error);
    }
  };
}

export default new CategoryService();
