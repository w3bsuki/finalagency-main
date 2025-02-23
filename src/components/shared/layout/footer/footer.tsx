"use client";

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

export function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-white/10 bg-[#000] text-white">
      <div className="container relative mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Stay Connected</h2>
            <p className="mb-6 text-white/60">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/20 focus:ring-1 focus:ring-white/20"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 rounded-full bg-white hover:bg-white/90 text-black transition-all hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Quick Links</h3>
            <nav className="space-y-3 text-[15px]">
              <a href="#" className="block text-white/60 transition-colors hover:text-white">
                Home
              </a>
              <a href="#" className="block text-white/60 transition-colors hover:text-white">
                About Us
              </a>
              <a href="#" className="block text-white/60 transition-colors hover:text-white">
                Services
              </a>
              <a href="#" className="block text-white/60 transition-colors hover:text-white">
                Products
              </a>
              <a href="#" className="block text-white/60 transition-colors hover:text-white">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Contact Us</h3>
            <address className="space-y-3 text-[15px] not-italic text-white/60">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-6 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Follow Us</h3>
            <div className="mb-8 flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/80 backdrop-blur-sm border-white/10 text-white">
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/80 backdrop-blur-sm border-white/10 text-white">
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/80 backdrop-blur-sm border-white/10 text-white">
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/80 backdrop-blur-sm border-white/10 text-white">
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
              <Sun className="h-4 w-4 text-white/70" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white/20"
              />
              <Moon className="h-4 w-4 text-white/70" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-white/40">
            2024 Your Company. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}