"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [countdown, setCountdown] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (countdown > 0 || isSubmitting) return

    setIsSubmitting(true)
    // TODO: Ajouter la logique d'envoi d'email ici

    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setCountdown(10)
  }

  const handleResend = () => {
    if (countdown > 0) return
    setCountdown(10)
    // TODO: Ajouter la logique de renvoi ici
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Forgot your password ?</h1>
                <p className="text-muted-foreground text-balance">
                  Enter your email and we&apos;ll send you a reset link
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
                <FieldDescription>
                  We&apos;ll send a password reset link to this email address
                </FieldDescription>
              </Field>
              <Field>
                <Button
                  className="text-white"
                  type="submit"
                  disabled={countdown > 0 || isSubmitting}
                >
                  {isSubmitting
                    ? "Sending..."
                    : countdown > 0
                      ? `Resend in ${countdown}s`
                      : "Send reset link"
                  }
                </Button>
                <FieldDescription className="text-center">
                  Need help? <Link href="#">Contact support</Link> or check our{" "}
                  <Link href="#">FAQ</Link>.
                </FieldDescription>
              </Field>
              
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="/images/musee-digital.jpg"
              alt="Image"
              fill
              sizes="width: 100%; height: 100%"
              className="absolute inset-0 h-full w-full object-cover"
              priority={true}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
