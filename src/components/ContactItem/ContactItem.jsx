import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';

import { Container, Item, Button } from './ContactItem.styled';

export const Contact = ({ name, phone, id }) =>{
  const dispatch = useDispatch();
  const deleteCont = () => dispatch(delContact(id));
  return (
    <Container>
      <Item>
        {name} :  {phone}
      </Item>
      <Button type="button" onClick={deleteCont}>
        Delete 🗑
      </Button>
    </Container>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
