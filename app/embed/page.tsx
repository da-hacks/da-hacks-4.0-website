"use client";

import { useState, useEffect } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default function EmbedPage() {
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState(process.env.NEXT_PUBLIC_URL || "https://localhost:3000");
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    // Set baseUrl after hydration to avoid mismatch
    setBaseUrl(window.location.origin);
    // Set timestamp after hydration
    setTimestamp(Date.now());
  }, []);

  const embedUrl = `${baseUrl}/api/countdown`;
  
  const htmlCode = `<img src="${embedUrl}" alt="DAHacks 4.0 Countdown" width="800" height="300" />`;
  
  const emailCode = `<img src="${embedUrl}?${timestamp || 't=cache-bust'}" alt="DAHacks 4.0 Countdown" width="800" height="300" />`;

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
            <Image 
              src={`${embedUrl}?t=${timestamp}`}
              alt="DAHacks 4.0 Countdown"
              className="w-full h-auto"
              key={timestamp}
              width={800}
              height={300}
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
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-block px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="text-blue-600 hover:text-blue-800 underline break-all">{embedUrl}</span>
          </div>
        </div>

        {/* Testing Section */}
        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Test in Different Sizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Small (600x200)</h3>
              <Image 
                src={`${embedUrl}?width=600&height=200&t=${timestamp}`}
                alt="Small countdown"
                className="w-full h-auto border-2 border-gray-200 rounded"
                width={600}
                height={200}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Large (1000x350)</h3>
              <Image 
                src={`${embedUrl}?width=1000&height=350&t=${timestamp}`}
                alt="Large countdown"
                className="w-full h-auto border-2 border-gray-200 rounded"
                width={1000}
                height={350}
              />
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

