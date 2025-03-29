import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Building2, Clock, MapPin, ArrowLeft } from "lucide-react"

export default function LocationJobsPage({ params }: { params: { location: string } }) {
  // Get location name from the URL parameter
  const locationId = params.location
  const location = indianStates.find((state) => state.id === locationId) || { name: "Unknown Location", id: locationId }

  // Filter jobs by location
  const locationJobs = jobListings.filter((job) => job.locationId === locationId)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Link
            href="/jobs/by-location"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all locations
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jobs in {location.name}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse {locationJobs.length} job opportunities in {location.name}
          </p>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 bg-background">
        <div className="container">
          {locationJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationJobs.map((job) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No jobs found in {location.name}</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any job listings for this location at the moment.
              </p>
              <Button asChild>
                <Link href="/jobs/latest">Browse All Jobs</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// Sample data for Indian states
const indianStates = [
  { id: "andaman-nicobar", name: "Andaman and Nicobar Islands" },
  { id: "andhra-pradesh", name: "Andhra Pradesh" },
  { id: "arunachal-pradesh", name: "Arunachal Pradesh" },
  { id: "assam", name: "Assam" },
  { id: "bihar", name: "Bihar" },
  { id: "chandigarh", name: "Chandigarh" },
  { id: "chhattisgarh", name: "Chhattisgarh" },
  { id: "dadra-nagar-haveli", name: "Dadra and Nagar Haveli" },
  { id: "daman-diu", name: "Daman and Diu" },
  { id: "delhi", name: "Delhi" },
  { id: "goa", name: "Goa" },
  { id: "gujarat", name: "Gujarat" },
  { id: "haryana", name: "Haryana" },
  { id: "himachal-pradesh", name: "Himachal Pradesh" },
  { id: "jammu-kashmir", name: "Jammu and Kashmir" },
  { id: "jharkhand", name: "Jharkhand" },
  { id: "karnataka", name: "Karnataka" },
  { id: "kerala", name: "Kerala" },
  // Additional states...
]

// Sample job listings with locationId that matches state ids
const jobListings = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Delhi, India",
    locationId: "delhi",
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
    locationId: "maharashtra",
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
    locationId: "karnataka",
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
    locationId: "telangana",
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
    locationId: "tamil-nadu",
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
    locationId: "west-bengal",
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
    locationId: "maharashtra",
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
    locationId: "delhi",
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
    locationId: "karnataka",
    experience: "1-3 years",
    type: "Contract",
    posted: "Posted 2 days ago",
    salary: "₹6-10 LPA",
    description: "We need a creative Content Writer to produce engaging content for our clients...",
  },
]

