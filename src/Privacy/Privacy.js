import React from 'react';

function Privacy() {
  return (
    <div className="container py-4">
      <h1>Privacy Policy</h1>
      <p>Effective date: May 28, 2026</p>

      <p>
        This Privacy Policy describes how AntiBacti ("we", "us", "our")
        collects, uses, shares, and retains personal data when you use the
        AntiBacti mobile application.
      </p>

      <h2>Data We Collect</h2>
      <ul>
        <li>Account data (for example, email and user identifier).</li>
        <li>App usage and analytics events.</li>
        <li>Purchase and subscription status from app stores.</li>
        <li>Technical and security logs (for example, crash and abuse logs).</li>
      </ul>

      <h2>How We Use Data</h2>
      <ul>
        <li>Provide core app functionality and account access.</li>
        <li>Improve learning content, app quality, and performance.</li>
        <li>Process subscriptions and restore purchases.</li>
        <li>Detect, prevent, and investigate fraud or abuse.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not sell personal data. We may share limited data with service
        providers (such as analytics, crash reporting, infrastructure, and app
        store billing providers) only to operate, secure, and improve the app.
      </p>

      <h2>Data Security</h2>
      <p>
        We use reasonable technical and organizational safeguards, including
        encryption in transit and access controls, to protect data.
      </p>

      <h2>Data Retention</h2>
      <ul>
        <li>
          Account data: retained while the account is active and up to 30 days
          after account deletion request.
        </li>
        <li>
          Analytics data: retained for up to 24 months from collection.
        </li>
        <li>
          Purchase/subscription records: retained for up to 7 years when
          required by tax, accounting, or legal obligations.
        </li>
        <li>
          Security and technical logs: retained for up to 90 days unless longer
          retention is required to investigate abuse or legal claims.
        </li>
      </ul>

      <h2>Data Deletion Requests</h2>
      <p>
        You can request deletion of your account and personal data using the
        developer contact information listed in the app store listing. We may
        retain limited records when required by law (for example, billing or
        fraud-prevention obligations).
      </p>

      <h2>Children's Privacy</h2>
      <p>
        AntiBacti is not directed to children under 13 (or the applicable age
        in your country). We do not knowingly collect personal data from
        children.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be reflected by updating the effective date on this page.
      </p>
    </div>
  );
}

export default Privacy;
