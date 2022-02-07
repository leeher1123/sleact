import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import {
  Button, Form, Header, Input, LinkContainer,
} from '../LogIn';
import { auth } from '../../firebase/store';

const SignUp = () => {
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => {
    signup(email, password);
  };

  return (
    <Container>
      <Header>Sleact</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="이메일" {...register('email', { required: true })} />
        <Input type="password" placeholder="비밀번호" {...register('password', { required: true })} />
        <Button>회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요? &nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`

`;

export default SignUp;
