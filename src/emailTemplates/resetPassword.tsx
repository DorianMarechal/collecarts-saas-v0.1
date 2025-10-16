import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface CollecartsResetPasswordEmailProps {
  userFirstname?: string;
  resetPasswordLink?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL && process.env.NODE_ENV === 'production'
  ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
  : `http://${process.env.NEXT_PUBLIC_APP_URL}`;

export const CollecartsResetPasswordEmail = ({
  userFirstname,
  resetPasswordLink,
}: CollecartsResetPasswordEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Reset your Password</Preview>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`${baseUrl}/public/logo-dark.svg`}
            width="120"
            height="36"
            alt="CollecArts"
          />
        </Section>
        <Heading style={h1}>Hi {userFirstname}</Heading>
        <Text style={heroText}>
          Someone recently requested a password change for your Dropbox
          account. If this was you, you can set a new password here:
        </Text>

        <Section style={codeBox}>
          <Button style={button} href={resetPasswordLink}>
            Reset password
          </Button>
        </Section>

        <Text style={text}>
          If you don&apos;t want to change your password or didn&apos;t
          request this, just ignore and delete this message.
        </Text>

        <Text style={text}>
          To keep your account secure, please don&apos;t forward this email
          to anyone. See our Help Center for{' '}
          <Link style={anchor} href={resetPasswordLink}>
            more security tips.
          </Link>
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: '66%' }}>
              <Img
                src={`${baseUrl}/static/slack-logo.png`}
                width="120"
                height="36"
                alt="Slack"
              />
            </Column>
            <Column align="right">
              <Link href="/">
                <Img
                  src={`${baseUrl}/static/slack-twitter.png`}
                  width="32"
                  height="32"
                  alt="Slack"
                  style={socialMediaIcon}
                />
              </Link>
              <Link href="/">
                <Img
                  src={`${baseUrl}/static/slack-facebook.png`}
                  width="32"
                  height="32"
                  alt="Slack"
                  style={socialMediaIcon}
                />
              </Link>
              <Link href="/">
                <Img
                  src={`${baseUrl}/static/slack-linkedin.png`}
                  width="32"
                  height="32"
                  alt="Slack"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Our blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            CollecArts Community
          </Link>
          <Text style={footerText}>
            ©2025 CollecArts <br />
            500 Howard Street, Perpignan, CP 66000, France <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CollecartsResetPasswordEmail;

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left' as const,
  marginBottom: '50px',
};

const footerLink = {
  color: '#b7b7b7',
  textDecoration: 'underline',
};

const footerLogos = {
  marginBottom: '32px',
  paddingLeft: '8px',
  paddingRight: '8px',
};

const socialMediaIcon = {
  display: 'inline',
  marginLeft: '8px',
};

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: '0 auto',
  padding: '0px 20px',
};

const logoContainer = {
  marginTop: '32px',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px',
};

const codeBox = {
  background: 'transparent',
  borderRadius: '4px',
  marginBottom: '30px',
  padding: '40px 10px',
};

const button = {
  backgroundColor: '#007ee6',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
};

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
};

const anchor = {
  textDecoration: 'underline',
};
