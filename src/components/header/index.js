import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  PlayButton,
  Text,
  Feature,
  Logo,
} from './styles/header';

export default function Header({ src, dontShowOnSmallViewPort, bg = true, children }) {
  if (bg) {
    return (
      <Background data-testid="header-bg" src={src} dontShowOnSmallViewPort={dontShowOnSmallViewPort}>
        {children}
      </Background>
    );
  }
  return children;
}

export function HeaderFrame({ children }) {
  return <Container>{children}</Container>;
}

export function HeaderGroup({ children }) {
  return <Group>{children}</Group>;
}

export function HeaderLogo({ to, src, alt }) {
  return (
    <ReactRouterLink to={to}>
      <Logo src="https://tubeflix-app.s3.us-west-1.amazonaws.com/tubeflix.png" alt={alt} />
    </ReactRouterLink>
  );
}

export function HeaderSearch({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search>
      <SearchIcon onClick={() => setSearchActive((active) => !active)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search movies and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
}

export function HeaderProfile({ children }) {
  return <Profile>{children}</Profile>;
}

export function HeaderFeature({ children }) {
  return <Feature>{children}</Feature>;
}

export function HeaderPicture({ src }) {
  return <Picture src={`/images/users/${src}.png`} />;
}

export function HeaderDropdown({ children }) {
  return <Dropdown>{children}</Dropdown>;
}

export function HeaderTextLink({ active, onClick, children }) {
  return (
    <Link active={active} onClick={onClick}>
      {children}
    </Link>
  );
}

export function HeaderPlayButton({ children }) {
  return <PlayButton>{children}</PlayButton>;
}

export function HeaderFeatureCallOut({ children }) {
  return <FeatureCallOut>{children}</FeatureCallOut>;
}

export function HeaderText({ children }) {
  return <Text>{children}</Text>;
}
