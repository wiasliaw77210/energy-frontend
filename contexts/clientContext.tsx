import React, { PropsWithChildren } from 'react';
import Router from 'next/router';

interface IClient {
  userID: string;
  bearer: string;
}

interface IClientContext {
  user: IClient;
  dispatch: (action: IClientAction) => any;
}

interface IClientAction {
  type: 'UPDATE' | 'CLEAR';
  payload: IClient | null;
}

export const ClientStateContext = React.createContext<IClientContext>(null);

export class ClientProvider extends React.Component<
  PropsWithChildren<{}>,
  IClientContext
> {
  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.state = {
      user: null,
      dispatch: this.handleDispatch,
    };
  }

  componentDidMount() {
    const storageData: IClient = JSON.parse(localStorage.getItem('BEMS_user'));
    if (storageData) {
      this.setState({ user: storageData });
      Router.push(Router.pathname);
    } else {
      Router.push('/login');
    }
  }

  handleDispatch = (action: IClientAction) => {
    switch (action.type) {
      case 'CLEAR': {
        return this.setState({ user: { userID: '', bearer: '' } });
      }
      case 'UPDATE': {
        return this.setState({ user: action.payload });
      }
      default: {
        throw new Error('Unknown Action Type');
      }
    } // tslint:disable-next-line
  };

  render() {
    return (
      <ClientStateContext.Provider value={this.state}>
        {this.props.children}
      </ClientStateContext.Provider>
    );
  }
}
