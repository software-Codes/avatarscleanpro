"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { serviceCategories } from "@/data/services";

/**
 * Form validation schema using Zod
 */
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * EmailJS Configuration
 * These values should be set in environment variables
 */
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

/**
 * Contact Form Component
 * Full-featured form with validation, EmailJS integration, and status feedback
 */
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // For development, simulate success
      console.log("EmailJS not configured. Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      reset();
      return;
    }

    try {
      // Get current timestamp
      const now = new Date();
      const timeString = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });

      // Send email via EmailJS with all fields
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          message: data.message,
          time: timeString,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or contact us directly."
      );
    }
  };

  // Success state
  if (status === "success") {
    return (
      <Card className="h-full border-border/50">
        <CardContent className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-heading font-bold">Message Sent!</h3>
          <p className="text-muted-foreground max-w-sm">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setStatus("idle")}
            variant="outline"
            className="mt-4"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full border-border/50">
      <CardContent className="p-6 md:p-8">
        {/* Section title */}
        <div className="mb-6">
          <h2 className="text-2xl font-heading font-bold mb-2">
            Send Us a Message
          </h2>
          <p className="text-muted-foreground">
            Fill out the form below and we'll get back to you soon
          </p>
        </div>

        {/* Error alert */}
        {status === "error" && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-destructive">Failed to send</p>
              <p className="text-sm text-destructive/80">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name & Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Your full name"
                {...register("name")}
                className={cn(errors.name && "border-destructive")}
                disabled={status === "submitting"}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={cn(errors.email && "border-destructive")}
                disabled={status === "submitting"}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone & Service row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+254 XXX XXX XXX"
                {...register("phone")}
                className={cn(errors.phone && "border-destructive")}
                disabled={status === "submitting"}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Service */}
            <div className="space-y-2">
              <Label htmlFor="service">
                Service <span className="text-destructive">*</span>
              </Label>
              <Select
                value={selectedService}
                onValueChange={(value) => setValue("service", value)}
                disabled={status === "submitting"}
              >
                <SelectTrigger
                  id="service"
                  className={cn(errors.service && "border-destructive")}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-sm text-destructive">
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="How can we help you? Please provide as much detail as possible..."
              rows={5}
              {...register("message")}
              className={cn(
                "resize-none",
                errors.message && "border-destructive"
              )}
              disabled={status === "submitting"}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            size="lg"
            className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-md"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to be contacted regarding your
            inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
