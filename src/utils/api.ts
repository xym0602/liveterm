import axios from 'axios';

const GITHUB_USER = 'xym0602';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${GITHUB_USER}/repos`,
  );
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};
