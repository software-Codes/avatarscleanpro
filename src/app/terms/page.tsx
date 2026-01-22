import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Avatar CleanPro's Terms of Service to understand the rules and guidelines for using our cleaning services.",
  openGraph: {
    title: "Terms of Service | Avatar CleanPro",
    description: "Terms and conditions for using Avatar CleanPro services.",
    url: "https://avatarcleanpro.com/terms",
  },
  alternates: {
    canonical: "https://avatarcleanpro.com/terms",
  },
};

/**
 * Terms of Service Page
 */
export default function TermsPage() {
  const lastUpdated = "January 22, 2026";

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-16">
        <Container>
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                Terms of Service
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <Card>
            <CardContent className="p-6 md:p-10 prose prose-slate dark:prose-invert max-w-none">
              {/* Introduction */}
              <div className="space-y-4 mb-8">
                <p className="text-lg text-muted-foreground">
                  Welcome to <strong>Avatar CleanPro</strong>. By accessing our
                  website or using our services, you agree to be bound by these
                  Terms of Service. Please read them carefully.
                </p>
              </div>

              <Separator className="my-8" />

              {/* Acceptance of Terms */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By using Avatar CleanPro's services, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms of Service
                  and our Privacy Policy. If you do not agree to these terms, please
                  do not use our services.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Services Description */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  2. Services Description
                </h2>
                <p className="text-muted-foreground mb-4">
                  Avatar CleanPro provides professional cleaning services including
                  but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Residential cleaning and housekeeping</li>
                  <li>Commercial and office cleaning</li>
                  <li>Deep cleaning services</li>
                  <li>Specialized services (upholstery, carpet, fumigation)</li>
                  <li>Laundry and laundromat services</li>
                  <li>Nanny and childcare placement</li>
                  <li>Professional training programs</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Booking and Cancellation */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  3. Booking and Cancellation Policy
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  3.1 Service Booking
                </h3>
                <p className="text-muted-foreground mb-4">
                  All service bookings must be made through our website, phone, or
                  WhatsApp. We will confirm your booking within 24 hours of
                  receiving your request.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  3.2 Cancellation Policy
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    Cancellations made more than 24 hours before the scheduled
                    service will receive a full refund
                  </li>
                  <li>
                    Cancellations made within 24 hours may be subject to a 50%
                    cancellation fee
                  </li>
                  <li>
                    No-shows or same-day cancellations may be charged the full
                    service fee
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  3.3 Rescheduling
                </h3>
                <p className="text-muted-foreground">
                  We offer free rescheduling if requested at least 24 hours before
                  the scheduled service time.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Payment Terms */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  4. Payment Terms
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Payment is due upon completion of service unless otherwise
                    agreed
                  </li>
                  <li>
                    We accept cash, mobile money (M-Pesa), and bank transfers
                  </li>
                  <li>
                    Monthly service contracts require payment in advance or on the
                    first service day of each month
                  </li>
                  <li>
                    Late payments may result in suspension of services and late fees
                  </li>
                  <li>All prices are quoted in Kenya Shillings (KES)</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Customer Responsibilities */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  5. Customer Responsibilities
                </h2>
                <p className="text-muted-foreground mb-4">As a customer, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate contact and service location information</li>
                  <li>
                    Ensure access to the property at the scheduled service time
                  </li>
                  <li>
                    Secure or remove valuable, fragile, or personal items before
                    service
                  </li>
                  <li>
                    Inform us of any special requirements, allergies, or hazards
                  </li>
                  <li>
                    Provide a safe working environment for our staff (adequate
                    lighting, water, electricity)
                  </li>
                  <li>
                    Treat our staff with respect and professionalism at all times
                  </li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Liability and Insurance */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  6. Liability and Insurance
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  6.1 Our Liability
                </h3>
                <p className="text-muted-foreground mb-4">
                  Avatar CleanPro maintains liability insurance for damages that may
                  occur during service delivery. However, we are not responsible
                  for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>
                    Pre-existing damage or wear and tear to property or items
                  </li>
                  <li>
                    Damage to items not secured or removed as instructed
                  </li>
                  <li>Loss or damage to cash, jewelry, or valuables left unsecured</li>
                  <li>
                    Damage resulting from hidden defects or fragile items not
                    disclosed
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  6.2 Claims
                </h3>
                <p className="text-muted-foreground">
                  Any damage claims must be reported within 24 hours of service
                  completion with photographic evidence. We will investigate all
                  claims and respond within 7 business days.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Quality Guarantee */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  7. Quality Guarantee
                </h2>
                <p className="text-muted-foreground">
                  We stand behind the quality of our work. If you are not satisfied
                  with our service, please contact us within 24 hours and we will:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Return to address any issues at no additional charge</li>
                  <li>Provide a partial or full refund if we cannot resolve the issue</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Termination */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  8. Termination of Service
                </h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to refuse or terminate service if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    The customer provides false information or engages in fraudulent
                    activity
                  </li>
                  <li>
                    The working environment is deemed unsafe or poses health risks to
                    our staff
                  </li>
                  <li>
                    The customer behaves abusively, threateningly, or inappropriately
                    toward our staff
                  </li>
                  <li>Payment obligations are not met</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Intellectual Property */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  9. Intellectual Property
                </h2>
                <p className="text-muted-foreground">
                  All content on our website, including text, graphics, logos, and
                  images, is the property of Avatar CleanPro and protected by
                  copyright and trademark laws. You may not reproduce, distribute, or
                  use any content without our written permission.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Limitation of Liability */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  10. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Avatar CleanPro shall not
                  be liable for any indirect, incidental, special, consequential, or
                  punitive damages arising out of or relating to your use of our
                  services. Our total liability shall not exceed the amount paid for
                  the specific service giving rise to the claim.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Governing Law */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  11. Governing Law
                </h2>
                <p className="text-muted-foreground">
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of Kenya. Any disputes arising from these
                  terms shall be subject to the exclusive jurisdiction of the courts
                  of Kenya.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Changes to Terms */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  12. Changes to Terms
                </h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time.
                  Changes will be effective immediately upon posting to our website.
                  Your continued use of our services after changes are posted
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  13. Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                  <p className="text-foreground">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p className="text-foreground">
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                  <p className="text-foreground">
                    <strong>Address:</strong> {siteConfig.contact.address}
                  </p>
                </div>
              </section>

              <Separator className="my-8" />

              {/* Acknowledgment */}
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Acknowledgment:</strong> By using Avatar CleanPro's
                  services, you acknowledge that you have read, understood, and agree
                  to be bound by these Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
