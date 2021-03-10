import axios from 'axios';

const getUsers = (category) => {
  return axios.get(`http://localhost:3000/${category}`);
};

export { getUsers };
