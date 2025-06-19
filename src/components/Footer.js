import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "API", "Documentation"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Contact"]
    },
    {
      title: "Support",
      links: ["Help Center", "Community", "Status", "Security"]
    }
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              NexusLab
            </div>
            <p className="text-gray-400">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <div className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-purple-500/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NexusLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;