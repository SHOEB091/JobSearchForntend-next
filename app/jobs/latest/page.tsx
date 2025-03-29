import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building2, Clock, MapPin, Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LatestJobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Job Opportunities</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our curated list of the latest job openings across India
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search job title or keyword" className="pl-9" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Showing 24 jobs</span>
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job) => (
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
                    <Link href={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="ml-2">
              Next
            </Button>
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
    description: "We are looking for a Senior Frontend Developer to join our team...",
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
    description: "Design Masters is seeking a talented UX/UI Designer...",
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
    description: "Join our data science team to work on cutting-edge projects...",
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
    description: "We're looking for an experienced Product Manager to lead our product development...",
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
    description: "Join our DevOps team to build and maintain our cloud infrastructure...",
  },
  {
    id: "6",
    title: "Marketing Specialist",
    company: "GrowthHackers",
    location: "Kolkata, West Bengal",
    experience: "2-3 years",
    type: "Part-time",
    posted: "Posted 5 days ago",
    salary: "₹8-12 LPA",
    description: "We're seeking a Marketing Specialist to help grow our brand presence...",
  },
  {
    id: "7",
    title: "Software Engineer",
    company: "TechInnovate",
    location: "Pune, Maharashtra",
    experience: "1-3 years",
    type: "Full-time",
    posted: "Posted 1 day ago",
    salary: "₹10-15 LPA",
    description: "Join our engineering team to build scalable software solutions...",
  },
  {
    id: "8",
    title: "HR Manager",
    company: "PeopleFirst",
    location: "Delhi, India",
    experience: "5-8 years",
    type: "Full-time",
    posted: "Posted 3 days ago",
    salary: "₹12-18 LPA",
    description: "We're looking for an HR Manager to lead our talent acquisition and management...",
  },
  {
    id: "9",
    title: "Content Writer",
    company: "ContentHub",
    location: "Bangalore, Karnataka",
    experience: "1-3 years",
    type: "Contract",
    posted: "Posted 2 days ago",
    salary: "₹6-10 LPA",
    description: "We need a creative Content Writer to produce engaging content for our clients...",
  },
  {
    id: "10",
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Hyderabad, Telangana",
    experience: "3-6 years",
    type: "Full-time",
    posted: "Posted 1 day ago",
    salary: "₹15-25 LPA",
    description: "Looking for a Full Stack Developer with experience in MERN stack...",
  },
  {
    id: "11",
    title: "Project Manager",
    company: "BuildTech",
    location: "Mumbai, Maharashtra",
    experience: "4-7 years",
    type: "Full-time",
    posted: "Posted 3 days ago",
    salary: "₹18-28 LPA",
    description: "We're seeking an experienced Project Manager to lead our development teams...",
  },
  {
    id: "12",
    title: "Data Analyst",
    company: "InsightAnalytics",
    location: "Bangalore, Karnataka",
    experience: "2-4 years",
    type: "Full-time",
    posted: "Posted 2 days ago",
    salary: "₹10-15 LPA",
    description: "Join our data team to analyze and interpret complex data sets...",
  },
]

