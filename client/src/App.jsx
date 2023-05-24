import styled, { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { darkTheme, lightTheme } from './util/Theme'
import Signin from './pages/Signin.jsx'
import Video from './pages/Video.jsx'

import './App.css'
import { useState } from 'react'
const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7.5;
  background-color: ${(props) => props.theme.bg};
`

const Wrapper = styled.div`
  padding: 20px 40px;
`
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar></Navbar>
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="video">
                      <Route path=":id" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
