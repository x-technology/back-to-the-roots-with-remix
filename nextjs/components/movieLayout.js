import useSWR from "swr";
import Layout from "./layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MovieLayout({ children, movieId }) {
  const { data, error } = useSWR(`/api/movies/${movieId}`, fetcher);
  console.log(data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        Movie: {JSON.stringify(data)}
        {children}
      </Layout>
    </>
  );
}
