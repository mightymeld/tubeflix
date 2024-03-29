import React from 'react';
import Footer, { FooterTitle, FooterRow, FooterColumn, FooterLink, FooterBreak } from '../components/footer';

export function FooterContainer() {
  return (
    <Footer>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterBreak />
      <FooterRow>
        <FooterColumn>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Investor Relations</FooterLink>
          <FooterLink href="#">Ways to Watch</FooterLink>
          <FooterLink href="#">Corporate Information</FooterLink>
          <FooterLink href="#">TubeFlix Originals</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Help Centre</FooterLink>
          <FooterLink href="#">Jobs</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Account</FooterLink>
          <FooterLink href="#">Redeem gift cards</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Speed Test</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Media Centre</FooterLink>
          <FooterLink href="#">Buy gift cards</FooterLink>
          <FooterLink href="#">Cookie Preferences</FooterLink>
          <FooterLink href="#">Legal Notices</FooterLink>
        </FooterColumn>
      </FooterRow>
    </Footer>
  );
}
