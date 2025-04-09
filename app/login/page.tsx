"use client"

import { SignIn, SignUp } from "@clerk/nextjs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            EasyNaukri4u
            </span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold">Welcome to EasyNaukri4u</h1>
          <p className="mt-2 text-muted-foreground">Your gateway to career opportunities and professional growth</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <SignIn path="/login" routing="path" />
          </TabsContent>

          <TabsContent value="signup">
            <SignUp path="/login" routing="path" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
