"use client"

import { SignUp } from "@clerk/nextjs"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              EasyNaukri4u
            </span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold">Create an Account</h1>
          <p className="mt-2 text-muted-foreground">Join our community and unlock your career potential</p>
        </div>

        <SignUp path="/signup" routing="path" />
      </div>
    </div>
  )
}
