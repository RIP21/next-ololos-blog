import React, { PureComponent } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'
import Router from 'next/router'

export default class Navigation extends PureComponent {
  onLogout = () => {
    this.props.onLogout().then(Router.push('/index'))
  }

  render() {
    return (
      <nav>
        <MenuStyles stackable borderless>
          <Container text={this.props.text}>
            <Menu.Item>
              <Link href="/">
                <Heading>
                  <img src="/static/logo.png" alt="logo" />
                  <a>
                    <h3>Ололось блог</h3>
                  </a>
                </Heading>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about">
                <a>О нас</a>
              </Link>
            </Menu.Item>
            {this.props.isAuthenticated && (
              <Menu.Item>
                <Link href="/admin" as="/admin/posts">
                  <a>Администрация Постов</a>
                </Link>
              </Menu.Item>
            )}

            {this.props.isAuthenticated ? (
              <Menu.Item>
                <Button basic color="red" onClick={this.onLogout}>
                  Выход
                </Button>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Link href="/login">
                  <a>Логин</a>
                </Link>
              </Menu.Item>
            )}
          </Container>
        </MenuStyles>
      </nav>
    )
  }
}

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3,
  img {
    margin: 0;
    display: inline-block;
    cursor: pointer;
  }

  img {
    width: 2.5em;
  }
`

const MenuStyles = styled(Menu)`justify-content: center;`
