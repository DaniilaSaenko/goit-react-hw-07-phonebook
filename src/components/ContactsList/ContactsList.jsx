import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { sort } from './sortContacts';

import { Contact } from '../ContactItem/ContactItem';
import { Container } from './ContactsList.styled';


export const ContactsList = () =>  {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  return (
    <Container>
      {sort(contacts)
        .filter(contact => {
          return filter
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : true;
        })
        .map(({ id, name, phone }) => {
          return <Contact key={id} name={name} phone={phone} id={id} />;
        })}
    </Container>
  );
};
