"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    }
  };

  return (
    <Layout>
      <section ref={ref} className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h1
                className={cn(
                  "font-serif text-3xl font-bold md:text-4xl opacity-0",
                  isVisible && "animate-fade-in"
                )}
              >
                Get in Touch
              </h1>
              <p
                className={cn(
                  "mt-2 text-lg text-primary opacity-0",
                  isVisible && "animate-fade-in-up stagger-1"
                )}
              >
                Let us help you find your exceptional home.
              </p>

              <form
                onSubmit={handleSubmit}
                className={cn(
                  "mt-8 space-y-6 opacity-0",
                  isVisible && "animate-fade-in-up stagger-2"
                )}
              >
                <div>
                  <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={cn(errors.name && "border-destructive")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={cn(errors.email && "border-destructive")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      Phone (Optional)
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      Interest
                    </label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) =>
                        setFormData({ ...formData, interest: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">Buying a Property</SelectItem>
                        <SelectItem value="selling">
                          Selling a Property
                        </SelectItem>
                        <SelectItem value="renting">Renting</SelectItem>
                        <SelectItem value="investing">Investing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="How can we assist you today?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={cn(errors.message && "border-destructive")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className={cn(
                "space-y-8 lg:pl-12 opacity-0",
                isVisible && "animate-fade-in-up stagger-3"
              )}
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">
                    Headquarters
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    123 Fifth Avenue, Penthouse Suite
                    <br />
                    New York, NY 10010
                    <br />
                    United States
                  </p>
                  <button className="mt-2 font-medium text-primary hover:underline">
                    Get Directions
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">
                    Direct Line
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Mon - Fri, 8am - 8pm EST
                  </p>
                  <p className="mt-1 font-medium">+1 (212) 555-0199</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold">
                    Concierge Email
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For VIP inquiries and press
                  </p>
                  <p className="mt-1 font-medium">vip@primeestate.com</p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto h-16 w-16 text-muted-foreground/30" />
            <p className="mt-4 text-lg font-medium text-muted-foreground">
              Interactive Map
            </p>
            <p className="text-sm text-muted-foreground">
              New York City - Global Headquarters
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 rounded-lg bg-card p-4 shadow-lg">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            Our Location
          </p>
          <p className="mt-1 font-serif text-lg font-semibold">New York City</p>
          <p className="text-sm text-muted-foreground">Global Headquarters</p>
          <button className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
