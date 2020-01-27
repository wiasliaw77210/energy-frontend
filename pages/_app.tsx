import App from 'next/app';
import { ClientProvider } from '../contexts/clientContext';

class EnergyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ClientProvider>
        <Component {...pageProps} />
      </ClientProvider>
    );
  }
}

export default EnergyApp;
