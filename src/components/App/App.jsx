import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

// const getContacts = () => {
//   const savedContacts = localStorage.getItem("contacts");
//   return savedContacts !== null ? JSON.parse(savedContacts) : [];
// };

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </div>
  );
};
export default App;
