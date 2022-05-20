import React, { useState } from "react";
import classes from "./EditContact.module.css";

const EditContact: React.FC<{
  name: string;
  onSubmit: () => void;
  onCancel: () => void;
}> = (props) => {
  const firstNameInputRef = React.useRef<HTMLInputElement>(null);
  const lastNameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const contributionInputRef = React.useRef<HTMLInputElement>(null);
  const isActiveInputRef = React.useRef<HTMLInputElement>(null);

  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const updatedDetails = {
      first_name: firstNameInputRef.current?.value,
      last_name: lastNameInputRef.current?.value,
      gender: gender,
      email: emailInputRef.current?.value,
      department: department,
      contribution: contributionInputRef.current?.value,
      active: isActiveInputRef.current?.checked,
    };
    alert(JSON.stringify(updatedDetails));
    props.onSubmit();
  };

  return (
    <div className={classes.model}>
      <div className={classes.card}>
        <h3>Edit Contact for "{props.name}"</h3>
        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <label htmlFor="first_name"> First Name </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              ref={firstNameInputRef}
              placeholder="Enter first name here"
              required
            />
          </div>

          <div>
            <label htmlFor="last_name"> Last Name </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              ref={lastNameInputRef}
              placeholder="Enter last name here"
            />
          </div>
          <div className={classes.fullWidth}>
            <label htmlFor="gender" className={classes.fullWidth}>
              {" "}
              Gender{" "}
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              onChange={handleGenderChange}
            />
            <label>Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleGenderChange}
            />
            <label>Female</label>
            <input
              type="radio"
              id="others"
              name="gender"
              value="Others"
              onChange={handleGenderChange}
            />
            <label>Others</label>
          </div>

          <div className={classes.fullWidth}>
            <label htmlFor="email"> Email </label>
            <input
              className={classes.fullWidth}
              type="email"
              id="email"
              name="email"
              ref={emailInputRef}
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="departmt"> Department </label>
            <select
              id="department"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            >
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="IT">IT</option>
              <option value="Support">Support</option>
            </select>
          </div>

          <div>
            <label htmlFor="contribution"> Contribution </label>
            <input
              type="number"
              id="contribution"
              name="contribution"
              ref={contributionInputRef}
              placeholder="eg 4.870,36 Euro"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              ref={isActiveInputRef}
            />
            <label htmlFor="contribution"> isActive </label>
          </div>
          <div className={classes.formFooter}>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit" className={classes.submit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
