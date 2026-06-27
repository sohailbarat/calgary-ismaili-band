"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { eventTypes } from "@/data/mock-data";
import { Loader2, CheckCircle } from "lucide-react";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eventType, setEventType] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/50 p-12 text-center">
        <CheckCircle className="h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-xl font-semibold">
          Request Received
        </h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Thank you for your request. A volunteer representative will contact
          you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-name">Full Name</Label>
          <Input
            id="booking-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-organization">Organization</Label>
          <Input
            id="booking-organization"
            name="organization"
            type="text"
            placeholder="Your organization (optional)"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-email">Email</Label>
          <Input
            id="booking-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-phone">Phone Number</Label>
          <Input
            id="booking-phone"
            name="phone"
            type="tel"
            required
            placeholder="(403) 555-0123"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-event-type">Event Type</Label>
          <Select
            name="eventType"
            required
            value={eventType}
            onValueChange={setEventType}
          >
            <SelectTrigger id="booking-event-type" aria-label="Event type">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-date">Event Date</Label>
          <Input
            id="booking-date"
            name="eventDate"
            type="date"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-location">Location</Label>
          <Input
            id="booking-location"
            name="location"
            type="text"
            required
            placeholder="Event venue or address"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-attendance">Estimated Attendance</Label>
          <Input
            id="booking-attendance"
            name="attendance"
            type="number"
            min="1"
            placeholder="Approximate number of guests"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="booking-details">Additional Details</Label>
        <Textarea
          id="booking-details"
          name="details"
          placeholder="Tell us about your event, preferred performance style, timing, etc."
          rows={5}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Booking Request"
        )}
      </Button>
    </form>
  );
}
