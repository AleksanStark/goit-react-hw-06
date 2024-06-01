import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const inputValue = useSelector(selectNameFilter);
  // Применяем фильтр к списку контактов
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const checkFilteredArray =
    filteredContacts.length > 0 ? filteredContacts : contacts;

  return (
    <ul className={css.contact_list}>
      {checkFilteredArray.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
