import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={!showAdd ? "green" : "black"}
          text={!showAdd ? "Add" : "Close"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// css in js ex:
//  use by adding style tag to el and referencing the const
// ex: style={headingStyle}
// const headingStyle = {
//   backgroundColor: "#000",
// };
export default Header;
