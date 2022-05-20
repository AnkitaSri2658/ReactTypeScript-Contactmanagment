import classes from "./Header.module.css";
import hamburgerIcon from "../../assets/hamburger.svg";
import lockIcon from "../../assets/lock.svg";
import dropdownIcon from "../../assets/dropdown.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <img src={hamburgerIcon} alt="hamburger Icon" />
        </li>
        <li>
          <span className={classes.user}>Users</span>{" "}
        </li>
      </ul>
      <ul className={classes.rightalignUL}>
        <li>
          <img className={classes.lockIco} src={lockIcon} alt="lock icon" />
        </li>
        <li>Patricia kasse </li>
        <li>
          <img src={dropdownIcon} alt="drop-down icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
