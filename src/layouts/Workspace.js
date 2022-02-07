import React from 'react';
import styled from 'styled-components';
import gravatar from 'gravatar';
import { useSelector } from 'react-redux';

const Workspace = () => {
  const userData = useSelector((state) => state.user.user);
  return (
    <Container>
      <Header>
        <RightMenu>
          <span>
            <img src={gravatar.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.email} />
          </span>
        </RightMenu>
      </Header>
    </Container>
  );
};

const Container = styled.div`

`;

const Header = styled.div`

`;

const RightMenu = styled.div`

`;

export default Workspace;
