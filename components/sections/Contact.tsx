"use client";

import { Globe, Mail, MapPin, Phone, Send, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-white" aria-labelledby="contact-title">
      <div className="container-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={<span id="contact-title">Start the next conversation.</span>}
              copy="Tell us what your child, teen, school, or parent group needs. We will help shape the right emotional-growth pathway."
            />
            <div className="mt-8 grid gap-4">
              <div className="glass-panel flex items-center gap-4 rounded-3xl p-4">
                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="font-bold text-slate-700">hello@expressit.example</span>
              </div>
              <div className="glass-panel flex items-center gap-4 rounded-3xl p-4">
                <Phone className="h-6 w-6 text-secondary" aria-hidden="true" />
                <span className="font-bold text-slate-700">+91 00000 00000</span>
              </div>
              <div className="glass-panel flex items-center gap-4 rounded-3xl p-4">
                <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
                <span className="font-bold text-slate-700">India, available for schools and families</span>
              </div>
            </div>
          </div>

          <form className="glass-panel rounded-[2rem] p-6" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 font-bold text-slate-700">
                Name
                <input
                  className="touch-target rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none focus:border-primary"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 font-bold text-slate-700">
                Email
                <input
                  className="touch-target rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none focus:border-primary"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 font-bold text-slate-700">
                Phone
                <input
                  className="touch-target rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none focus:border-primary"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91"
                />
              </label>
              <label className="grid gap-2 font-bold text-slate-700">
                Newsletter
                <input
                  className="touch-target rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none focus:border-primary"
                  name="newsletter"
                  type="email"
                  placeholder="Optional email"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 font-bold text-slate-700">
              Message
              <textarea
                className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none focus:border-primary"
                name="message"
                placeholder="Tell us what you want to build for your child, teen, school, or parent group."
              />
            </label>
            <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex gap-2">
                {[Globe, Users, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="touch-target inline-flex items-center justify-center rounded-full bg-slate-100 text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
                    aria-label={index === 0 ? "Website" : index === 1 ? "Community" : "Email"}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <button
                type="button"
                className="touch-target inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-black text-white shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send Message
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
