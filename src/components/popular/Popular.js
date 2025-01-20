import { getMovieByPath } from "@/utils/movieClient";

const Popular = async () => {
  console.log(await getMovieByPath("/movie/popular"))
  return (
    <div>
      <h2>Les plus populaires</h2>
      <div></div>
    </div>
  );
}

export default Popular
