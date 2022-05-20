import React, { useRef } from "react";
import classes from "./NewContact.module.css";

const NewContact: React.FC<{
  onSearch: (searchTerm: string) => void;
}> = (props) => {
  const ContactTextInputRef = useRef<HTMLInputElement>(null);

  const AddContactHandler = (event: React.FormEvent) => {
    alert("Add contact functionality needs to added here");
  };
  const searchContactHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value && props.onSearch(event.target.value);
  };
  return (
    <form className={classes.form}>
      <input
        type="text"
        id="text"
        ref={ContactTextInputRef}
        placeholder="Search user"
        onChange={searchContactHandler}
      />
      <button onClick={AddContactHandler}>Add</button>
    </form>
  );
};

export default NewContact;
