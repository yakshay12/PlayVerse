import { NextPageContext } from "next"
import { getSession } from "next-auth/react"

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
// import useFavorites from "@/hooks/useFavorites";
//we are signout using home page
export async function getServerSideProps(context: NextPageContext) {      //protection for the Home route
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',         // redirect to login page
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  const { data: movies = [] } = useMovieList();
  // const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        {/* <MovieList title="My List" data={favorites} /> */}
      </div>
    </>
  )
}
