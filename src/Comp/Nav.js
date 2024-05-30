import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import PetrolPumpIcon from "./black-petrol.webp"; // Make sure to update the path

import USDImage from "./usd.png"; // Add the path to the currency images
import EURImage from "./eur.png";
import GBPImage from "./gbp.png";
import BTCImage from "./btc.png";
import ETHImage from "./eth.png";
import BITSImage from "./btc.png";
import SATSImage from "./sats.png";
import AUDImage from "./aud.png";
import BRLImage from "./brl.png";
import CADImage from "./cad.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [isCurrencyModalOpen, setCurrencyModalOpen] = useState(false);

  const openCurrencyModal = () => setCurrencyModalOpen(true);
  const closeCurrencyModal = () => setCurrencyModalOpen(false);

  return (
    <div className="App">
      <style>{`
        html, body {
          overflow: auto;
          height: 100%;
        }
      `}</style>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Top section with market stats */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-4">
            <span className="font-bold text-xs">
              Cryptos: <span className="text-blue-600 text-xs">2.4M+</span>
            </span>
            <span className="font-bold text-xs">
              Exchanges: <span className="text-blue-600 text-xs">770</span>
            </span>
            <span className="font-bold text-xs">
              Market Cap: <span className="text-blue-600 text-xs">$2.56T</span>
              <span className="text-red-600 text-xs">🔻1.47%</span>
            </span>
            <span className="font-bold text-xs">
              24h Vol: <span className="text-blue-600 text-xs">$91.03B</span>
              <span className="text-red-600 text-xs">🔻12.50%</span>
            </span>
            <span className="font-bold text-xs">
              Dominance:{" "}
              <span className="text-blue-600 text-xs">
                BTC: 52.4% ETH: 18.2%
              </span>
            </span>
            <span className="font-bold text-xs flex items-center">
              <img
                src={PetrolPumpIcon}
                alt="Petrol Pump"
                className="h-4 w-4 mr-1"
              />{" "}
              ETH Gas:{" "}
              <span className="text-blue-600 text-xs ml-1">18 Gwei</span>
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-bold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  English
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-black font-bold"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black font-bold"
                              : "text-black font-bold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          English
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black font-bold"
                              : "text-black font-bold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Spanish
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black font-bold"
                              : "text-black font-bold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          French
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              className="text-black font-bold hover:text-gray-900 text-sm"
              onClick={openCurrencyModal}
            >
              USD🔽
            </button>
            <div className="line bg-gray-400 w-1 h-6"></div>{" "}
            {/* Vertical line */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-bold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Get listed
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-black font-bold"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Cryptocurrency
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Exchange
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Page Update
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 text-sm">
              Log In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-none hover:bg-blue-700 text-sm">
              Sign Up
            </button>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200"></div>
        {/* Bottom section with navigation links */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <img
              src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg"
              alt="CoinMarketCap"
              className="h-8"
            />
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-900 font-bold hover:text-gray-900 text-sm"
              >
                Cryptocurrencies
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold hover:text-gray-900 text-sm"
              >
                Exchanges
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold hover:text-gray-900 text-sm"
              >
                Community
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold hover:text-gray-900 text-sm"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold hover:text-gray-900 text-sm"
              >
                Learn
              </a>
            </div>
          </div>
          {/* Search input on the right */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <div className="p-2">
                <span className="text-gray-600 font-bold text-xs">
                  Watchlist
                </span>
              </div>
              <div className="p-2">
                <span className="text-gray-600 font-bold text-xs">
                  Portfolio
                </span>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-700 pl-10"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-md">
                /
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Currency Modal */}
      {isCurrencyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeCurrencyModal}
          ></div>
          <div className="relative bg-white rounded-lg shadow-lg p-4 z-50 w-11/12 max-w-3xl mx-auto overflow-y-auto">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <ChevronDownIcon className="w-8 h-8 text-white bg-black p-1 rounded-full" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Select Currency</h2>
              <button
                onClick={closeCurrencyModal}
                className="text-gray-500 hover:text-gray-900"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search"
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mt-2">
  <h3 className="font-bold">Popular currencies</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-2">
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={USDImage} alt="USD" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">United States Dollar</span>
      <span className="text-xs">USD - $</span>
    </button>
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={EURImage} alt="EUR" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Euro</span>
      <span className="text-xs">EUR - €</span>
    </button>
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={GBPImage} alt="GBP" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Pound Sterling</span>
      <span className="text-xs">GBP - £</span>
    </button>
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={BTCImage} alt="BTC" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Bitcoin</span>
      <span className="text-xs">BTC</span>
    </button>
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={ETHImage} alt="ETH" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Ethereum</span>
      <span className="text-xs">ETH</span>
    </button>
  </div>
  <h3 className="font-bold mt-4">Fiat currencies</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-2">
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={AUDImage} alt="AUD" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Australian Dollar</span>
      <span className="text-xs">AUD - $</span>
    </button>
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={BRLImage} alt="BRL" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Brazilian Real</span>
      <span className="text-xs">BRL - R$</span>
    </button>
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={CADImage} alt="CAD" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Canadian Dollar</span>
      <span className="text-xs">CAD - $</span>
    </button>
  </div>
  <h3 className="font-bold mt-4">Bitcoin Units</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-2">
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={BITSImage} alt="BITS" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Bits</span>
      <span className="text-xs">BITS</span>
    </button>
    <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
      <img src={SATSImage} alt="SATS" className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium">Satoshi</span>
      <span className="text-xs">SATS</span>
    </button>
  </div>
</div>

          </div>
        </div>
      )}
    </div>
  );
}
