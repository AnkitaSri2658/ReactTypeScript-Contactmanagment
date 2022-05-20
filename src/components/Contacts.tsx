import React, { useEffect, useState } from "react";

import ContactItem from "./ContactItem";
import classes from "./Contacts.module.css";

interface ContactDetails {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  contact: number;
  department: string;
}

const Contacts: React.FC<{
  onEdit: (name: string) => void;
}> = (props) => {
  const [contacts, setContacts] = useState<ContactDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("https://reqres.in/api/users");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedContacts = [];

      //  for (const key in responseData.data) {
      for (let i = 0; i < responseData.data.length; i++) {
        loadedContacts.push({
          id: responseData.data[i].id,
          email: responseData.data[i].email,
          first_name: responseData.data[i].first_name,
          last_name: responseData.data[i].last_name,
          avatar: responseData.data[i].avatar,
          contact: responseData.data[i].contact || "0305683294136",
          department: responseData.data[i].department || "Sales",
        });
      }

      setContacts(loadedContacts);
      setIsLoading(false);
    };

    fetchContacts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.ContactsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.ContactsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const contactList = contacts.map((contact) => (
    <ContactItem
      key={contact.id}
      id={contact.id}
      email={contact.email}
      first_name={contact.first_name}
      last_name={contact.last_name}
      avatar={contact.avatar}
      contact={contact.contact}
      department={contact.department}
      onEdit={props.onEdit}
    />
  ));

  return (
    <div className={classes.card}>
      <table className={classes.Contacts}>{contactList}</table>
    </div>
  );
};

export default Contacts;
