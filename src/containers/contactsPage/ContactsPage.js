import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = ({
  contacts,
  addContact,
  removeContact
}) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [rmIndex, setRmIndex] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };

  const rmHandleSubmit = (index) => {
    const rmIndex = index;
    removeContact(rmIndex);
    setRmIndex('');
  }

  useEffect(() => {
    const isDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name)
      if(found !== undefined){
        return true;
        }
        return false;
      }

      if(isDuplicate()){
        setDuplicate(true);
      } else {
        setDuplicate(false);
      }

  }, [name, contacts, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        contacts={contacts}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
        tiles={contacts}
        rmHandleSubmit={rmHandleSubmit}/>
      </section>
    </div>
  );
};