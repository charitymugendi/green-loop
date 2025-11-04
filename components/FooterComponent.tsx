import React from 'react';

const FooterIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">
    {children}
  </div>
);

const ContactIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-900/10 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-blue-900">
    {children}
  </div>
);

const FooterComponent = () => {
  return (
    <footer className="bg-white pt-4">
      
      {/* 1. Top Quick Links Bar (Yellow/Blue Section) */}
      <div className="bg-yellow-500 text-blue-900 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
          
          {/* Quick Links Title */}
          <h3 className="text-2xl font-extrabold flex items-center mb-4 md:mb-0">
            Quick Links
          </h3>

          {/* Top Icons */}
          <div className="flex flex-wrap items-center space-x-4">
            {[
              { label: 'Customer Support', icon: '📞' },
              { label: 'Newsroom', icon: '📰' },
              { label: 'Sustainability', icon: '♻️' },
              { label: 'Contact Us', icon: '📧' },
            ].map((link, index) => (
              <a
                key={index}
                href={`#${link.label.toLowerCase().replace(/ /g, '-')}`}
                className="flex items-center font-semibold hover:text-blue-700 transition-colors"
              >
                <FooterIcon>
                  <span className="text-sm">{link.icon}</span>
                </FooterIcon>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* 2. Social Media Links Bar */}
      <div className="bg-blue-900/90 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center md:justify-start items-center space-x-4 text-white">
          {[
            { name: 'Facebook', icon: 'fb', url: '#facebook' },
            { name: 'Instagram', icon: 'ig', url: '#instagram' },
            { name: 'X', icon: 'x', url: '#x' },
            { name: 'LinkedIn', icon: 'li', url: '#linkedin' },
            { name: 'YouTube', icon: 'yt', url: '#youtube' },
            { name: 'TikTok', icon: 'tt', url: '#tiktok' },
            { name: 'WhatsApp', icon: 'wa', url: '#whatsapp' },
          ].map((media) => (
            <a
              key={media.name}
              href={media.url}
              className="flex items-center text-sm font-medium hover:text-yellow-500 transition-colors"
            >
              <span className="w-5 h-5 border rounded-full flex items-center justify-center mr-1 text-xs uppercase">
                {media.icon}
              </span>
              {media.name}
            </a>
          ))}
        </div>
      </div>

      {/* 3. Main Footer Links (Multi-Column) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-600">About [Your Company Name]</a></li>
              <li><a href="#board" className="hover:text-blue-600">Board of Directors</a></li>
              <li><a href="#management" className="hover:text-blue-600">Senior Management</a></li>
              <li><a href="#regional" className="hover:text-blue-600">Regional Managers</a></li>
              <li><a href="#privacy" className="hover:text-blue-600">Data Privacy & Security</a></li>
              <li><a href="#policy" className="hover:text-blue-600">Company Policy</a></li>
            </ul>
          </div>

          {/* Column 2: eProcurement / eSourcing */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4">eSourcing</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#tender-app" className="hover:text-blue-600">Supplier Registration</a></li>
              <li><a href="#latest-tenders" className="hover:text-blue-600">Active RFPs/RFQs</a></li>
              <li><a href="#limited-tenders" className="hover:text-blue-600">Limited Bids</a></li>
              <li><a href="#user-manuals" className="hover:text-blue-600">Vendor Manuals</a></li>
            </ul>
          </div>

          {/* Column 3: Downloads */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Downloads</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#service-guides" className="hover:text-blue-600">Service Guides</a></li>
              <li><a href="#audit-reports" className="hover:text-blue-600">Sustainability Reports</a></li>
              <li><a href="#pricing" className="hover:text-blue-600">Pricing Schedules</a></li>
              <li><a href="#forms" className="hover:text-blue-600">Application Forms</a></li>
            </ul>
          </div>

          {/* Column 4: Popular Links */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Popular Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#careers" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#partners" className="hover:text-blue-600">Recycling Partners</a></li>
              <li><a href="#regulators" className="hover:text-blue-600">Industry Regulators</a></li>
              <li><a href="#waste-tech" className="hover:text-blue-600">Waste Technology</a></li>
            </ul>
          </div>
          
          {/* Column 5: Support */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#new-cust" className="hover:text-blue-600">New Customers</a></li>
              <li><a href="#acc-types" className="hover:text-blue-600">Service Plans & Types</a></li>
              <li><a href="#faq" className="hover:text-blue-600">Articles & FAQs</a></li>
              <li><a href="#scheduled" className="hover:text-blue-600">Scheduled Pickups</a></li>
              <li><a href="#disruption" className="hover:text-blue-600">Service Disruptions</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 4. Bottom Contact Info Bar */}
      <div className="border-t border-gray-200 pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center lg:justify-between items-start space-y-4 lg:space-y-0 text-center lg:text-left">
          
          <div className="flex flex-col items-center lg:flex-row lg:w-auto w-full">
            <ContactIcon><span className="text-xl">#</span></ContactIcon>
            <div>
              <p className="font-semibold text-sm text-blue-900">USSD / Mobile App</p>
              <p className="text-xl font-bold text-gray-800">*777#</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:flex-row lg:w-auto w-full">
            <ContactIcon><span className="text-xl">📞</span></ContactIcon>
            <div>
              <p className="font-semibold text-sm text-blue-900">National Contact Center</p>
              <p className="text-xl font-bold text-gray-800">77777</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:w-auto w-full">
            <ContactIcon><span className="text-xl">📧</span></ContactIcon>
            <div>
              <p className="font-semibold text-sm text-blue-900">Support Email</p>
              <p className="text-xl font-bold text-gray-800">customercare@wastemanagement.co.ke</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:w-auto w-full">
            <ContactIcon><span className="text-xl">📍</span></ContactIcon>
            <div>
              <p className="font-semibold text-sm text-blue-900">Head Office</p>
              <p className="text-xl font-bold text-gray-800">Kolobot Rd, Eco Plaza</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:w-auto w-full">
            <ContactIcon><span className="text-xl">✉️</span></ContactIcon>
            <div>
              <p className="font-semibold text-sm text-blue-900">P.O. BOX</p>
              <p className="text-xl font-bold text-gray-800">30099-00100</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* 5. Copyright */}
      <div className="bg-gray-100 py-3 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} [Your Company Name]. All Rights Reserved.
      </div>
      
    </footer>
  );
};

// ✅ FIXED EXPORT
export default FooterComponent;
