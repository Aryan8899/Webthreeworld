import React from "react";
import playstore from "./playstore.png";
import appstore from "./appstore.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 md:mb-0">
            <img
              src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg"
              alt="CoinMarketCap"
              className="h-8"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">PRODUCTS</h3>
              <ul className="text-gray-500 space-y-1">
                <li>Product Updates</li>
                <li>CMC Labs</li>
                <li>Crypto API</li>
                <li>Crypto Indices</li>
                <li>Doodles</li>
                <li>Sitemap</li>
                <li>Advertise</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">COMPANY</h3>
              <ul className="text-gray-500 space-y-1">
                <li>About us</li>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>Cookie preferences</li>
                <li>Cookie policy</li>
                <li>Community Rules</li>
                <li>Disclaimer</li>
                <li>Methodology</li>
                <li className="flex items-center">
                  Careers{" "}
                  <span className="ml-2 bg-blue-600 text-white px-2 py-1 rounded-full">
                    We're hiring!
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">SUPPORT</h3>
              <ul className="text-gray-500 space-y-1">
                <li>Request Form</li>
                <li>Contact Support</li>
                <li>FAQ</li>
                <li>Glossary</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">SOCIALS</h3>
              <ul className="text-gray-500 space-y-1">
                <li>X (Twitter)</li>
                <li>Community</li>
                <li>Telegram</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Reddit</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2024 CoinMarketCap. All rights reserved
          </p>
          <div className="ml-auto flex space-x-4">
            <a
              href="https://apps.apple.com/us/app/coinmarketcap-crypto-tracker/id1282107098?ls=1"
              target="_blank" rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={appstore}
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details/?id=com.coinmarketcap.android&hl=en_US"
              target="_blank" rel="noopener noreferrer" 
              className="inline-block"
            >
              <img
                src={playstore}
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
