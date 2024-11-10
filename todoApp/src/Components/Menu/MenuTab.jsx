import "./MenuTab.css";
import { Link, NavLink} from "react-router-dom";

const MenuTab = () => {
  return (
    <div className="menu">
      <NavLink to='/all'>All</NavLink>
      <NavLink to='/active'>Active</NavLink>
      <NavLink to='/completed'>Completed</NavLink>
    </div>
  );
};

export default MenuTab;

