import { Fragment } from "react";
import classes from "./Sidenav.module.css";
import logoIcon from "../../assets/logo.svg";
import pointofsalesIcon from "../../assets/pointOfSale.svg";
import invoiceIcon from "../../assets/invoice.svg";
import contactIcon from "../../assets/contacts.svg";
import inventoryIcon from "../../assets/inventory.svg";
import reportIcon from "../../assets/reports.svg";
import settingIcon from "../../assets/settings.svg";
import imprintIcon from "../../assets/imprint.svg";

const Sidenav = () => {
  return (
    <Fragment>
      <nav className={classes.sidenav}>
        <div className={classes.logo}>
          <img src={logoIcon} alt="logo" />
        </div>
        <ul>
          <li>
            <img src={pointofsalesIcon} />
            Point of sales
          </li>
          <li>
            <img src={invoiceIcon} />
            Invoice & returns
          </li>
          <li className={classes.active}>
            <img src={contactIcon} />
            Contacts
          </li>
          <li>
            <img src={inventoryIcon} />
            Inventory
          </li>
          <li>
            <img src={reportIcon} />
            Reports
          </li>
          <li>
            <img src={settingIcon} />
            Settings
          </li>
          <li>
            <img src={imprintIcon} />
            Imprint
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidenav;
