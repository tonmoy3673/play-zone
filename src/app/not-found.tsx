'use client';
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen backdrop-blur-3xl bg-gradient-to-br from-[#521212] via-[#BAD1FFa6] to-[#AFF4FAa6]">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6 max-w-md">
          {/* 404 Number */}
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5c8ff7] to-[#276aee]">
            404
          </div>
          
          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-[--text-color-dark-100]">
              Page Not Found
            </h1>
            <p className="text-[--text-color-paragraph] text-base md:text-lg leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-[#5c8ff7] to-[#276aee] text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 min-w-[140px] text-center"
            >
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border-2 border-[#5c8ff7] text-[#276aee] font-medium rounded-lg hover:bg-[#5c8ff7] hover:text-white transition-all duration-200 min-w-[140px]"
            >
              Go Back
            </button>
          </div>
          
          {/* Decorative Element */}
          <div className="pt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-[#5c8ff7] to-[#276aee] rounded-full mx-auto opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}