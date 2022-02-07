import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { auth } from '../../firebase/store';
import { Action } from '../../reducers/user';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        dispatch(Action.Creators.setUser(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const onSubmit = ({ email, password }) => {
    login(email, password);
    navigate('/workspace');
  };
  return (
    <Container>
      <Header>Sleact</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="이메일" {...register('email', { required: true })} />
        <Input type="password" placeholder="비밀번호" {...register('password', { required: true })} />
        <Button>로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요? &nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`

`;

export const Header = styled.div`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  width: 400px; // width 를 줘야 margin 이 생기므로 그때서야 가운데 정렬을 할 수 있음
  margin: 0 auto;
  max-width: 400px;
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 100%;
  margin-bottom: 12px;
  color: #fff;
  background-color: #4a154b;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transition: all 80ms linear;
  &:hover {
    background-color: rgba(74, 21, 75, 0.9);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const LinkContainer = styled.div`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default LogIn;
