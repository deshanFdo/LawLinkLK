import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Scale, Users, Briefcase, Clock, Shield, MessageSquare, FileCheck, Calendar } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LawLinkLK</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
              FAQ
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Login As</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>
                <Link href="/login/lawyer" className="flex w-full items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Login as Lawyer
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login/client" className="flex w-full items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Login as Client
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Connect with Legal Professionals in Sri Lanka
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your trusted platform for finding and connecting with qualified lawyers. Get expert legal assistance
                when you need it.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/register/client">Join as Client</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/register/lawyer">Join as Lawyer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Platform Features</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Client Features */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center mb-6">For Clients</h3>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <Shield className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Verified Lawyers</h4>
                      <p className="text-muted-foreground">
                        Access to a network of verified and qualified legal professionals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquare className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Direct Communication</h4>
                      <p className="text-muted-foreground">
                        Communicate directly with lawyers through our secure platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Easy Scheduling</h4>
                      <p className="text-muted-foreground">Book consultations and meetings with just a few clicks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FileCheck className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Case Tracking</h4>
                      <p className="text-muted-foreground">
                        Monitor your case progress and documentation in real-time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lawyer Features */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center mb-6">For Lawyers</h3>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <Users className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Client Reach</h4>
                      <p className="text-muted-foreground">
                        Expand your practice by connecting with potential clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Time Management</h4>
                      <p className="text-muted-foreground">Efficient scheduling and calendar management tools.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Briefcase className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Case Management</h4>
                      <p className="text-muted-foreground">Organize and manage all your cases in one place.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Scale className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-lg font-bold">Professional Profile</h4>
                      <p className="text-muted-foreground">Showcase your expertise and build your online presence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5" id="faq">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-[800px]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does LawLinkLK verify lawyers?</AccordionTrigger>
                  <AccordionContent>
                    We verify all lawyers through a comprehensive process that includes checking their credentials, bar
                    association membership, and professional standing. Each lawyer must provide necessary documentation
                    before being approved on our platform.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of legal services can I find?</AccordionTrigger>
                  <AccordionContent>
                    LawLinkLK covers a wide range of legal services including but not limited to corporate law, family
                    law, criminal law, property law, and civil litigation. You can filter lawyers based on their
                    specialization to find the right match for your needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I schedule a consultation?</AccordionTrigger>
                  <AccordionContent>
                    You can schedule a consultation by browsing lawyer profiles, selecting your preferred lawyer, and
                    choosing an available time slot from their calendar. Once requested, the lawyer will confirm the
                    appointment, and you'll receive a confirmation notification.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is my information secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we take data security seriously. All communications and documents shared through our platform
                    are encrypted, and we follow strict privacy policies to protect your confidential information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Join LawLinkLK today and experience a better way to connect with legal professionals.
              </p>
              <div className="space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="lg">Get Started</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-[200px]">
                    <DropdownMenuItem>
                      <Link href="/register/lawyer" className="flex w-full items-center">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Register as Lawyer
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/register/client" className="flex w-full items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Register as Client
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">LawLinkLK</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting clients with trusted legal professionals in Sri Lanka.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-muted-foreground hover:underline" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:underline" href="/careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:underline" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-muted-foreground hover:underline" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted-foreground hover:underline" href="/terms">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Connect</h4>
              <div className="flex space-x-4">
                <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LawLinkLK. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

