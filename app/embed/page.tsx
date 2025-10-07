"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function EmbedPage() {
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://your-domain.com";
  const embedUrl = `${baseUrl}/api/countdown`;
  
  const htmlCode = `<img src="${embedUrl}" alt="DAHacks 4.0 Countdown" width="800" height="300" />`;
  
  const emailCode = `<img src="${embedUrl}?${Date.now()}" alt="DAHacks 4.0 Countdown" width="800" height="300" />`;

  const copyToClipboard = (text: string, setFunc: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFunc(true);
    setTimeout(() => setFunc(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3DB0E7] to-[#6366f1] p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Embeddable Countdown Timer
        </h1>
        <p className="text-gray-600 mb-8">
          Use this countdown timer in your emails, websites, or anywhere that supports HTML!
        </p>

        {/* Live Preview */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Preview</h2>
          <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
            <img 
              src={`${embedUrl}?t=${Date.now()}`}
              alt="DAHacks 4.0 Countdown"
              className="w-full h-auto"
              key={Date.now()}
            />
          </div>
        </div>

        {/* HTML Embed Code */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Websites (HTML)</h2>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{htmlCode}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(htmlCode, setCopied)}
              className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Email Embed Code */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Emails</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Note: The countdown updates each time the email is opened. Some email clients may cache images, so results may vary.
          </p>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{emailCode}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(emailCode, setEmailCopied)}
              className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Copy to clipboard"
            >
              {emailCopied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Customization Options */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customization</h2>
          <p className="text-gray-600 mb-4">
            You can customize the size by adding query parameters:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
            <code className="text-sm text-gray-800">
              {embedUrl}?width=1200&amp;height=400
            </code>
          </div>
        </div>

        {/* Direct Link */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Direct Image URL</h2>
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all"
          >
            {embedUrl}
          </a>
        </div>

        {/* Testing Section */}
        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Test in Different Sizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Small (600x200)</h3>
              <img 
                src={`${embedUrl}?width=600&height=200&t=${Date.now()}`}
                alt="Small countdown"
                className="w-full h-auto border-2 border-gray-200 rounded"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Large (1000x350)</h3>
              <img 
                src={`${embedUrl}?width=1000&height=350&t=${Date.now()}`}
                alt="Large countdown"
                className="w-full h-auto border-2 border-gray-200 rounded"
              />
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e3] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

