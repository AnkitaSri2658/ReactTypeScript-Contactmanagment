import classes from "./ContactItem.module.css";

const ContactItem: React.FC<{
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  contact: number;
  department: string;
  onEdit: (name: string) => void;
}> = (props) => {
  const handleEditonItem = () => {
    props.onEdit(props.first_name + " " + props.last_name);
  };
  return (
    <tr className={classes.item} id={props.id} onClick={handleEditonItem}>
      <td>
        <img src={props.avatar} />

        <span className={classes.name}>
          {props.first_name + " " + props.last_name}
        </span>
      </td>
      <td>
        <span>{props.department}</span>
      </td>
      <td>
        <span>{props.email}</span>
      </td>
      <td>
        <span>{props.contact}</span>
      </td>
    </tr>
  );
};

export default ContactItem;
