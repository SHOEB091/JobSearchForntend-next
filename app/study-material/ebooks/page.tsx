import { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Books | EasyNaukri4U",
  description: "Access free e-books and study materials for various competitive exams.",
}

export default function EBooksPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">E-Books</h1>
          <p className="text-muted-foreground">
            Access our collection of free e-books designed to help you excel in your exam preparation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured E-Books */}
          <a href="https://drive.google.com/file/d/1LaP7SyBklspJeJbchsqwDJqpnQfR16mY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Analogy Test</h3>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guide covering all aspects of UPSC preparation with practice questions.
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
                  Complete study material for all banking exams with topic-wise practice.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Free</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">PDF</span>
                </div>
              </div>
            </div>
          </a>

          <a href="https://drive.google.com/file/d/1rH2oM6ix_LIHxMZA_dy5iHRAuIQ1_O0j/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Computer Question Bank</h3>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive study material with previous year papers and solutions.
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
          <h2 className="text-2xl font-semibold">More Free E-Books</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Rajasthan LDC",
              "Rajasthan Subordinate General",
              "English Language Fundamentals",
              "Reasoning Ability Guide",
              "Current Affairs Monthly Digest"
            ].map((book) => (
              <a
                key={book}
                href="https://drive.google.com/drive/folders/1Kz2JbSrEZUtqbtK5YhwBrqMtP43VyeKz?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-colors hover:bg-accent">
                  <h3 className="font-medium">{book}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Essential study material to build your foundation.
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