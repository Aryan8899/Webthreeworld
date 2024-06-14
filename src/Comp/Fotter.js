import React from "react";
import playstore from "./playstore.png";
import appstore from "./appstore.png";
import X from "./X.png";
import Discord from "./discord.png";
import Telegram from "./telegram.jpg";
import Instagram from "./instagram.png";
import LinkedIn from "./linkein.png";
import Web3world from "./CoinMarketCap-logo (1).png"

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-wrap justify-between">
        <div className="flex items-center space-x-2 -mx-4 font-medium size-5">
              {/* Group logo and title together */}
              
                <img
                  src={Web3world}
                  alt="Web3world"
                  className="h-16 w-18 cursor-pointer"
                />
              
              
                <h1 className="cursor-pointer -ml-2">Webthreeworld</h1>
              
            </div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">COMPANY</h3>
              <ul className="text-gray-500 space-y-1">
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">Terms of use</li>
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Cookie preferences</li>
                <li className="cursor-pointer">Cookie policy</li>
                <li className="cursor-pointer">Community Rules</li>
                <li className="cursor-pointer">Disclaimer</li>
                <li className="cursor-pointer">Methodology</li>
                <li className="flex items-center cursor-pointer">
                  Careers{" "}
                  <span className="ml-2 bg-blue-600 text-white px-2 py-1 rounded-full cursor-pointer">
                    We're hiring!
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">SUPPORT</h3>
              <ul className="text-gray-500 space-y-1">
                <li className="cursor-pointer">Request Form</li>
                <li className="cursor-pointer">Contact Support</li>
                <li className="cursor-pointer">FAQ</li>
                <li className="cursor-pointer">Glossary</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">Join Our Community</h3>
              <ul className="text-gray-500 space-y-1">
                <li className="flex items-center cursor-pointer">
                  <a href="https://x.com/web3world783761" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img className="w-6 h-6 mr-2" src={X} alt="X logo" />
                    X (Twitter)
                  </a>
                </li>
                <li className="flex items-center cursor-pointer">
                  <a href="https://discord.com/invite/tPmChwnYs9" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img className="w-7 h-6 mr-2" src={Discord} alt="Discord logo" />
                    Discord
                  </a>
                </li>
                <li className="flex items-center cursor-pointer">
                  <a href="https://t.me/web3worldmarketplace" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img className="w-6 h-6 mr-2" src={Telegram} alt="Telegram logo" />
                    Telegram
                  </a>
                </li>
                <li className="flex items-center cursor-pointer">
                  <a href="https://www.linkedin.com/company/web-3-world/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img className="w-6 h-6 mr-2" src={LinkedIn} alt="LinkedIn logo" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2024 webthreeworld. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
