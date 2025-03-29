import { Metadata } from "next"
import { Clock, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Mock Tests | EasyNaukri4U",
  description: "Practice with our comprehensive mock tests for various competitive exams.",
}

export default function MockTestsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Mock Tests</h1>
          <p className="text-muted-foreground">
            Test your preparation with our comprehensive mock tests and practice papers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured Mock Tests */}
          <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">UPSC Prelims Mock Test</h3>
                <span className="text-sm text-muted-foreground">Featured</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>2 Hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>100 Questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>10,000+ Attempts</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Simulate the actual UPSC Prelims exam with our comprehensive mock test.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Free</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Detailed Analysis</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Banking Exam Series</h3>
                <span className="text-sm text-muted-foreground">Featured</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>1 Hour</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>50 Questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>5,000+ Attempts</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Practice with topic-wise mock tests for banking exams.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Free</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Detailed Analysis</span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">SSC CGL Mock Test</h3>
                <span className="text-sm text-muted-foreground">Featured</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>1.5 Hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>75 Questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>8,000+ Attempts</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Practice with our comprehensive SSC CGL mock test series.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Free</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Detailed Analysis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">More Free Mock Tests</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "General Awareness Quiz",
              "Quantitative Aptitude Test",
              "English Language Test",
              "Reasoning Ability Quiz",
              "Current Affairs Quiz"
            ].map((test) => (
              <div
                key={test}
                className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
              >
                <h3 className="font-medium">{test}</h3>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>25 Questions</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Test your knowledge with our free practice quiz.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-medium">Free</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">Instant Results</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 