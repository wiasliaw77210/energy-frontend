import React, { PropsWithChildren, useReducer, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

export interface IClient {
  userID: string;
  bearer: string;
}

type TClientAction = {
  type: 'UPDATE' | 'CLEAR';
  payload: IClient;
};

type TClientDispatch = (state: IClient, action: TClientAction) => IClient;

export const ClientStateContext = React.createContext<IClient>({
  userID: '',
  bearer: '',
});

export const ClientDispatchContext = React.createContext<
  React.Dispatch<TClientAction>
>(null);

const reducer: TClientDispatch = (
  state: IClient,
  action: { type: string; payload: IClient },
) => {
  switch (action.type) {
    case 'UPDATE':
      return action.payload;
    case 'CLEAR':
      return { userID: '', bearer: '' };
    default:
      throw new Error('Undefined Error');
  }
};

export const ClientProvider: React.FC = (props: PropsWithChildren<{}>) => {
  const { pathname } = useRouter();
  const [userData, userDispatch] = useReducer(reducer, {
    userID: '',
    bearer: '',
  });

  useEffect(() => {
    const user: IClient = JSON.parse(localStorage.getItem('BEMS_user'));
    if (user) {
      Router.push('/login');
    } else {
      userDispatch({
        type: 'UPDATE',
        payload: user,
      });
      Router.push(pathname);
    }
  }, []);

  return (
    <ClientDispatchContext.Provider value={userDispatch}>
      <ClientStateContext.Provider value={userData}>
        {props.children}
      </ClientStateContext.Provider>
    </ClientDispatchContext.Provider>
  );
};
