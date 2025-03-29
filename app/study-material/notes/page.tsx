import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study Notes | EasyNaukri4U",
  description: "Access free study notes and materials for various competitive exams.",
}

export default function NotesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Study Notes</h1>
          <p className="text-muted-foreground">
            Access our collection of free study notes designed to help you excel in your exam preparation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured Notes */}
          <a href="https://drive.google.com/file/d/1iUO1kF0wQwI0MVObEW6SkkIQWpjHCARv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Alphabet Series Tricks</h3>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive notes covering recent current affairs for UPSC preparation.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Free</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">PDF</span>
                </div>
              </div>
            </div>
          </a>

          <a href="https://drive.google.com/file/d/1LaP7SyBklspJeJbchsqwDJqpnQfR16mY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Analogy Text</h3>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Topic-wise study notes for banking exams with important concepts.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Free</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">PDF</span>
                </div>
              </div>
            </div>
          </a>

          <a href="https://drive.google.com/file/d/11Ap8VRe9sVgtM8pcgj5-gs2CVXunDGRU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Blood Relations</h3>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Subject-wise study notes with important formulas and concepts.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Free</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">PDF</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">More Study Notes</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "General Studies Notes",
              "Mathematics Formulas",
              "English Grammar Notes",
              "Reasoning Shortcuts",
              "Monthly Current Affairs"
            ].map((note) => (
              <a
                key={note}
                href="https://drive.google.com/drive/folders/1Kz2JbSrEZUtqbtK5YhwBrqMtP43VyeKz?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-colors hover:bg-accent">
                  <h3 className="font-medium">{note}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Essential study notes to build your foundation.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-medium">Free</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">PDF</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 