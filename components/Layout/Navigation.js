/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */
import withLanguage from 'apollo/hoc/withLanguage'
import React, { PureComponent } from 'react'
import { withApollo, compose } from 'react-apollo'
import { Menu, Container as SContainer, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'

const locale = {
  EN: {
    siteTitle: 'Ololos blog',
    aboutUs: 'About',
    map: 'Map',
    admin: 'Post administration',
    exit: 'Log out',
    login: 'Log in',
  },
  RU: {
    siteTitle: 'Ололось блог',
    aboutUs: 'О блоге',
    map: 'Карта',
    admin: 'Администрация Постов',
    exit: 'Выход',
    login: 'Логин',
  },
}

class Navigation extends PureComponent {
  onLogout = () => {
    this.props.onLogout()
  }

  setRussian = e => {
    e.preventDefault()
    this.props.onLanguageChange('RU')
  }

  setEnglish = e => {
    e.preventDefault()
    this.props.onLanguageChange('EN')
  }

  render() {
    const { language } = this.props
    return (
      <MenuStyles as="nav" stackable borderless>
        <Container as="ul" text={this.props.text}>
          <Menu.Item as="li">
            <Link href="/">
              <Heading>
                <NavLogo src="/static/logo.png" alt="logo" />
                <a>
                  <SiteTitle>{locale[language].siteTitle}</SiteTitle>
                </a>
              </Heading>
            </Link>
          </Menu.Item>
          <Menu.Item as="li">
            <Link href="/about">
              <a>{locale[language].aboutUs}</a>
            </Link>
          </Menu.Item>
          <Menu.Item as="li">
            <Link href="/map">
              <a>{locale[language].map}</a>
            </Link>
          </Menu.Item>
          {this.props.isAuthenticated ? (
            <React.Fragment>
              <Menu.Item as="li">
                <Link href="/admin" as="/admin/posts">
                  <a>{locale[language].admin}</a>
                </Link>
              </Menu.Item>
              <Menu.Item as="li">
                <Button basic color="red" onClick={this.onLogout}>
                  {locale[language].exit}
                </Button>
              </Menu.Item>
            </React.Fragment>
          ) : (
            <Menu.Item as="li">
              <Link href="/login">
                <a>{locale[language].login}</a>
              </Link>
            </Menu.Item>
          )}
          <Menu.Item as="li">
            <Link href="/">
              <a role="link" onClick={this.setRussian}>
                RU
              </a>
            </Link>|
            <Link href="/">
              <a role="link" onClick={this.setEnglish}>
                EN
              </a>
            </Link>
          </Menu.Item>
        </Container>
      </MenuStyles>
    )
  }
}

export default compose(
  withLanguage,
  withApollo,
)(Navigation)

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SiteTitle = styled.h3`
  margin: 0;
  display: inline-block;
  cursor: pointer;
`

const NavLogo = styled.img`
  display: inline-block;
  cursor: pointer;
  width: 2.5em;
  margin: 0 0.5em 0 0;
`

const Container = styled(SContainer)`
  margin: 0;
  padding-left: 0;
`

const MenuStyles = styled(Menu)`
  justify-content: center;
`
