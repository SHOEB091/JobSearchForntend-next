"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Building2,
  Clock,
  MapPin,
  Search,
  GraduationCap,
  BookOpen,
  Video,
  FileText,
} from "lucide-react";

// Error Boundary Component
function ErrorBoundary({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      console.error("Error caught by boundary:", event.error);
      setHasError(true);
      event.preventDefault();
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export default function Home() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong. Please try again later.</p>}>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
          <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Find Your <span className="text-primary">Government Job</span> Today
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Government jobs are in high demand for their benefits. Easynaukri4u helps millions chase their dream with job opportunities and study resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="study-material/mock-tests">Prepare With Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/jobs/latest">Browse Jobs</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <Image
                src="bg.jpg"
                alt="Job Interview Illustration"
                width={500}
                height={500}
                priority
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* Job Search Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl shadow-lg p-6 -mt-28 relative z-20 border">
                <h2 className="text-2xl font-bold mb-6 text-center">Find Your Perfect Job</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Job title or keyword" className="pl-9" />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full">Search Jobs</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sarkari Jobs Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold">Featured Govt Jobs</h2>
                <p className="text-muted-foreground mt-2">Find the latest government job opportunities</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" asChild>
                <Link href="/jobs/sarkari">View All Sarkari Jobs</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sarkariJobs.map((job) => (
                <Card key={job.id} className="group hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <Badge variant={job.type === "Full-time" ? "default" : "outline"}>{job.type}</Badge>
                    </div>
                    <CardTitle className="mt-4 group-hover:text-primary transition-colors">{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.posted}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/jobs/sarkari`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Study Materials Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Comprehensive Study Materials</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Prepare for your dream job with our extensive collection of study resources
              </p>
            </div>

            <Tabs defaultValue="notes" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="notes">
                  <FileText className="h-4 w-4 mr-2" />
                  Notes
                </TabsTrigger>
                <TabsTrigger value="ebooks">
                  <BookOpen className="h-4 w-4 mr-2" />
                  E-Books
                </TabsTrigger>
                <TabsTrigger value="videos">
                  <Video className="h-4 w-4 mr-2" />
                  Videos
                </TabsTrigger>
                <TabsTrigger value="tests">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Mock Tests
                </TabsTrigger>
              </TabsList>

              <TabsContent value="notes" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studyMaterials.notes.map((item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`https://drive.google.com/drive/folders/1Kz2JbSrEZUtqbtK5YhwBrqMtP43VyeKz?usp=sharing${item.id}`}>View Notes</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ebooks" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studyMaterials.ebooks.map((item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`https://drive.google.com/drive/folders/1Kz2JbSrEZUtqbtK5YhwBrqMtP43VyeKz?usp=sharing                          rm -rf .git                          rm -rf .git${item.id}`}>View E-Book</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studyMaterials.videos.map((item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {item.youtubeId && (
                          <div className="relative w-full pt-[56.25%] mb-4">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                              src={`https://www.youtube.com/embed/${item.youtubeId}`}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/study-material/videos/${item.id}`}>Watch More Videos</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tests" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studyMaterials.tests.map((item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/study-material/mock-tests/${item.id}`}>Take Test</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of successful job seekers who found their dream jobs through JobHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Create an Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/jobs/latest">Browse Jobs</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

// Sample Data
const sarkariJobs = [
  {
    id: "1",
    title: "Assistant Section Officer",
    company: "Union Public Service Commission (UPSC)",
    location: "Delhi, India",
    experience: "3-5 years",
    type: "Full-time",
    posted: "Posted 2 days ago",
  },
  {
    id: "2",
    title: "Junior Engineer (Civil)",
    company: "Public Works Department (PWD)",
    location: "Mumbai, India",
    experience: "2-4 years",
    type: "Full-time",
    posted: "Posted 3 days ago",
  },
  {
    id: "3",
    title: "Data Entry Operator",
    company: "Staff Selection Commission (SSC)",
    location: "Remote",
    experience: "4-6 years",
    type: "Contract",
    posted: "Posted 1 day ago",
  },
];

const studyMaterials = {
  notes: [
    {
      id: "1",
      title: "SSC Notes",
      description: "Comprehensive notes on HTML, CSS, and JavaScript basics",
      link: "https://drive.google.com/drive/folders/1Kz2JbSrEZUtqbtK5YhwBrqMtP43VyeKz?usp=sharing",
    },
    {
      id: "2",
      title: "Steno Assistant",
      description: "Essential concepts for technical interviews",
      link: "/study-material/notes/steno-assistant",
    },
  ],
  ebooks: [
    {
      id: "1",
      title: "The Complete Guide to Government Interviews",
      description: "Prepare Government Exam asked questions",
    },
  ],
  videos: [
    {
      id: "1",
      title: "Resume Building Masterclass",
      description: "Learn how to craft a resume that stands out to recruiters",
      youtubeId: "IIGWpw1FXhk",
    },
    {
      id: "2",
      title: "Interview Preparation Guide",
      description: "Essential tips and strategies for job interviews",
      youtubeId: "gDN7cJ3Rt80",
    },
  ],
  tests: [
    {
      id: "1",
      title: "SSC, CGL Assessment",
      description: "Test your knowledge of HTML, CSS, JavaScript, and React",
    },
  ],
};