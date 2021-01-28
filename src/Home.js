import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("luigi");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("mario");
    setAge(age + 1);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <p>{age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
