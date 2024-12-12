import { CSSProperties, FC } from "react";
import MovieItem, { MovieItemProps } from "../atoms/MovieItem";

const movieListStyles: CSSProperties = {
  backgroundColor: "#ececec",
  height: "100%",
  paddingTop: "1em",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

type MovieListProps = {
  movieItemList: Omit<MovieItemProps, "onMovieClick">[];
  selectedMovieId: string;
  onMovieClick: (id: string) => void;
};

const MovieList: FC<MovieListProps> = ({
  movieItemList,
  selectedMovieId,
  onMovieClick,
}) => {
  return (
    <div style={movieListStyles}>
      {movieItemList.map(({ id, title }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            title={title}
            selected={id === selectedMovieId}
            onMovieClick={onMovieClick}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
