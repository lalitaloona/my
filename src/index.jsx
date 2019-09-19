import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import ApolloClientProvider from '@app/components/Apollo/ApolloClientProvider';
import { RootRoutes } from '@app/routes';

import theme from './theme/theme.json';
import store from './redux';
import './styles.scss';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Root = () => (
  <ApolloClientProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <RootRoutes />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  </ApolloClientProvider>
);

render(
  <Root store={store} />,
  document.querySelector('.root'),
);
