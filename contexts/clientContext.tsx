import React, { PropsWithChildren } from 'react';
import Router from 'next/router';

export interface IClient {
  user_id: string;
  bearer: string;
}

export interface IUpdate {
  onUpdate: (data: IClient) => void;
}

export const CtxContext = React.createContext<IClient & IUpdate>({
  user_id: '',
  bearer: '',
  onUpdate: () => {
    return;
  },
});

export class ClientProvider extends React.Component<
  PropsWithChildren<{}>,
  IClient
> {
  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      user_id: '',
      bearer: '',
    };
  }

  handleUpdate(data: IClient) {
    this.setState(data);
  }

  componentDidMount() {
    // fetch tokens
    const tempData: IClient = {
      user_id:
        '' !== this.state.user_id
          ? this.state.user_id
          : localStorage.getItem('BEMS_user_id') || '',
      bearer:
        '' !== this.state.user_id
          ? this.state.bearer
          : localStorage.getItem('BEMS_bearer') || '',
    };
    if ('' === tempData.user_id || '' === tempData.bearer) {
      Router.push('/login');
    } else {
      this.handleUpdate(tempData);
    }
  }

  render() {
    return (
      <CtxContext.Provider
        value={{
          ...this.state,
          onUpdate: this.handleUpdate,
        }}
      >
        {this.props.children}
      </CtxContext.Provider>
    );
  }
}

export const ClientConsumer = CtxContext.Consumer;
