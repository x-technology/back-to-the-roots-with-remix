import movies from "../../lib/mocks/movies";
export default (req, res) => {
  console.log("movies");
  res.status(200).json({ movies });
};
