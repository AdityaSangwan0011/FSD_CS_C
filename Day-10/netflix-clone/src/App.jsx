import MoviesList from "./MovieList";

const App = () => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Netflix Clone App
      </h1>
      <MoviesList />
    </div>
  );
};

export default App;
