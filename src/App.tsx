import {ThemeProvider} from "styled-components"
import {BrowserRouter} from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import {GlobalStyle} from "./styles/global"
import { Router } from "./Routes"
import { CartContextProvider } from "./context/CartContext"

function App() {

  return (
   
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <CartContextProvider >
            <Router/>
          </CartContextProvider>
        </BrowserRouter>
      </ThemeProvider>
   
  )
}

export default App
