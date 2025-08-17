import React from "react";
import { CERTIFICATIONS } from "../constants/index.js";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  const reactNativeCert = CERTIFICATIONS.find((cert) =>
    cert.title.includes("React Native Specialization")
  );

  const otherCertifications = CERTIFICATIONS.filter(
    (cert) => !cert.title.includes("React Native Specialization")
  );

  return (
    <div className="pb-24 -mt-20">
      <h2 className="my-20 text-center text-4xl lg:text-8xl">Certifications</h2>

      {reactNativeCert && (
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent flex-1"></div>
            <span className="px-4 text-stone-400 text-sm uppercase tracking-wider">
              Featured Certification
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent flex-1"></div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border-2 border-stone-700 bg-gradient-to-br from-stone-900/80 to-stone-800/80 p-8 transition-all duration-500 hover:border-stone-500 hover:shadow-2xl hover:shadow-stone-900/40 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-3">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium uppercase tracking-wider">
                        Specialization
                      </span>
                    </div>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                <a
                  href={reactNativeCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 group-hover:opacity-100 transition-all duration-300 text-stone-300 hover:text-white transform hover:scale-110"
                  aria-label="View Certificate">
                  <ExternalLink className="h-7 w-7" />
                </a>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-stone-200 via-white to-stone-200 bg-clip-text mb-4 leading-tight">
                {reactNativeCert.title}
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <p className="text-stone-200 text-lg font-semibold">
                      {reactNativeCert.issuedBy}
                    </p>
                    <p className="text-stone-400 text-sm">
                      Professional Specialization Program
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-green-300 text-sm font-medium uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent flex-1"></div>
          <span className="px-4 text-stone-500 text-sm uppercase tracking-wider">
            Additional Certifications
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent flex-1"></div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {otherCertifications.map((cert, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-stone-800 bg-stone-900/50 p-6 transition-all duration-300 hover:border-stone-600 hover:bg-stone-800/50 hover:shadow-xl hover:shadow-stone-900/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-stone-300 to-stone-600 p-2">
                  <Award className="h-5 w-5 text-stone-900" />
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-stone-400 hover:text-stone-200"
                aria-label="View Certificate">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            <h3 className="text-xl font-semibold text-stone-200 mb-3 leading-tight">
              {cert.title}
            </h3>

            <div className="flex items-center justify-between">
              <p className="text-stone-400 text-sm font-medium">
                {cert.issuedBy}
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-700 to-transparent mx-4"></div>
              <span className="text-xs text-stone-500 uppercase tracking-wider">
                Verified
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-stone-300/5 to-stone-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/50 px-6 py-3 border border-stone-800">
          <Award className="h-5 w-5 text-stone-400" />
          <span className="text-stone-300 font-medium">
            {CERTIFICATIONS.length} Professional Certifications
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
