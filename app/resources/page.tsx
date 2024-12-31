"use client";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="container max-w-3xl p-8 bg-gray-700 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Resources & Security Measures</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Steps to Submit Your Report</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Step 01:</strong> Submit Your Report<br />
                Fill out our secure form with as much detail as possible. No personal information is required. You can include photos, videos, or documents if available.
              </li>
              <li>
                <strong>Step 02:</strong> Encryption & Anonymization<br />
                Your report is immediately encrypted using military-grade protocols. All identifying metadata is stripped from your submission, including IP address and device information.
              </li>
              <li>
                <strong>Step 03:</strong> Verification & Routing<br />
                Our system verifies the report's jurisdiction and automatically routes it to the appropriate law enforcement agency. The entire process maintains your anonymity.
              </li>
              <li>
                <strong>Step 04:</strong> Secure Communication Channel<br />
                If needed, law enforcement can communicate with you through our encrypted platform using your anonymous report ID. You maintain control over the conversation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>End-to-End Encryption:</strong> All data is encrypted in transit and at rest to ensure privacy and security.
              </li>
              <li>
                <strong>No Logs Policy:</strong> We never store IP addresses or user metadata to preserve anonymity.
              </li>
              <li>
                <strong>Regular Audits:</strong> Independent security firms verify our systems to ensure continuous security improvements.
              </li>
            </ul>
          </section>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Make a Report?</h2>
            <a
              href="/submit-report"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-200"
            >
              Start Anonymous Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
