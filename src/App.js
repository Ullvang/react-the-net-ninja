import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "/";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"Hello"}</p>
        <p>{[1, 2, 3, 4, 5, "test"]}</p>
        <p>{Math.random() * 10 ** 17}</p>

        <a href={link}>Link</a>
      </div>
    </div>
  );
}

export default App;
