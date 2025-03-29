import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  IndianRupee,
  GraduationCap,
  CheckCircle2,
  Share2,
} from "lucide-react"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  // Find job by ID
  const jobId = params.id
  const job = jobListings.find((job) => job.id === jobId) || {
    id: "not-found",
    title: "Job Not Found",
    company: "Unknown",
    location: "Unknown",
    experience: "Unknown",
    type: "Unknown",
    posted: "Unknown",
    salary: "Unknown",
    description: "The job you're looking for doesn't exist or has been removed.",
  }

  // Find similar jobs (excluding current job)
  const similarJobs = jobListings.filter((item) => item.id !== jobId).slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Job Details Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <Link href="/jobs/latest" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all jobs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{job.title}</h1>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <div>
                    <Badge variant={job.type === "Full-time" ? "default" : "outline"} className="mb-2">
                      {job.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Experience</p>
                      <p className="text-sm text-muted-foreground">{job.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Salary</p>
                      <p className="text-sm text-muted-foreground">{job.salary}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1">Apply Now</Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Job
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="company">Company</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="bg-card rounded-lg border shadow-sm p-6 mt-6">
                  <h2 className="text-xl font-bold mb-4">Job Description</h2>
                  <div className="space-y-4">
                    <p>{job.description}</p>
                    <p>
                      We are looking for a talented professional to join our team. The ideal candidate will have a
                      passion for technology and a drive to deliver exceptional results.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">Responsibilities:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Design and implement new features and functionality</li>
                      <li>Build reusable code and libraries for future use</li>
                      <li>Optimize application for maximum speed and scalability</li>
                      <li>Collaborate with other team members and stakeholders</li>
                      <li>Ensure the technical feasibility of UI/UX designs</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="requirements" className="bg-card rounded-lg border shadow-sm p-6 mt-6">
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Qualifications:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Bachelor's degree in Computer Science or related field</li>
                      <li>{job.experience} of professional experience</li>
                      <li>Strong problem-solving skills and attention to detail</li>
                      <li>Excellent communication and teamwork abilities</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6">Technical Skills:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Proficiency in JavaScript, HTML, and CSS</li>
                      <li>Experience with React, Next.js, and modern frontend frameworks</li>
                      <li>Familiarity with RESTful APIs and backend integration</li>
                      <li>Understanding of version control systems (Git)</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="company" className="bg-card rounded-lg border shadow-sm p-6 mt-6">
                  <h2 className="text-xl font-bold mb-4">About {job.company}</h2>
                  <div className="space-y-4">
                    <p>
                      {job.company} is a leading technology company specializing in innovative solutions for businesses.
                      With a team of dedicated professionals, we strive to deliver exceptional products and services to
                      our clients.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">Company Culture:</h3>
                    <p>
                      We foster a collaborative and inclusive work environment where creativity and innovation thrive.
                      Our team members are encouraged to share ideas, take ownership of their work, and continuously
                      learn and grow.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">Benefits:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Competitive salary and performance bonuses</li>
                      <li>Health insurance and wellness programs</li>
                      <li>Flexible work arrangements</li>
                      <li>Professional development opportunities</li>
                      <li>Team building activities and events</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Job Summary</CardTitle>
                  <CardDescription>Key details about this position</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Date Posted</p>
                      <p className="text-sm text-muted-foreground">March 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Application Deadline</p>
                      <p className="text-sm text-muted-foreground">April 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Education</p>
                      <p className="text-sm text-muted-foreground">Bachelor's Degree</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Job Status</p>
                      <p className="text-sm text-muted-foreground">Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Similar Jobs</CardTitle>
                  <CardDescription>You might be interested in these roles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {similarJobs.map((job) => (
                    <div key={job.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <Link href={`/jobs/${job.id}`} className="block group">
                        <h3 className="font-medium group-hover:text-primary transition-colors">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </div>
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample job listings
const jobListings = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Delhi, India",
    experience: "3-5 years",
    type: "Full-time",
    posted: "Posted 2 days ago",
    salary: "₹15-20 LPA",
    description:
      "We are looking for a Senior Frontend Developer to join our team to build innovative user interfaces and deliver exceptional user experiences. The ideal candidate will have strong expertise in React and modern JavaScript frameworks.",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Design Masters",
    location: "Mumbai, Maharashtra",
    experience: "2-4 years",
    type: "Full-time",
    posted: "Posted 3 days ago",
    salary: "₹12-18 LPA",
    description:
      "Design Masters is seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our clients. You will work closely with product managers and developers to deliver outstanding design solutions.",
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "DataWorks",
    location: "Bangalore, Karnataka",
    experience: "4-6 years",
    type: "Contract",
    posted: "Posted 1 day ago",
    salary: "₹18-25 LPA",
    description:
      "Join our data science team to work on cutting-edge projects involving machine learning, statistical analysis, and data visualization. You will help extract insights from complex datasets and drive business decisions.",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "InnovateTech",
    location: "Hyderabad, Telangana",
    experience: "5+ years",
    type: "Full-time",
    posted: "Posted 4 days ago",
    salary: "₹20-30 LPA",
    description:
      "We're looking for an experienced Product Manager to lead our product development efforts. You will define product strategy, gather requirements, and work with cross-functional teams to deliver successful products.",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Chennai, Tamil Nadu",
    experience: "3-5 years",
    type: "Full-time",
    posted: "Posted 2 days ago",
    salary: "₹14-22 LPA",
    description:
      "Join our DevOps team to build and maintain our cloud infrastructure. You will automate deployment processes, optimize system performance, and ensure high availability of our services.",
  },
]

