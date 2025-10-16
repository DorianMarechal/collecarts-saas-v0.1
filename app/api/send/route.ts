import EmailVerification from "@/emailTemplates/emailVerification"
import CollecartsResetPasswordEmail from "@/emailTemplates/resetPassword"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { from, to, subject, template, variables } = body

    let TemplateComponent

    switch (template) {
      case "welcome":
        break
      case "resetPassword":
        TemplateComponent = CollecartsResetPasswordEmail({
          userFirstname: variables.userFirstname,
          resetPasswordLink: variables.resetPasswordLink,
        })
        break
      case "verifyMail":
        TemplateComponent = EmailVerification({
          validationCode: variables.validationCode
        })
        break
      default:
        return Response.json({ error: "Template inconnu" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      react: TemplateComponent
    })

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 })
  }
}