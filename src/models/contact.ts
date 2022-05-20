class Contact {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  contact: number;
  department: string;

  constructor(
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    contact: number,
    department: string
  ) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
    this.contact = contact;
    this.department = department;
  }
}

export default Contact;
