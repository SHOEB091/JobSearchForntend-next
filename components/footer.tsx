import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">EasyNaukri4U</h3>
            <p className="text-muted-foreground mb-4">
              Your one-stop platform for finding the perfect job and preparing for your career journey.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs/latest" className="text-muted-foreground hover:text-primary">
                  Latest Jobs
                </Link>
              </li>
              <li>
                <Link href="/jobs/by-location" className="text-muted-foreground hover:text-primary">
                  Jobs by Location
                </Link>
              </li>
              <li>
                <Link href="/study-material/notes" className="text-muted-foreground hover:text-primary">
                  Study Material
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Study Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/study-material/notes" className="text-muted-foreground hover:text-primary">
                  Notes & Sample Papers
                </Link>
              </li>
              <li>
                <Link href="/study-material/ebooks" className="text-muted-foreground hover:text-primary">
                  E-Books
                </Link>
              </li>
              <li>
                <Link href="/study-material/videos" className="text-muted-foreground hover:text-primary">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/study-material/mock-tests" className="text-muted-foreground hover:text-primary">
                  Mock Tests
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">prathiba tower </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">EasyNaurkri4U.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Naukri4U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

