import { Html, Body, Section, Row, Column, Img, Link, Container, Text, Hr, Heading} from "@react-email/components";

export default function EmailVerification({
  link,
}: {
  link: string
}) {

  return(
    <Html lang="en">
      <Body>
        <Container>
          <Section className="px-[32px] py-[40px]">
            <Row>
              <Column className="w-[80%]">
                <Img
                  alt="React Email logo"
                  height="42"
                  src={"http://localhost:3000/public/assets/img/logo.svg"}
                />
              </Column>
              <Column align="right">
                <Row align="right">
                  <Column>
                    <Link href="#">
                      <Img
                        alt="Instagram"
                        className="mx-[4px]"
                        height="36"
                        src="https://react.email/static/instagram-logo.png"
                        width="36"
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="#">
                      <Img
                        alt="Facebook"
                        className="mx-[4px]"
                        height="36"
                        src="https://react.email/static/facebook-logo.png"
                        width="36"
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
          <Section className="my-[16px]">
            <Section>
              <Row>
                <Heading className="m-0 font-semibold text-[24px] text-gray-900 leading-[32px]">
                  Nous vous remercions de votre inscription, vérifiez votre adresse e-mail pour continuer.
                </Heading>
                <Text className="mt-[8px] text-[16px] text-gray-500 leading-[24px]">
                  Merci d&apos;avoir lancé le processus de création d&apos;un nouveau compte CollecArts. Nous voulons nous assurer que c&apos;est bien vous. Veuillez saisir le code de vérification suivant lorsque vous y êtes invité. Si vous ne souhaitez pas créer de compte, vous pouvez ignorer ce message.
                </Text>
              </Row>
            </Section>
            <Section>
              <Hr className="!border-gray-300 mx-0 my-[32px] w-full border border-solid" />
              <Text className="text-center">
                Pour vérifier votre adresse e-mail{" "}
                <Link href={link}>
                  Cliquez ici !
                </Link>
              </Text>
              <Text className="text-center text-sm">Ce code est valable pendant 5 minutes</Text>
              <Hr className="!border-gray-300 mx-0 my-[32px] w-full border border-solid" />
            </Section>
            <Section>
              <Text>
                CollecArts ne vous enverra jamais d&apos;e-mail vous demandant de divulguer ou de vérifier votre mot de passe, votre numéro de carte de crédit ou votre numéro de compte bancaire.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
