import "./navigation.css";
const Navigation = () => {
  const NAVIGATION = ["Home", "Explore", "Contact Us", "About Us"];
  return (
    <div>
      <ul className="navbar">
        {NAVIGATION.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navigation;
