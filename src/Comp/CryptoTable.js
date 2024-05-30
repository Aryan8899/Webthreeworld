import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import icon1 from "./gr1.png";
import icon2 from "./gr2.png";
import icon3 from "./gr3.png";

const generateRandomHistoricalData = () => {
  const data = [];
  let baseValue = 100;
  for (let i = 1; i <= 7; i++) {
    const change = Math.floor(Math.random() * 40 - 20); // Random change between -20 and 20
    baseValue += change;
    data.push({ name: `Day ${i}`, value: baseValue });
  }
  return data;
};

const images = [icon1, icon2, icon3];

const CryptoTable = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [rowsToShow, setRowsToShow] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(100); // Initialize totalRows to 100
  const [activeButton, setActiveButton] = useState("Cryptocurrencies");
  const [showMore, setShowMore] = useState(false);

  const fetchData = async (page = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/cryptocurrencies?page=${page}&limit=${rowsToShow}`
      );
      setCryptocurrencies(
        response.data.data.map((crypto, index) => ({
          ...crypto,
          historicalData: generateRandomHistoricalData(),
          image: images[index % images.length],
        }))
      );
      if (response.data.total) {
        setTotalRows(response.data.total);
      } else {
        console.error("Total rows not found in response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, rowsToShow]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleRowClick = (index) => {
    console.log(`Row ${index} clicked`);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsToShowChange = (event) => {
    const newRowsToShow = Number(event.target.value);
    setRowsToShow(newRowsToShow);
    setCurrentPage(1); // Reset to first page whenever rowsToShow changes
  };

  const totalPages = Math.ceil(totalRows / rowsToShow);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-3 rounded-full text-sm font-bold ${
              activeButton === "Cryptocurrencies"
                ? "bg-gray-100 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleButtonClick("Cryptocurrencies")}
          >
            <span className="inline-block mr-2">⚙️</span>
            Cryptocurrencies
          </button>
          <button
            className={`px-4 py-3 rounded-full text-sm font-bold ${
              activeButton === "NFTs"
                ? "bg-gray-100 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleButtonClick("NFTs")}
          >
            <span className="inline-block mr-2">🌐</span>
            NFTs
          </button>
          <button
            className={`px-4 py-3 rounded-full text-sm font-bold ${
              activeButton === "Categories"
                ? "bg-gray-100 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleButtonClick("Categories")}
          >
            <span className="inline-block mr-2">☰</span>
            Categories
          </button>
        </div>
        <div className="flex items-center space-x-1 ml-2">
          <div className="border-l border-gray-300 h-6 mx-1"></div>
          <button className="text-gray-500 text-sm px-2 py-2 rounded-full font-bold">
            🔥 Memes
          </button>
          <button className="text-gray-500 text-sm px-2 py-2 rounded-full font-bold">
            🔥 Solana Ecosystem
          </button>
          <button className="text-gray-500 text-sm px-2 py-2 rounded-full font-bold">
            🔥 Gaming
          </button>
          <button className="text-gray-500 text-sm px-2 py-2 rounded-full font-bold">
            🔥 AI
          </button>
        </div>
        <div className="flex space-x-2 items-center">
          <span className="text-gray-500 text-sm">Show rows</span>
          <select
            value={rowsToShow}
            onChange={handleRowsToShowChange}
            className="text-gray-500 text-sm border rounded-full px-3 py-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <button className="text-gray-500 text-sm px-3 py-2 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100 focus:outline-none">
            Filters
          </button>
          <button className="text-gray-500 text-sm px-3 py-2 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100 focus:outline-none">
            Customize
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                1h %
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                24h %
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                7d %
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Volume(24h)
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Circulating Supply
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Last 7 Days
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cryptocurrencies
              .slice((currentPage - 1) * rowsToShow, currentPage * rowsToShow)
              .map((crypto, index) => (
                <tr
                  key={crypto.id}
                  className="cursor-pointer"
                  onClick={() => handleRowClick(index)}
                >
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {crypto.cmc_rank}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium flex items-center">
                    <img
                      src={crypto.logo}
                      alt={crypto.name}
                      className="w-6 h-6 mr-2"
                    />
                    {crypto.name} ({crypto.symbol})
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    ${crypto.quote.USD.price.toFixed(2)}
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${
                      crypto.quote.USD.percent_change_1h < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {crypto.quote.USD.percent_change_1h.toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${
                      crypto.quote.USD.percent_change_24h < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {crypto.quote.USD.percent_change_24h.toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${
                      crypto.quote.USD.percent_change_7d < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {crypto.quote.USD.percent_change_7d.toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    ${crypto.quote.USD.market_cap.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    ${crypto.quote.USD.volume_24h.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    {crypto.circulating_supply.toLocaleString()} {crypto.symbol}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    <img
                      src={crypto.image}
                      alt="Historical data"
                      className="h-16 w-auto"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center py-4">
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-500 text-sm font-bold">
            Showing {(currentPage - 1) * rowsToShow + 1} -{" "}
            {Math.min(currentPage * rowsToShow, totalRows)} out of {totalRows}
          </span>
          {rowsToShow < totalRows && (
            <div className="flex items-center">
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === index + 1
                      ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
          <div className="flex items-center">
            <span className="text-gray-500 text-sm">Show rows</span>
            <select
              value={rowsToShow}
              onChange={handleRowsToShowChange}
              className="text-gray-500 text-sm border rounded-full px-3 py-2 ml-2"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 mt-4"></div> {/* This is the gray line */}
      </div>
      <div className="py-4">
        <div>
          Find out how we work by clicking here.{" "}
          <button
            className="text-gray-500 underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
        {showMore && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">
              Today’s Cryptocurrency Prices, Charts and Data
            </h2>
            <br />
            <p className="text-gray-500">
              Welcome to CoinMarketCap.com! This site was founded in May 2013 by
              Brandon Chez to provide up-to-date cryptocurrency prices, charts
              and data about the emerging cryptocurrency markets. Since then,
              the world of blockchain and cryptocurrency has grown exponentially
              and we are very proud to have grown with it. We take our data very
              seriously and we do not change our data to fit any narrative: we
              stand for accurately, timely and unbiased information.
            </p>

            <h2 className="text-xl font-bold mt-4">
              All Your Crypto Market Data Needs in One Place
            </h2>
            <br />
            <p className="text-gray-500">
              Here at CoinMarketCap, we work very hard to ensure that all the
              relevant and up-to-date information about cryptocurrencies, coins
              and tokens can be located in one easily discoverable place. From
              the very first day, the goal was for the site to be the number one
              location online for crypto market data, and we work hard to
              empower our users with our unbiased and accurate information.
            </p>
            <h2 className="text-xl font-bold mt-4">
              We Provide Live and Historic Crypto Charts for Free
            </h2>
            <br />
            <p className="text-gray-500">
              Each of our coin data pages has a graph that shows both the
              current and historic price information for the coin or token.
              Normally, the graph starts at the launch of the asset, but it is
              possible to select specific to and from dates to customize the
              chart to your own needs. These charts and their information are
              free to visitors of our website.
            </p>
            <p className="text-gray-500">
              The most experienced and professional traders often choose to use
              the best crypto API on the market. Our API enables millions of
              calls to track current prices and to also investigate historic
              prices and is used by some of the largest crypto exchanges and
              financial institutions in the world.
            </p>
            <h2 className="text-xl font-bold mt-4">
              How Do We Calculate Our Cryptocurrency Prices?
            </h2>
            <br />
            <p className="text-gray-500">
              We receive updated cryptocurrency prices directly from many
              exchanges based on their pairs. We then convert the number to USD.
              A full explanation can be found here.
            </p>
            <h2 className="text-xl font-bold mt-4">Related Links</h2>
            <ul className="list-disc list-inside text-gray-500">
              <li>Are you ready to learn more? Visit our glossary and crypto learning center.</li>
              <li>Are you interested in the scope of crypto assets? Investigate our list of cryptocurrency categories.</li>
              <li>Are you interested in knowing which the hottest dex pairs are currently?</li>
            </ul>
            <h2 className="text-xl font-bold mt-4">
              How Do We Calculate Our Crypto Valuations?
            </h2>
            <br />
            <p className="text-gray-500">
              We calculate our valuations based on the total circulating supply
              of an asset multiplied by the currency reference price. The topic
              is explained in more detail here.
            </p>
            <h2 className="text-xl font-bold mt-4">
              How Do We Calculate the Cryptocurrency Market Cap?
            </h2>
            <br />
            <p className="text-gray-500">
              We calculate the total cryptocurrency market capitalization as the
              sum of all cryptocurrencies listed on the site.
            </p>
            <h2 className="text-xl font-bold mt-4">
              Does CoinMarketCap.com List All Cryptocurrencies?
            </h2>
            <br />
            <p className="text-gray-500">
              Almost. We have a process that we use to verify assets. Once
              verified, we create a coin description page like this. The world
              of crypto now contains many coins and tokens that we feel unable
              to verify. In those situations, our Dexscan product lists them
              automatically by taking on-chain data for newly created smart
              contracts. We do not cover every chain, but at the time of writing
              we track the top 70 crypto chains, which means that we list more
              than 97% of all tokens.
            </p>
            <h2 className="text-xl font-bold mt-4">
              How Big Is the Global Coin Market?
            </h2>
            <br />
            <p className="text-gray-500">
              At the time of writing, we estimate that there are more than 2
              million pairs being traded, made up of coins, tokens and projects
              in the global coin market. As mentioned above, we have a due
              diligence process that we apply to new coins before they are
              listed. This process controls how many of the cryptocurrencies
              from the global market are represented on our site.
            </p>
            <h2 className="text-xl font-bold mt-4">What Is an Altcoin?</h2>
            <br />
            <p className="text-gray-500">
              The very first cryptocurrency was Bitcoin. Since it is open
              source, it is possible for other people to use the majority of the
              code, make a few changes and then launch their own separate
              currency. Many people have done exactly this. Some of these coins
              are very similar to Bitcoin, with just one or two amended features
              (such as Litecoin), while others are very different, with varying
              models of security, issuance and governance. However, they all
              share the same moniker — every coin issued after Bitcoin is
              considered to be an altcoin.
            </p>
            <h2 className="text-xl font-bold mt-4">What Is a Smart Contract?</h2>
            <br />
            <p className="text-gray-500">
              The first chain to launch smart contracts was Ethereum. A smart
              contract enables multiple scripts to engage with each other using
              clearly defined rules, to execute on tasks which can become a
              coded form of a contract. They have revolutionized the digital
              asset space because they have enabled decentralized exchanges,
              decentralized finance, ICOs, IDOs and much more. A huge proportion
              of the value created and stored in cryptocurrency is enabled by
              smart contracts.
            </p>
            <h2 className="text-xl font-bold mt-4">What Is a Stablecoin?</h2>
            <br />
            <p className="text-gray-500">
              Price volatility has long been one of the features of the
              cryptocurrency market. When asset prices move quickly in either
              direction and the market itself is relatively thin, it can
              sometimes be difficult to conduct transactions as might be needed.
              To overcome this problem, a new type of cryptocurrency tied in
              value to existing currencies — ranging from the U.S. dollar, other
              fiats or even other cryptocurrencies — arose. These new
              cryptocurrency are known as stablecoins, and they can be used for
              a multitude of purposes due to their stability.
            </p>
            <h2 className="text-xl font-bold mt-4">What Is an NFT?</h2>
            <br />
            <p className="text-gray-500">
              NFTs are multi-use images that are stored on a blockchain. They
              can be used as art, a way to share QR codes, ticketing and many
              more things. The first breakout use was for art, with projects
              like CryptoPunks and Bored Ape Yacht Club gaining large
              followings. We also list all of the top NFT collections available,
              including the related NFT coins and tokens.. We collect latest
              sale and transaction data, plus upcoming NFT collection launches
              onchain. NFTs are a new and innovative part of the crypto
              ecosystem that have the potential to change and update many
              business models for the Web 3 world.
            </p>
            <h2 className="text-xl font-bold mt-4">What Are In-game Tokens?</h2>
            <br />
            <p className="text-gray-500">
              Play-to-earn (P2E) games, also known as GameFi, has emerged as an
              extremely popular category in the crypto space. It combines
              non-fungible tokens (NFT), in-game crypto tokens, decentralized
              finance (DeFi) elements and sometimes even metaverse
              applications. Players have an opportunity to generate revenue by
              giving their time (and sometimes capital) and playing these games.
            </p>
            <p className="text-gray-500">
              One of the biggest winners is Axie Infinity — a Pokémon-inspired
              game where players collect Axies (NFTs of digital pets), breed and
              battle them against other players to earn Smooth Love Potion (SLP)
              — the in-game reward token. This game was extremely popular in
              developing countries like The Philippines, due to the level of
              income they could earn. Players in the Philippines can check the
              price of SLP to PHP today directly on CoinMarketCap.
            </p>
            <h2 className="text-xl font-bold mt-4">What Are ETFs?</h2>
            <br />
            <p className="text-gray-500">
              In January 2024 the SEC approved 11 exchange traded funds to
              invest in Bitcoin. There were already a number of Bitcoin ETFs
              available in other countries, but this change allowed them to be
              available to retail investors in the United States. This opens the
              way for a much wider range of investors to be able to add some
              exposure to cryptocurrency in their portfolios.
            </p>
            <h2 className="text-xl font-bold mt-4">
              Which Is the Best Cryptocurrency to Invest in?
            </h2>
            <br />
            <p className="text-gray-500">
              CoinMarketCap does not offer financial or investment advice about
              which cryptocurrency, token or asset does or does not make a good
              investment, nor do we offer advice about the timing of purchases
              or sales. We are strictly a data company. Please remember that the
              prices, yields and values of financial assets change. This means
              that any capital you may invest is at risk. We recommend seeking
              the advice of a professional investment advisor for guidance
              related to your personal circumstances.
            </p>
            <h2 className="text-xl font-bold mt-2">
              If You Are Investing in Cryptocurrency — CoinMarketCap.com Is for
              You
            </h2>
            <br />
            <p className="text-gray-500">
              The data at CoinMarketCap updates every few seconds, which means
              that it is possible to check in on the value of your investments
              and assets at any time and from anywhere in the world. We look
              forward to seeing you regularly!
            </p>
            <button
              className="text-blue-500 underline mt-4"
              onClick={() => setShowMore(false)}
            >
              Read Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoTable;
