import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import { Link } from 'gatsby';
import Menu from './Menu';
import Search from './Search';
import {
  useToggle,
  Nav,
  Row,
  Col,
  Container,
  Button,
  Icon,
  IconButton,
  // @ts-ignore
} from '~paragon-react'; // eslint-disable-line
// @ts-ignore
import { Menu as MenuIcon, Close, Settings } from '~paragon-icons'; // eslint-disable-line
import { SettingsContext } from '../context/SettingsContext';

export interface INavbar {
  siteTitle: string,
  onMenuClick: Function,
  onSettingsClick: Function | undefined,
  menuIsOpen?: boolean,
  showMinimizedTitle?: boolean,
}

const Navbar = ({
  siteTitle,
  onMenuClick,
  menuIsOpen,
  showMinimizedTitle,
  onSettingsClick,
}: INavbar) => (
  <Container as="header" className="py-3 bg-dark text-white sticky-top">
    <Row className="align-items-center text-center text-sm-left">
      <Col className="pgn-doc__header-button--menu mb-2 mb-sm-0 col-4" sm={5}>
        <Button
          className="d-inline-flex align-items-center"
          variant="inverse-tertiary"
          onClick={onMenuClick}
          iconBefore={menuIsOpen ? Close : MenuIcon}
        >
          Menu
        </Button>
      </Col>
      <Col className="mb-2 mb-sm-0 col-4" sm={2}>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          className="d-block text-center"
        >
          {showMinimizedTitle ? (
            <span
              style={{ fontSize: '36px', lineHeight: 1 }}
              role="img"
              aria-label="Paragon"
            >
              💎
            </span>
          ) : (
            <>
              <h1 className="h4 m-0 text-white">{siteTitle}</h1>
              <p
                className="text-uppercase text-white m-0 x-small"
                style={{ opacity: 0.6 }}
              >
                Technical Documentation
              </p>
            </>
          )}
        </Link>
      </Col>
      <Col className="small" sm={12} xl={5}>
        <Nav className="justify-content-center justify-content-xl-end align-items-center">
          <img
            className="d-inline-block mr-2"
            src="https://img.shields.io/npm/v/@edx/paragon.svg"
            alt="npm_version"
          />
          <Nav.Item>
            <Link
              style={{ textDecoration: 'none' }}
              className="text-white nav-link"
              to="/changelog"
            >
              Changelog
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-white"
              href="https://github.com/edx/paragon"
            >
              GitHub
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <IconButton
              src={Settings}
              iconAs={Icon}
              alt="Site settings"
              onClick={onSettingsClick}
              variant="light"
              size="sm"
            />
          </Nav.Item>
          <Search />
        </Nav>
      </Col>
    </Row>
  </Container>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool,
  showMinimizedTitle: PropTypes.bool,
};
Navbar.defaultProps = {
  menuIsOpen: false,
  showMinimizedTitle: false,
};

export interface IHeaderProps {
  siteTitle: string,
  showMinimizedTitle?: boolean,
}

const Header = ({ siteTitle, showMinimizedTitle }: IHeaderProps) => {
  const [isOpen, , close, toggle] = useToggle(false, {
    handleToggleOn: () => {
      document.body.style.overflow = 'hidden';
    },
    handleToggleOff: () => {
      document.body.style.overflow = 'initial';
    },
  });

  const { openSettings } = useContext(SettingsContext);

  useEffect(() => () => {
    document.body.style.overflow = 'initial';
  }, []);

  return (
    <FocusOn
      enabled={isOpen}
      onClickOutside={close}
      onEscapeKey={close}
      className="pgn-doc-header sticky-top"
    >
      <div
        className="bg-white"
        style={{ maxHeight: '100vh', overflow: 'auto' }}
      >
        <Navbar
          siteTitle={siteTitle}
          onMenuClick={toggle}
          menuIsOpen={isOpen}
          showMinimizedTitle={showMinimizedTitle}
          onSettingsClick={openSettings}
        />
        {isOpen && <Menu />}
      </div>
    </FocusOn>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  showMinimizedTitle: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: '',
  showMinimizedTitle: false,
};

export default Header;
