import movies from "./mocks/movies";
import reviews from "./mocks/reviews";
import users from "./mocks/users";

const withTimeout = (data, timeout = 5000) =>
  new Promise((resolve) => setTimeout(() => resolve(data), timeout));
export const getMovies = () => withTimeout(movies);
export const getReviews = () => withTimeout(reviews);
export const getUsers = () => withTimeout(users);
