import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./theme/defaultTheme"
import { GlobalStyle } from "./theme/global"
import { Layout } from "./components/Layout"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Layout/>
    </ThemeProvider>
  )
}

export default App
