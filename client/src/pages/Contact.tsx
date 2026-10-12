/**
 * Contact.tsx — Contact Me page (Assignment rubric items 9 & 10).
 * Left column: contact information panel.
 * Right column: interactive form (First Name, Last Name, Contact
 * Number, Email Address, Message). On submit the form CAPTURES the
 * visitor's data into component state (also mirrored to localStorage
 * so it survives page reloads) and then REDIRECTS back to Home.
 */

import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Mail, Phone, MapPin, CalendarCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/data/portfolioData";

// Shape of the data captured from the interactive form
interface ContactFormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  message: string;
}

const emptyForm: ContactFormData = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  emailAddress: "",
  message: "",
};

export default function Contact() {
  const navigate = useNavigate();

  // Form state: every keystroke is captured here (controlled inputs)
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  // Generic change handler — updates the matching field by input name
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  // Submit handler: capture the data, then redirect to the Home page
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // stop the browser's default page reload

    // 1) CAPTURE: log to console and persist a copy in localStorage
    console.log("Contact form captured:", formData);
    const savedMessages = JSON.parse(
      localStorage.getItem("portfolioContactMessages") ?? "[]"
    ) as ContactFormData[];
    savedMessages.push({ ...formData });
    localStorage.setItem("portfolioContactMessages", JSON.stringify(savedMessages));

    // 2) Confirm to the visitor, then 3) REDIRECT to Home
    setSubmitted(true);
    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Contact Me</h1>
      <p className="text-slate-400 mb-8">
        Have a question or an opportunity? Send me a message below.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* ---- Contact information panel (rubric item 9) ---- */}
        <Card className="bg-slate-800/60 border-slate-700 h-fit">
          <CardHeader>
            <CardTitle className="text-white">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="flex items-center gap-3 text-slate-300">
              <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
              {contactDetails.email}
            </p>
            <p className="flex items-center gap-3 text-slate-300">
              <Phone className="h-5 w-5 text-indigo-400 shrink-0" />
              {contactDetails.phone}
            </p>
            <p className="flex items-center gap-3 text-slate-300">
              <MapPin className="h-5 w-5 text-indigo-400 shrink-0" />
              {contactDetails.location}
            </p>
            <p className="flex items-center gap-3 text-slate-300">
              <CalendarCheck className="h-5 w-5 text-indigo-400 shrink-0" />
              {contactDetails.availability}
            </p>
          </CardContent>
        </Card>

        {/* ---- Interactive message form (rubric item 10) ---- */}
        <Card className="bg-slate-800/60 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-200" htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Jane"
                    className="bg-slate-900 border-slate-600 text-slate-100 placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-200" htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className="bg-slate-900 border-slate-600 text-slate-100 placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-200" htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+1 (416) 555-0100"
                  className="bg-slate-900 border-slate-600 text-slate-100 placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-200" htmlFor="emailAddress">Email Address</Label>
                <Input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  placeholder="jane.doe@example.com"
                  className="bg-slate-900 border-slate-600 text-slate-100 placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-200" htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Write your message here…"
                  className="bg-slate-900 border-slate-600 text-slate-100 placeholder:text-slate-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500"
                disabled={submitted}
              >
                <Send className="mr-2 h-4 w-4" />
                {submitted ? "Message captured — redirecting…" : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
