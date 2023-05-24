import React from 'react'
import styled from 'styled-components'
import SubashTube from '../assets/logo.png'
// import HomeIcon from '@mui/icons-material/Home'
// import ExploreIcon from '@mui/icons-material/Explore'
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions'

// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
// import HistoryIcon from '@mui/icons-material/History'

// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
// import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
// import MovieIcon from '@mui/icons-material/Movie'
// import ArticleIcon from '@mui/icons-material/Article'
// import LiveTvIcon from '@mui/icons-material/LiveTv'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import SettingsIcon from '@mui/icons-material/Settings'
// import FlagIcon from '@mui/icons-material/Flag'
// import HelpIcon from '@mui/icons-material/Help'
// import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { Link } from 'react-router-dom'
const Container = styled.div`
  flex: 1.5;

  background-color: ${(props) => props.theme.bg};
  height: 100vh;
  color: ${(props) => props.theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow: auto;
`
const Wrapper = styled.div`
  padding: 16px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`

const Img = styled.img`
  height: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 4px 2px;
  font-family: 'poppins', sans-serif;

  &:hover {
    background-color: ${(props) => props.theme.bgLighter};
  }
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.2px solid ${(props) => props.theme.soft};
`

const Login = styled.div``
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={SubashTube} />
            SubashTube
          </Logo>
        </Link>
        <Item>Home</Item>
        <Item>Explore</Item>
        <Item>Subscriptions</Item>
        <Hr />
        <Item>Library</Item>
        <Item>History</Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{ textDecoration: 'none' }}>
            <Button>SIGN IN</Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF SUBASHTUBE</Title>
        {/* <Item>Music</Item>
        <Item>Sports</Item>
        <Item>Gaming</Item>
        <Item>Movies</Item>
        <Item>News</Item>
        <Item>Live</Item> */}
        <Hr />
        <Item>Settings</Item>
        <Item>Report</Item>
        <Item>Help</Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
