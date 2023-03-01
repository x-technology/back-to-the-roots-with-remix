import movies from "../../../lib/mocks/movies";
export default (req, res) => {
  res.status(200).json({
    movie: movies.find(({ id }) => id === Number(req.query.id)),
  });
};
