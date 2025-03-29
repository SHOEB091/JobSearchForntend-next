"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md shadow-sm"
        : "bg-background"
        }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              EasyNaukri4U
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className={`group flex items-center gap-1 p-0 text-sm font-medium transition-colors hover:text-primary ${pathname?.includes("/jobs") ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  Jobs
                  <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/jobs/latest">Latest Jobs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jobs/by-location">Jobs by Location</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className={`group flex items-center gap-1 p-0 text-sm font-medium transition-colors hover:text-primary ${pathname?.includes("/study-material") ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  Study Material
                  <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/study-material/notes">Notes & Sample Papers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/study-material/ebooks">E-Books</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/study-material/videos">Video Tutorials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/study-material/mock-tests">Mock Tests</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 py-6">
                <SheetClose asChild>
                  <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                </SheetClose>

                <div className="space-y-3">
                  <p className="text-lg font-medium">Jobs</p>
                  <div className="ml-4 flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link
                        href="/jobs/latest"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Latest Jobs
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/jobs/by-location"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Jobs by Location
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-medium">Study Material</p>
                  <div className="ml-4 flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link
                        href="/study-material/notes"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Notes & Sample Papers
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/study-material/ebooks"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        E-Books
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/study-material/videos"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Video Tutorials
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/study-material/mock-tests"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Mock Tests
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <SheetClose asChild>
                  <Link href="/contact" className="text-lg font-medium transition-colors hover:text-primary">
                    Contact Us
                  </Link>
                </SheetClose>

                <div className="flex flex-col gap-2 pt-4">
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

