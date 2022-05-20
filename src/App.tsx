import React, { useState } from "react";
import NewContact from "./components/NewContact";
import Contacts from "./components/Contacts";
import Header from "./components/Layout/Header";
import Sidenav from "./components/Layout/Sidenav";
import EditContact from "./components/EditContact";

function App() {
  const [showEditContact, setShowEditContact] = useState(false);
  const [name, setname] = useState("");

  const handleSubmit = () => {
    setShowEditContact(false);
  };
  const handleCancel = () => {
    setShowEditContact(false);
  };
  const handleEdit = (name: string) => {
    setname(name);
    setShowEditContact(true);
  };

  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <React.Fragment>
      <Sidenav />
      <Header />
      <main>
        <NewContact onSearch={handleSearch} />
        {showEditContact && (
          <EditContact
            onSubmit={handleSubmit}
            name={name}
            onCancel={handleCancel}
          />
        )}
        <Contacts onEdit={handleEdit} />
      </main>
    </React.Fragment>
  );
}

export default App;
