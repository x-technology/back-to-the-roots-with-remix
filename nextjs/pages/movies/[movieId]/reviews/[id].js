import { useRouter } from "next/router";
import utilStyles from "../../../../styles/utils.module.css";
import { getReviews } from "../../../../lib/api";
import MovieLayout from "../../../../components/movieLayout";

export default function Review({ reviewData }) {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{reviewData.score}</h1>
      <div className={utilStyles.lightText}>{reviewData.text}</div>
    </article>
  );
}

Review.getLayout = function getLayout(page) {
  const router = useRouter();
  const { movieId } = router.query;

  return <MovieLayout movieId={movieId}>{page}</MovieLayout>;
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          movieId: "1",
          id: "1",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const reviews = await getReviews();
  const reviewData = reviews.find(({ id }) => id === Number(params.id));
  return {
    props: {
      reviewData,
    },
  };
}
