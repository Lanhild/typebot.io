import { Head, Text, Button } from '../components'
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlSpacer,
} from '@faire/mjml-react'

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type DefaultBotNotificationEmailProps = {
  resultsUrl: string
  answers: { [key: string]: string }
}

export const DefaultBotNotificationEmail = ({
  resultsUrl,
  answers,
}: DefaultBotNotificationEmailProps) => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <MjmlSection padding="32px" cssClass="smooth" border="1px solid #e2e8f0">
        <MjmlColumn>
          {Object.keys(answers).map((key, index) => {
            const isEmail = emailRegex.test(answers[key])

            return (
              <Text key={key} paddingTop={index === 0 ? 0 : undefined}>
                <b>{key}</b>:{' '}
                {isEmail ? (
                  <a href={`mailto:${answers[key]}`}>{answers[key]}</a>
                ) : (
                  answers[key]
                )}
              </Text>
            )
          })}
          <MjmlSpacer height="24px" />
          <Button link={resultsUrl}>Go to results</Button>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
)
