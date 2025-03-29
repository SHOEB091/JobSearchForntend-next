import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function JobsByLocationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jobs By Location</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find job opportunities in your preferred location across India
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {indianStates.map((state) => (
              <Link key={state.id} href={`/jobs/by-location/${state.id}`} className="group">
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm overflow-hidden border border-white/20 dark:border-gray-800/20 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square w-full bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 flex items-center justify-center">
                        <Image
                          src={state.mapImage || "/placeholder.svg"}
                          alt={state.name}
                          width={200}
                          height={200}
                          className="w-3/4 h-3/4 object-contain opacity-90 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                          {state.name}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data for Indian states with map images
const indianStates = [
  {
    id: "andaman-nicobar",
    name: "Andaman and Nicobar Islands",
    mapImage: "/images/andaman-and-nicobar-islands-govt-jobs.png",
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    mapImage: "/images/andhra-pradesh-govt-jobs.png",
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    mapImage: "/images/arunachal-pradesh-govt-jobs.png",
  },
  {
    id: "assam",
    name: "Assam",
    mapImage: "/images/assam-govt-jobs.png",
  },
  {
    id: "bihar",
    name: "Bihar",
    mapImage: "/images/bihar-govt-jobs.png",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    mapImage: "/images/chandigarh-govt-jobs.png",
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    mapImage: "/images/chhattisgarh-govt-jobs.png",
  },
  {
    id: "dadra-nagar-haveli",
    name: "Dadra and Nagar Haveli",
    mapImage: "/images/dadra-and-nagar-haveli-govt-jobs.png",
  },
  {
    id: "daman-diu",
    name: "Daman and Diu",
    mapImage: "/images/daman-and-diu-govt-jobs.png",
  },
  {
    id: "delhi",
    name: "Delhi",
    mapImage: "/images/delhi-govt-jobs.png",
  },
  {
    id: "goa",
    name: "Goa",
    mapImage: "/images/goa-govt-jobs.png",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    mapImage: "/images/gujarat-govt-jobs.png",
  },
  {
    id: "haryana",
    name: "Haryana",
    mapImage: "/images/haryana-govt-jobs.png",
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    mapImage: "/images/himachal-pradesh-govt-jobs.png",
  },
  {
    id: "jammu-kashmir",
    name: "Jammu and Kashmir",
    mapImage: "/images/jammu-and-kashmir-govt-jobs.png",
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    mapImage: "/images/jharkhand-govt-jobs.png",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    mapImage: "/images/karnataka-govt-jobs.png",
  },
  {
    id: "kerala",
    name: "Kerala",
    mapImage: "/images/kerala-govt-jobs.png",
  },

  {
    id: "lakshadweep",
    name: "Lakshadweep",
    mapImage: "/images/lakshadweep-govt-jobs.png",
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    mapImage: "/images/madhya-pradesh-govt-jobs.png",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    mapImage: "/images/maharashtra-govt-jobs.png",
  },
  {
    id: "manipur",
    name: "Manipur",
    mapImage: "/images/manipur-govt-jobs.png",
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    mapImage: "/images/meghalaya-govt-jobs.png",
  },
  {
    id: "mizoram",
    name: "Mizoram",
    mapImage: "/images/mizoram-govt-jobs.png",
  },
  {
    id: "nagaland",
    name: "Nagaland",
    mapImage: "/images/nagaland-govt-jobs.png",
  },
  {
    id: "odisha",
    name: "Odisha",
    mapImage: "/images/odisha-govt-jobs.png",
  },
  {
    id: "puducherry",
    name: "Puducherry",
    mapImage: "/images/puducherry-govt-jobs.png",
  },
  {
    id: "punjab",
    name: "Punjab",
    mapImage: "/images/punjab-govt-jobs.png",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    mapImage: "/images/rajasthan-govt-jobs.png",
  },
  {
    id: "sikkim",
    name: "Sikkim",
    mapImage: "/images/sikkim-govt-jobs.png",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    mapImage: "/images/tamil-nadu-govt-jobs.png",
  },
  {
    id: "telangana",
    name: "Telangana",
    mapImage: "/images/telangana-govt-jobs.png",
  },
  {
    id: "tripura",
    name: "Tripura",
    mapImage: "/images/tripura-govt-jobs.png",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    mapImage: "/images/uttar-pradesh-govt-jobs.png",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    mapImage: "/images/uttarakhand-govt-jobs.png",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    mapImage: "/images/west-bengal-govt-jobs.png",
  },
]


