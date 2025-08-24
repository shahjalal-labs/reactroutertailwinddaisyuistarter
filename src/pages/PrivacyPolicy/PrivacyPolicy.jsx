import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import useScrollToTop from "../../hooks/useScrollToTop";

const PrivacyPolicy = () => {
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1a103d] py-12 px-4 sm:px-6 lg:px-8 text-gray-200"
    >
      <Helmet>
        <title>Privacy Policy | DeshGuide</title>
        <meta
          name="description"
          content="Learn how DeshGuide collects, uses, and protects your personal data while exploring Bangladesh's tourism opportunities"
        />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Glowing header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -inset-4 bg-indigo-900/30 rounded-xl blur-xl opacity-75 -z-10"></div>
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-500 glow-text">
            Privacy Policy
          </h1>
          <p className="text-lg text-indigo-300/80 pulse-glow">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-10">
          {/* Section 1 - Enhanced with glow */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1e1b2d]/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 glow-border hover:glow-effect transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center">
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-3 jhilimili-glow"></span>
              1. Information We Collect
            </h2>
            <div className="space-y-4 pl-6">
              <div className="flex items-start">
                <span className="text-indigo-400 mr-3 mt-1">✦</span>
                <p>
                  <strong className="text-sky-300">
                    Personal Information:
                  </strong>{" "}
                  Name, email, profile picture when you register
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-400 mr-3 mt-1">✦</span>
                <p>
                  <strong className="text-purple-300">Booking Details:</strong>{" "}
                  Tour preferences, payment information, travel dates
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-400 mr-3 mt-1">✦</span>
                <p>
                  <strong className="text-amber-200">Content:</strong> Stories,
                  reviews, photos you upload
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2 - With animated border */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#1e1b2d]/70 p-8 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-transparent hover:border-indigo-500/50 rounded-2xl pointer-events-none transition-all duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-50 hover:"></div>
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 relative z-10">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-4 pl-6 relative z-10">
              {[
                "Provide and personalize our tourism services",
                "Process bookings and payments",
                "Improve platform functionality",
                "Communicate important updates",
                "Prevent fraud and ensure security",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Section 3 - With floating elements */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1e1b2d]/90 p-8 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(165,180,252,0.3)] transition-shadow"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-300">
              3. Data Sharing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Tour Guides",
                  desc: "Necessary booking details",
                  color: "bg-purple-500/20",
                },
                {
                  title: "Payment Processors",
                  desc: "Stripe for transactions",
                  color: "bg-emerald-500/20",
                },
                {
                  title: "Analytics",
                  desc: "Google Analytics",
                  color: "bg-blue-500/20",
                },
                {
                  title: "Legal Authorities",
                  desc: "When required by law",
                  color: "bg-rose-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`${item.color} p-4 rounded-xl border border-white/10 backdrop-blur-sm`}
                >
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Visual divider */}
          <div className="relative flex justify-center my-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent"></div>
            <div className="absolute -top-3 bg-indigo-500 rounded-full w-6 h-6 flex-center pulse-glow">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Section 4 - With tech-inspired design */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0f172a] p-8 rounded-2xl border border-indigo-500/30 code-block"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              4. Data Security
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-amber-400 mr-3 mt-1">🔒</div>
                  <div>
                    <h3 className="font-mono text-lg text-amber-300">
                      Encryption
                    </h3>
                    <p className="text-gray-400">
                      SSL/TLS for all data transfers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-400 mr-3 mt-1">🛡️</div>
                  <div>
                    <h3 className="font-mono text-lg text-amber-300">
                      Access Controls
                    </h3>
                    <p className="text-gray-400">Role-based permissions</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-amber-400 mr-3 mt-1">🔍</div>
                  <div>
                    <h3 className="font-mono text-lg text-amber-300">Audits</h3>
                    <p className="text-gray-400">Regular security reviews</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-400 mr-3 mt-1">👨‍💻</div>
                  <div>
                    <h3 className="font-mono text-lg text-amber-300">
                      Training
                    </h3>
                    <p className="text-gray-400">Staff security protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer with enhanced glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 relative"
          >
            <div className="absolute -inset-4 bg-indigo-900/20 rounded-xl blur-2xl -z-10"></div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">
              Need Help With Privacy?
            </h3>
            <p className="mb-6 text-gray-400 max-w-2xl mx-auto">
              Contact our Data Protection Officer for any questions about your
              personal data
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
              >
                Contact Us
              </Link>
              <a
                href="mailto:dpo@deshguide.com"
                className="px-6 py-3 border border-indigo-500 text-indigo-300 hover:text-white hover:border-indigo-300 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              >
                dpo@deshguide.com
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-indigo-500/20">
              <Link
                to="/terms-of-use"
                className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center justify-center"
              >
                <span className="mr-2">View our Terms of Use</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
