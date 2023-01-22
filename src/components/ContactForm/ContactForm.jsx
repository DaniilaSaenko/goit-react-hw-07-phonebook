import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { Label, Form, Input, Button } from './ContactForm.styled';


export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name, phone };
    dispatch(addContact(newContact));
    reset();
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
