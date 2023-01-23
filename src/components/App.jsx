import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm }  from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter }  from './Filter/Filter';
import { Loader } from './Loader/Loader';


import { Container, Title, Empty } from './App.styled';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      {isLoading && <Loader />}
      <Filter />
      {contacts.length > 0 && (
        <>
          <ContactsList />
        </>
      )}
      {isLoading && !error && <h4>Request in progress...</h4>}
      {error && <h2>ERROR...</h2>}
      {contacts.length <= 0 && !error && !isLoading && (      
        <Empty>Sorry. Your phonebok is empty.</Empty>
      )}
      <ToastContainer position="top-center" reverseOrder={false}  />
    </Container>
  );
};
