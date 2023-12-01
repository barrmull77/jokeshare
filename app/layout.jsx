import "@styles/globals.css";

import Nav from '@components/Nav';
import Provider from "@components/Provider";

export const metadata = {
  title: "JokeShare",
  description: "Discover & Share jokes",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon/favicon.svg"></link>
    </head>
    <body>
    <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>

    </body>
  </html>
);

export default RootLayout;