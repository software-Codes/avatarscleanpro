import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Avatar CleanPro collects, uses, and protects your personal information. Your privacy is important to us.",
  openGraph: {
    title: "Privacy Policy | Avatar CleanPro",
    description: "Learn how we protect your privacy and handle your data.",
    url: "https://avatarcleanpro.com/privacy",
  },
  alternates: {
    canonical: "https://avatarcleanpro.com/privacy",
  },
};

/**
 * Privacy Policy Page
 */
export default function PrivacyPage() {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                Privacy Policy
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
                  At <strong>Avatar CleanPro</strong>, we are committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you
                  visit our website or use our services.
                </p>
              </div>

              <Separator className="my-8" />

              {/* Information We Collect */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  1. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  1.1 Personal Information
                </h3>
                <p className="text-muted-foreground mb-4">
                  When you contact us or use our services, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Service address and location details</li>
                  <li>
                    Payment information (processed securely through third-party
                    providers)
                  </li>
                  <li>Communication preferences</li>
                  <li>Service history and preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  1.2 Automatically Collected Information
                </h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral source</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* How We Use Your Information */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and manage our cleaning services</li>
                  <li>Process bookings and payments</li>
                  <li>Communicate with you about services and appointments</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Information Sharing */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your
                  information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    assist with payment processing, email delivery, and website
                    hosting
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to
                    protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, sale, or acquisition of all or part of our business
                  </li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Data Security */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to
                  protect your personal information. However, no method of
                  transmission over the internet or electronic storage is 100%
                  secure. While we strive to protect your data, we cannot guarantee
                  absolute security.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Your Rights */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  5. Your Rights
                </h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Cookies */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your
                  experience on our website. You can control cookies through your
                  browser settings. Please note that disabling cookies may affect
                  website functionality.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Children's Privacy */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  7. Children's Privacy
                </h2>
                <p className="text-muted-foreground">
                  Our services are not directed to individuals under the age of 18.
                  We do not knowingly collect personal information from children. If
                  you believe we have collected information from a child, please
                  contact us immediately.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Changes */}
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this page
                  and updating the "Last updated" date.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  9. Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or concerns about this Privacy Policy or our
                  data practices, please contact us:
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
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
