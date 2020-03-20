import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { runtimeConfig } from '../../utils';

const Container = styled.div<{ isPop: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isPop ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.8);
  z-index: 1000;
`;

const Popup = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 60px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  color: #575757;
`;

const Input = styled.input<{ isErr?: boolean }>`
  border: ${props => (props.isErr ? '2px solid #ee5500' : '2px solid #c7c7c7')};
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  font-size: 25px;
  letter-spacing: 5px;
  padding: 0 5px;
`;

const Button = styled.button<{ color: string; bg: string }>`
  background-color: ${props => props.bg};
  border: 0px;
  border-radius: 5px;
  color: ${props => props.color};
  font-size: 20px;
  padding: 10px;
  margin: 10px 10px 10px 0;
  cursor: pointer;
`;

interface IProps {
  isPop: boolean;
  updatePop: () => void;
}

export default ((props: IProps) => {
  const [oldpw, setOldpw] = useState<string>('');
  const [newpw, setNewpw] = useState<string>('');
  const [checkpw, setCheckpw] = useState<string>('');
  const [isErr, setErr] = useState<boolean>(false);
  const router = useRouter();
  const changeOldPw = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
    setOldpw(event.currentTarget.value);
  };
  const changeNewPw = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewpw(event.currentTarget.value);
  };
  const changeCheckPw = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCheckpw(event.currentTarget.value);
    preCheck(event.currentTarget.value);
  };
  const preCheck = (src: string) => {
    if (newpw !== src) {
      setErr(true);
    } else {
      setErr(false);
    }
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { bearer } = JSON.parse(localStorage.getItem('BEMS_user'));
    const bodyData = {
      original_passwd: oldpw,
      new_passwd: newpw,
    };
    const response = await fetch(`${runtimeConfig.MAIN_HOST}/user`, {
      method: 'PUT',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`,
      }),
      body: JSON.stringify(bodyData),
    });
    if (response.status === 200) {
      router.push('/login');
    }
  };
  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.updatePop();
    setOldpw('');
    setNewpw('');
    setCheckpw('');
  };
  return (
    <Container isPop={props.isPop}>
      <Popup>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="oldpw">請輸入舊密碼</Label>
          <Input id="oldpw" type="password" onChange={changeOldPw} />
          <Label htmlFor="newpw">請輸入新密碼</Label>
          <Input id="newpw" type="password" onChange={changeNewPw} />
          <Label htmlFor="checkpw">確認密碼</Label>
          <Input
            id="checkpw"
            type="password"
            isErr={isErr}
            onChange={changeCheckPw}
          />
          <div>
            <Button color="#fff" bg="#39625e" type="submit">
              更改密碼
            </Button>
            <Button
              color="#575757"
              bg="transparent"
              type="button"
              onClick={handleClick}
            >
              取消
            </Button>
          </div>
        </Form>
      </Popup>
    </Container>
  );
}) as React.FC<IProps>;
