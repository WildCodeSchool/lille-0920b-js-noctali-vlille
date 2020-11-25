import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const Wrapper = styled.div`
  height: 400px;
  width: 500px;
  background-color: #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline;
  flex-direction: column;
  color: #555;
`;

const Input = styled.input`
  width: 80px;
  height: 30px;
  margin: 5px;
  color: white;
  background-color: rgb(104, 159, 56);
  font: bold 13px Arial;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  position: absolute;
  right: -40px;
  bottom: 320px;
  font: bold 13px Arial;
  background: #f5f5f5;
  color: #555;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  background: #eee;
  resize: none;
  height: 100px;
  width: 400px;
  position: relative;
  top: -4%;
  right: 1%;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background-color: rgb(104, 159, 56);
  padding: 30px;
`;

const Rate = styled.div`
  margin-top: 20px;
`;

const starRating = {
  size: 40,
  count: 5,
  value: 0,
  color: "white",
  activeColor: "rgb(104, 159, 56)",
};

const Modal = ({ avis, closed }) =>
  avis ? (
    <React.Fragment>
      <Wrapper>
        <Header>Avis</Header>
        <Form>
          <Textarea placeholder="Dites aux autres utilisateurs ce que vous pensez de cette application"></Textarea>
          <Input type="submit" value="Envoyer" />
          <Input type="reset" value="Annuler" />

          <Button onclick={closed}>
            <span>&times;</span>
          </Button>
          <Rate>
            <ReactStars {...starRating} />
            <p>Veuillez indiquer une note</p>
          </Rate>
        </Form>
      </Wrapper>
    </React.Fragment>
  ) : null;

export default Modal;
