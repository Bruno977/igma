import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyle } from './theme/global';
import { Layout } from './components/Layout';
import { UserContextProvider } from './Context/UserContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserContextProvider>
        <Layout />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
