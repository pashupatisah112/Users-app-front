const axios = require("axios");

const axiosRequest = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  async getTotalUsersCount() {
    const response = await axiosRequest.get("/users/count");
    return response.data.data;
  },
  async getUsersList(total = 0) {
    let num = total;
    const response = await axiosRequest.get(`/users/list/${num}`);
    return response.data.data;
  },
  async getUserDetails(id) {
    const response = await axiosRequest.get(`/user/${id}`);
    return response.data.data;
  },
  async addUser(userData) {
    const response = await axiosRequest.post("/user/add", {
      userData: userData,
    });
    return response.data.data;
  },
  async updateUserData(userData) {
    const response = await axiosRequest.put(`/user/update/${userData.id}`, {
      userData: userData,
    });
    return response.data.data;
  },
  async deleteUserData(id) {
    const response = await axiosRequest.delete(`/user/delete/${id}`);
    return response.data.data;
  },
};
