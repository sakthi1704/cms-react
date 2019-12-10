import React from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import GetUser from "./getUser";
import classes from "./Movies.module.css";

const SearchMenu = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <GetUser key={i} item={m} />);
  }

  return (
 
      <Modal>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
         {cards}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default SearchMenu;
