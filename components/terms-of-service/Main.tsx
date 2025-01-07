"use client";

// Library Import
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    animationControls.start("visible");
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="text-center space-y-12 mt-[80px] wrapper"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl lg:text-4xl font-bold font-gotham text-white"
        variants={textVariants}
      >
        Our <span className="text-gradient">Terms of Service</span>
      </motion.h1>
      <motion.div
        className="flex flex-col items-start space-y-4 text-start"
        variants={textVariants}
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          1. Overview
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI {'("Company," "we," "our," or "us")'} provides a suite
          of AI-powered tools and services tailored to enhance e-commerce
          businesses. These include, but are not limited to:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Multichannel Chatbots: AI chatbots for automated customer support
            across platforms like WhatsApp, Facebook Messenger, and web chat.
          </li>
          <li>
            CRM Integration: Seamless synchronization with existing customer
            relationship management (CRM) systems.
          </li>
          <li>
            Marketing Automation: Tools to create personalized email campaigns,
            manage WhatsApp outreach, and develop data-driven marketing
            strategies.
          </li>
          <li>
            Analytics & Insights: Real-time dashboards for monitoring customer
            engagement and optimizing business decisions.
          </li>
          <li>
            Custom Integrations: APIs and custom setups to tailor solutions to
            your business needs.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          These Terms govern your use of the Purple Box AI website
          (https://purple-box.app) and all related services, including mobile
          applications, APIs, and any other digital platforms we operate.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          By accessing or using these services, you acknowledge that you have
          read, understood, and agree to comply with these Terms.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          2. Eligibility
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          By accessing or using Purple Box AI’s services, you represent and
          warrant that:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Age Requirement: You are at least 18 years old or have obtained the
            express consent of a parent or legal guardian if you are under the
            age of 18.
          </li>
          <li>
            Legal Authority: You have the legal authority to enter into these
            Terms on behalf of yourself or the organization you represent.
          </li>
          <li>
            Compliance with Laws: You agree to comply with all applicable laws
            and regulations while using our services.
          </li>
          <li>
            For Businesses or Organizations: If you are using our services on
            behalf of a business or organization, you confirm that you are an
            authorized representative of that entity and have the authority to
            bind it to these Terms.
          </li>
          <li>
            Geographic Restrictions: Our services are available in regions where
            we operate. You agree not to access or use our services in
            jurisdictions where doing so would violate applicable laws or
            regulations.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Important Note: If we determine that you do not meet the eligibility
          criteria outlined above, we reserve the right to suspend or terminate
          your account.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          3. Services
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI provides innovative tools and solutions for e-commerce
          businesses, including but not limited to:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            AI-Powered Tools: Automates customer interactions through
            intelligent chatbots that can be deployed across multiple channels,
            including WhatsApp, Facebook Messenger, and Website Live Chat.
            Features include automated lead qualification, 24/7 customer
            support, and real-time query resolution.
          </li>
          <li>
            CRM Integration: Seamless integration with popular CRM platforms
            like Salesforce, HubSpot, and Zoho to synchronize customer data and
            streamline communication between sales and support teams.
          </li>
          <li>
            Marketing Automation: Personalized email marketing campaigns
            tailored to user behavior, WhatsApp messaging for instant
            communication and promotions, and automated workflows to engage and
            retain customers with minimal manual effort.
          </li>
          <li>
            Analytics & Insights: Real-time data to track key metrics such as
            customer engagement rates, conversion rates from chatbot
            interactions, and behavioral trends and patterns. Dashboards with
            actionable insights to help you optimize marketing strategies and
            business decisions.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Rights Reserved by Purple Box AI: We reserve the right to modify,
          suspend, or discontinue any part of the services at any time without
          prior notice. However, for non-urgent changes or those affecting paid
          features, we will strive to provide at least 30 {"days'"} notice.
          Critical changes, such as those required by law or technical
          constraints, may occur without advance notice.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Limitations on Modifications: If a modification materially affects a
          paid subscription, we will provide options such as a refund for unused
          portions or alternate solutions, at our discretion.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          4. User Responsibilities
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          By using Purple Box AI, you agree to:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Provide Accurate Information: Ensure that all information provided
            during registration, such as your name, email address, and payment
            details, is accurate, complete, and up to date.
          </li>
          <li>
            Maintain Account Security: Keep your account credentials (e.g.,
            username, password) confidential. You are responsible for all
            activity that occurs under your account. Notify us immediately if
            you suspect unauthorized access or a security breach.
          </li>
          <li>
            Lawful Use Only: Use the platform in compliance with all applicable
            laws and regulations. Ensure that any data, content, or actions on
            the platform respect privacy laws, intellectual property rights, and
            other legal obligations.
          </li>
        </ul>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Prohibited Activities: You agree not to engage in the following:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Hacking or Reverse-Engineering: Attempting to access, tamper with,
            or reverse-engineer the {"platform's"} software, algorithms, or
            source code.
          </li>
          <li>
            Unauthorized Use: Sharing your account credentials with others or
            impersonating another individual or organization.
          </li>
          <li>
            Spam or Malicious Content: Using the platform to send spam, phishing
            attempts, or any unauthorized or harmful content.
          </li>
          <li>
            Privacy Violations: Collecting or sharing personal data through the
            platform in violation of GDPR, CCPA, or other privacy laws.
          </li>
          <li>
            Disruptive Behavior: Interfering with the operation of the platform,
            such as introducing viruses or overwhelming the system with
            excessive requests.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Consequences of Violations: If you violate these Terms, Purple Box AI
          reserves the right to:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Suspend or Terminate Your Account: Your access to the platform may
            be temporarily or permanently revoked.
          </li>
          <li>
            Pursue Legal Action: Purple Box AI may seek damages or legal
            remedies if the violation causes harm to our services or reputation.
          </li>
          <li>
            Report to Authorities: Violations involving illegal activities will
            be reported to relevant law enforcement agencies.
          </li>
        </ul>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          5. Fees and Payment
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI offers a combination of free and paid services. By using
          our paid features, you agree to the following:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Payment Obligations: Provide valid and up-to-date payment
            information (e.g., credit card details) for any subscriptions or
            one-time purchases. Pay all fees and charges applicable to the
            services you use. Acknowledge that payments are non-refundable,
            unless explicitly stated otherwise.
          </li>
          <li>
            Subscription Terms: Some features require a subscription, which may
            be billed monthly, annually, or as otherwise indicated during the
            purchase process.
          </li>
          <li>
            Automatic Renewal: Subscriptions automatically renew at the end of
            the billing cycle unless canceled beforehand. Renewal fees will be
            charged to your saved payment method unless you cancel the
            subscription before the renewal date.
          </li>
          <li>
            Cancellation: You can cancel your subscription at any time through
            your account settings or by contacting support. Cancellations take
            effect at the end of the current billing cycle, and no refunds will
            be provided for the remaining time.
          </li>
          <li>
            Trial Periods (If Offered): If a free trial is available, it will be
            clearly stated during registration. Trials automatically convert to
            paid subscriptions unless canceled before the trial period ends.
          </li>
          <li>
            Taxes and Additional Fees: Prices listed for services may include or
            exclude VAT, sales tax, or other applicable fees, depending on your
            location. You are responsible for paying any additional taxes or
            fees required by your jurisdiction.
          </li>
          <li>
            Refund Policy: Payments are generally non-refundable, except under
            specific circumstances, such as billing errors or service
            inaccessibility. Refund requests must be submitted in writing to our
            support team within 30 days of the charge.
          </li>
          <li>
            Changes to Pricing: Purple Box AI reserves the right to adjust
            prices for subscriptions or other services. Any changes will be
            communicated at least 30 days in advance. Continued use of the
            service after the price change indicates acceptance of the new
            pricing.
          </li>
        </ul>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          6. Intellectual Property
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          All intellectual property rights associated with Purple Box AI,
          including but not limited to content, trademarks, software,
          algorithms, and technologies, are the sole property of Purple Box AI
          or its licensors. These rights are protected under applicable
          copyright, trademark, patent, and trade secret laws.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          This includes, but is not limited to:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Chatbot Algorithms: The proprietary algorithms and their
            configurations.
          </li>
          <li>
            User Interfaces: The design, layout, and functionality of Purple Box
            AI’s platforms.
          </li>
          <li>
            Custom Integrations: Bespoke tools and APIs developed for individual
            users or organizations.
          </li>
          <li>
            Branding Elements: The Purple Box AI name, logo, and associated
            branding materials.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          By using Purple Box AI services, you agree not to engage in the
          following prohibited activities:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Unauthorized Use: Copying, distributing, modifying, or creating
            derivative works based on any part of the platform without explicit
            written permission.
          </li>
          <li>
            Reverse-Engineering: Attempting to decompile, disassemble, or
            reverse-engineer the platform’s source code, software, or underlying
            technologies.
          </li>
          <li>
            Commercial Use: Using any content, technology, or branding from
            Purple Box AI for commercial purposes without prior written consent.
          </li>
          <li>
            Trademark Misuse: Displaying Purple Box AI trademarks{" "}
            {`(e.g.,
            "Powered by Purple Box AI")`}{" "}
            without approval or in a misleading context.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Violations of intellectual property rights may result in:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Service Suspension or Termination: Immediate suspension or permanent
            termination of your account.
          </li>
          <li>
            Legal Action: Purple Box AI reserves the right to pursue legal
            remedies for unauthorized use, including seeking damages.
          </li>
          <li>
            Indemnification: Users agree to indemnify and hold Purple Box AI
            harmless against claims, damages, or losses resulting from such
            violations.
          </li>
        </ul>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          7. Privacy Policy
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Your privacy is important to us. The Privacy Policy explains how
          Purple Box AI collects, uses, and protects personal data. By using our
          services, you agree to the terms outlined in our Privacy Policy, which
          can be accessed directly here.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI collects personal data, which may include:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            User Information: Name, email address, phone number, and other
            details provided during registration.
          </li>
          <li>
            Usage Data: Information about how you interact with the platform,
            including actions taken, pages visited, and session durations.
          </li>
          <li>
            Cookies and Tracking Tools: Data collected through cookies and
            similar technologies to analyze usage patterns and enhance the user
            experience.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Data is collected and processed for the following purposes:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Service Delivery: To provide, operate, and improve the platform’s
            functionality.
          </li>
          <li>
            Performance Improvements: To analyze user behavior and optimize
            performance and user experience.
          </li>
          <li>
            Marketing and Communication: Sending promotional messages,
            newsletters, or updates about new features. Delivering personalized
            advertising based on user preferences.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI may share data with trusted third parties, including:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Service Providers: Payment processors (e.g., Stripe, PayPal) to
            manage transactions. Cloud providers (e.g., AWS, Google Cloud) for
            data storage and processing.
          </li>
          <li>
            Compliance Requirements: Sharing data with authorities when required
            by law, such as to comply with GDPR or CCPA regulations.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          By using our services, you consent to:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Cookies and Analytics: Purple Box AI’s use of cookies and tracking
            tools to gather analytics.
          </li>
          <li>
            Data Sharing: Data sharing with third-party providers as outlined
            above.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI is committed to protecting user privacy and ensuring
          compliance with regulations like GDPR (EU) and CCPA (California). As a
          user, you have the following rights:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Access and Portability: Request access to the personal data we have
            collected. Receive a copy of your data in a portable format.
          </li>
          <li>
            Deletion: Request the deletion of your personal data unless required
            by law to retain it.
          </li>
          <li>
            Opt-Out: Opt-out of certain data collection practices, such as
            receiving marketing emails or targeted advertising. Control cookie
            preferences through browser settings or a cookie management tool.
          </li>
          <li>
            Correction: Request corrections to inaccurate or incomplete data.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI implements industry-standard security measures to
          protect your data, including:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>Encryption: To secure data in transit and at rest.</li>
          <li>
            Access Controls: Restricting access to authorized personnel only.
          </li>
          <li>Regular Audits: To identify and address vulnerabilities.</li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          While we strive to protect your data, no method of transmission or
          storage is completely secure. Users acknowledge this risk when using
          our services.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI may update its Privacy Policy from time to time. Any
          updates will be communicated via:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>Notifications within the platform.</li>
          <li>Email alerts to registered users.</li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Continued use of the services constitutes acceptance of the revised
          Privacy Policy.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          8. Data Usage and Storage
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          User Ownership: You retain full ownership of all data you provide
          through Purple Box AI’s services, including customer lists, messages,
          and other content submitted via the platform.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          By using our services, you grant Purple Box AI a non-exclusive,
          royalty-free, worldwide license to use your data solely for the
          following purposes:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Service Delivery: To operate, maintain, and enhance our platform
            (e.g., improving AI chatbot interactions or ensuring seamless CRM
            integrations).
          </li>
          <li>
            Analytics and Optimization: To analyze data patterns for the purpose
            of improving user experience and business insights.
          </li>
          <li>
            Compliance and Security: To detect, prevent, and address fraud,
            security breaches, or other harmful activities.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI retains user data for as long as necessary to provide
          the services, comply with legal obligations, resolve disputes, or
          enforce our agreements. Upon termination of your account, your data
          will be deleted or anonymized within 30 days, unless retention is
          required by law.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          We implement industry-standard security practices to protect user
          data, including encryption, access controls, and firewalls. While we
          strive to protect your data, absolute security cannot be guaranteed
          due to the inherent risks of internet-based systems.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Regular backups of critical data are performed to ensure availability
          in case of system failures. A disaster recovery plan is in place to
          minimize downtime and data loss in the event of technical issues.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          By using the platform, you acknowledge and accept the risks associated
          with data transmission over the internet.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          9. Limitations of Liability
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          To the fullest extent permitted by law, Purple Box AI’s liability is
          limited as follows:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            No Liability for Indirect or Consequential Damages: We are not
            liable for indirect, incidental, or consequential damages, including
            but not limited to lost revenue, business interruptions, or
            reputational harm.
          </li>
          <li>
            Liability Cap: Purple Box AI’s total liability is capped at the
            amount you have paid for the services in the past 12 months.
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          To clarify, Purple Box AI is not responsible for unauthorized access,
          third-party interruptions, or user misuse.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          These limitations do not apply in cases of gross negligence, willful
          misconduct, or where liability cannot legally be excluded under
          applicable law.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          10. Termination
        </h2>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Purple Box AI reserves the right to suspend or terminate your access
          to the platform and services in the following situations:
        </p>
        <ul className="max-w-3xl  text-md lg:text-lg text-purple-200 list-disc list-inside">
          <li>
            Violation of Terms: If you engage in activities that violate these
            Terms, such as platform abuse, unlawful actions, or misuse of the
            services.
          </li>
          <li>
            Legal or Regulatory Requirements: If termination is mandated by a
            government authority or due to compliance with applicable laws.
          </li>
          <li>
            Operational Challenges: If continued operation becomes technically
            or commercially infeasible (e.g., major infrastructure changes or
            third-party dependencies).
          </li>
        </ul>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          You may terminate your account at any time by contacting support or
          using the account settings panel to cancel subscriptions or close your
          account.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          Upon termination, your access to the platform and all related features
          will be immediately revoked. Data associated with your account may be
          deleted or archived for specific purposes such as resolving disputes
          or fulfilling legal obligations.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          If we terminate your account without cause, a pro-rata refund for
          unused subscription periods may be issued. Subscriptions canceled
          mid-term by the user are generally non-refundable, unless otherwise
          stated.
        </p>
        <p className="max-w-3xl  text-md lg:text-lg text-purple-200">
          If your account is terminated by mistake or due to unresolved
          disputes, contact support to initiate a review process. Reactivation
          may occur at Purple Box {"AI's"} sole discretion after verifying
          compliance with these Terms.
        </p>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          11. Governing Law
        </h2>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          These Terms are governed by and construed in accordance with the laws
          of Spain, without regard to its conflict of law provisions.
        </p>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Disputes arising under or in connection with these Terms shall be
          resolved through mediation or arbitration before escalating to legal
          action. If mediation fails, disputes will be resolved in the courts
          located in Madrid, Spain.
        </p>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          If you access the services from outside Spain, you are responsible for
          ensuring compliance with local laws. Use of the platform constitutes
          agreement to resolve disputes under Spanish jurisdiction.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          12. Changes to Terms
        </h2>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Purple Box AI reserves the right to modify these Terms at any time.
          Updates will be communicated via email notifications to registered
          users and website announcements.
        </p>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Changes will take effect 30 days after the notification is issued. In
          cases of urgent updates (e.g., legal compliance), changes may take
          effect immediately.
        </p>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Continued use of the platform after the effective date constitutes
          acceptance of the updated Terms. If you do not agree with the revised
          Terms, you must stop using the services before the changes take
          effect.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-white text-start">
          13. Contact Us
        </h2>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          We value your feedback and are here to assist with any questions,
          concerns, or issues. Please use the following channels to reach us:
        </p>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Email: support@purple-box.app
        </p>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Mailing Address: Purple Box AI SL, Calle Sant’Engracia 151, Madrid,
          Spain
        </p>
        <p className="max-w-3xl text-md lg:text-lg text-purple-200">
          Live Chat: Available on the website during business hours.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Main;
