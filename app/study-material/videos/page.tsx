import { Metadata } from "next"
import { Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Video Tutorials | EasyNaukri4U",
  description: "Watch expert-led video tutorials for various competitive exams.",
}

const featuredVideos = [
  {
    title: "UPSC Preparation",
    description: "Complete video course covering all topics for UPSC Prelims.",
    videoId: "OhJWg-0qdI0", // Replace with actual UPSC video ID
    duration: "50+ Videos",
  },
  {
    title: "SSC CGL Tier 1 Strategy",
    description: "Comprehensive video series for all banking exam topics.",
    videoId: "D1rru_1Ctfc", // Replace with actual Banking video ID
    duration: "40+ Videos",
  },
  {
    title: "RRB Group D 2020-21",
    description: "Complete video course for SSC CGL preparation.",
    videoId: "aGY21_XA8BU", // Replace with actual SSC video ID
    duration: "35+ Videos",
  },
  {
    title: "Uttarakhand uksssc exam selection strategy,",
    description: "Complete video course for SSC CGL preparation.",
    videoId: "ot_lCk9HIwA", // Replace with actual SSC video ID
    duration: "35+ Videos",
  },
  {
    title: "INDIAN ARMY Written Exam Tips",
    description: "Complete video course for SSC CGL preparation.",
    videoId: "aGY21_XA8BU", // Replace with actual SSC video ID
    duration: "35+ Videos",
  },
  {
    title: "Indian Coast Guard Syllabus ",
    description: "Complete video course for SSC CGL preparation.",
    videoId: "z0lFOBboaUU", // Replace with actual SSC video ID
    duration: "35+ Videos",
  }
]

const freeLectures = [
  {
    title: "Rajasthan S.I.",
    videoId: "eZed1coX2v0", // Replace with actual video ID
  },
  {
    title: "SBI CLERK 2021 Previous Year paper With Solution",
    videoId: "_iSNEtmZi2E", // Replace with actual video ID
  },
  {
    title: "SSC CHSL 2021",
    videoId: "gK8dNvvSjiw", // Replace with actual video ID
  },
  {
    title: "IBPS PO 2021 Preparation Strategy for Sure Selection",
    videoId: "9YBON05W5No", // Replace with actual video ID
  },
  
]

export default function VideoTutorialsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Video Tutorials</h1>
          <p className="text-muted-foreground">
            Learn from expert instructors through our comprehensive video tutorials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured Video Courses */}
          {featuredVideos.map((video) => (
            <div key={video.title} className="group relative overflow-hidden rounded-lg border bg-card">
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold">{video.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {video.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm font-medium">Free</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Free Video Lectures</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {freeLectures.map((lecture) => (
              <div
                key={lecture.title}
                className="group relative overflow-hidden rounded-lg border bg-card"
              >
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${lecture.videoId}`}
                    title={lecture.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{lecture.title}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-medium">Free</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">HD Quality</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 