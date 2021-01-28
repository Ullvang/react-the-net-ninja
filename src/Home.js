const Home = () => {
  const handleClick = (e) => {
    console.log(e.target);
    console.log("Hello ninjas");
  };

  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("yoshi")}>Click me again</button>
    </div>
  );
};

export default Home;
