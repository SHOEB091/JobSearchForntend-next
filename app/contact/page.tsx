"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })

      form.reset()

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you with any inquiries about our job listings or study
            materials.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 border-primary/10 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Our Location</CardTitle>
                <CardDescription className="text-base mt-2">Gurugram Prathiba tower</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/10 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription className="text-base mt-2">
                  <a href="mailto:info@jobhub.com" className="hover:text-primary">
                    email@easynaurkri4u.com
                  </a>
                  <br />
                  <a href="mailto:support@jobhub.com" className="hover:text-primary">
                    support@easynaukri4u.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/10 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription className="text-base mt-2">
                  <a href="tel:+00000000" className="hover:text-primary">
                    00000000
                  </a>
                  <br />
                  <a href="tel:+00000000" className="hover:text-primary">
                    0000000
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/10 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Working Hours</CardTitle>
                <CardDescription className="text-base mt-2">
                  Monday - Friday: 9AM - 6PM
                  <br />
                  Saturday: 10AM - 4PM
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Message subject" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Your message" className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="mr-2">Sending...</span>
                            <Send className="h-4 w-4 animate-pulse" />
                          </>
                        ) : isSuccess ? (
                          <>
                            <span className="mr-2">Sent Successfully</span>
                            <CheckCircle2 className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <span className="mr-2">Send Message</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                <p className="text-muted-foreground mb-8">
                  Visit our office or contact us through the provided channels.
                </p>

                <div className="aspect-video bg-card rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28061.76762089896!2d77.02354287431642!3d28.45782709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19002336e493%3A0x902dbbb8acebec88!2sBridge%20Group%20Solutions!5e0!3m2!1sen!2sin!4v1742984572044!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="JobHub Office Location"
                  ></iframe>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for the latest job updates and career tips.
                </p>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of successful job seekers who found their dream jobs through JobHub
          </p>
          <Button size="lg" variant="secondary">
            Create an Account
          </Button>
        </div>
      </section>
    </div>
  )
}






