import React from "react";

const EcommerceDashboard = () => {
  return (
    <div className="min-h-screen p-6 font-sans bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 rounded-2xl">
      {/* Welcome Banner */}
      <div className="rounded-lg p-6 mb-6 flex items-center justify-between shadow-md bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-purple-900 transition-colors duration-300">
        <div className="flex items-center">
          <div>
            <h1 className="text-lg font-semibold text-purple-800 dark:text-purple-300">
              Welcome back Matthew!
            </h1>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              You have 5.4% more than last month. Is it great!
            </p>
            <button className="px-4 py-1 rounded mt-2 text-white bg-blue-500 dark:bg-blue-700 transition-colors duration-300">
              Check
            </button>
          </div>
          <div className="mx-6">
            <div className="w-32 h-32 rounded-full flex items-center justify-center text-sm bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
              Illustration: Person at Computer
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
            <p className="text-sm text-gray-500">Projects</p>
            <p className="text-lg font-bold">78,298</p>
          </div>
          <div className="p-3 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
            <p className="text-sm text-gray-500">Agents</p>
            <p className="text-lg font-bold">78,298</p>
          </div>
          <div className="p-3 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
            <p className="text-sm text-gray-500">Avg. Price</p>
            <p className="text-lg font-bold">$476</p>
          </div>
          <div className="p-3 rounded-lg shadow flex items-center bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="w-24 h-12 flex items-center justify-center text-green-500 bg-gray-200 dark:bg-gray-700">
              +8% Trend Graph
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Revenue Updates */}
        <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-md font-semibold mb-4">Revenue Updates</h3>
          <div className="h-40 flex items-end justify-around rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
            <div className="w-6 bg-blue-400 h-16"></div>
            <div className="w-6 bg-purple-400 h-28"></div>
            <div className="w-6 bg-blue-400 h-20"></div>
            <div className="w-6 bg-purple-400 h-24"></div>
            <div className="w-6 bg-blue-400 h-12"></div>
            <div className="w-6 bg-purple-400 h-32"></div>
          </div>
          <div className="flex justify-start mt-4 text-sm space-x-4">
            <span>
              <span className="text-blue-500">●</span> Footwear
            </span>
            <span>
              <span className="text-purple-500">●</span> Fashionware
            </span>
          </div>
          <div className="flex justify-around mt-2 text-xs text-gray-500">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
          </div>
        </div>

        {/* Sales Overview */}
        <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-md font-semibold mb-4">Sales Overview</h3>
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB dark:stroke-gray-600"
                  strokeWidth="4"
                  strokeDasharray="100, 100"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="4"
                  strokeDasharray="60, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                $500.458
              </div>
            </div>
            <div className="flex justify-around w-full mt-6">
              <div className="p-2 rounded text-center bg-blue-100 dark:bg-gray-700 transition-colors duration-300">
                <p className="text-sm text-gray-500">Profit</p>
                <p className="font-bold">$323.450</p>
              </div>
              <div className="p-2 rounded text-center bg-blue-100 dark:bg-gray-700 transition-colors duration-300">
                <p className="text-sm text-gray-500">Expense</p>
                <p className="font-bold">$323.450</p>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Column */}
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
            <h3 className="text-md font-semibold mb-2">Total Earning</h3>
            <p className="text-xl font-bold">$78,298</p>
            <div className="h-16 mt-2 rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
              {/* Placeholder for line graph */}
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <path
                  d="M0 15 L20 10 L40 18 L60 12 L80 16 L100 8"
                  fill="none"
                  stroke="green"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
            <h3 className="text-md font-semibold mb-2">Sales Profit</h3>
            <p className="text-xl font-bold">
              $456,120 <span className="text-pink-500 text-sm">+4.9%</span>
            </p>
            <div className="h-16 mt-2 flex items-end justify-start space-x-1 rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
              <div className="w-3 bg-pink-400 h-8"></div>
              <div className="w-3 bg-pink-400 h-12"></div>
              <div className="w-3 bg-pink-400 h-10"></div>
              <div className="w-3 bg-pink-400 h-14"></div>
              <div className="w-3 bg-pink-400 h-16"></div>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
            <h3 className="text-md font-semibold mb-2">Monthly Earnings</h3>
            <p className="text-xl font-bold">
              $6,820 <span className="text-green-500 text-sm">+4%</span>
            </p>
            <div className="h-16 mt-2 rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
              {/* Placeholder for wave graph */}
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <path
                  d="M0 10 Q25 0 50 10 T100 10"
                  fill="none"
                  stroke="blue"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Weekly Stats */}
        <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-md font-semibold mb-4">Weekly Stats</h3>
          <div className="h-32 mb-4 rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
            {/* Placeholder for wave graph */}
            <svg className="w-full h-full" viewBox="0 0 100 32">
              <path
                d="M0 20 Q25 10 50 20 T100 20"
                fill="none"
                stroke="purple"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2 rounded bg-green-100 dark:bg-gray-700 transition-colors duration-300">
              <p>Top Sales</p>
              <p>Jonathan Doc</p>
              <p>+46</p>
            </div>
            <div className="flex justify-between p-2 rounded bg-green-100 dark:bg-gray-700 transition-colors duration-300">
              <p>Best Seller</p>
              <p>Footwear</p>
              <p>+4.6</p>
            </div>
            <div className="flex justify-between p-2 rounded bg-green-100 dark:bg-gray-700 transition-colors duration-300">
              <p>Most Commented</p>
              <p>Fashionware</p>
              <p>+1.4</p>
            </div>
          </div>
        </div>

        {/* Yearly Sales */}
        <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-md font-semibold mb-4">Yearly Sales</h3>
          <div className="h-40 flex items-end justify-around rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
            <div className="w-6 bg-blue-300 h-24"></div>
            <div className="w-6 bg-blue-300 h-32"></div>
            <div className="w-6 bg-blue-300 h-28"></div>
            <div className="w-6 bg-blue-300 h-36"></div>
            <div className="w-6 bg-blue-300 h-20"></div>
            <div className="w-6 bg-blue-300 h-16"></div>
            <div className="w-6 bg-blue-300 h-24"></div>
          </div>
          <div className="flex justify-around mt-4 text-sm">
            <div className="p-2 rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
              Salary $36,358
            </div>
            <div className="p-2 rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
              Expense $5,296
            </div>
          </div>
          <div className="flex justify-around mt-2 text-xs text-gray-500">
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
          </div>
        </div>

        {/* Payment Gateways */}
        <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-md font-semibold mb-4">Payment Gateways</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <p>Paypal</p>
              </div>
              <p className="text-green-500">+$623</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <p>Big Brands</p>
              </div>
              <p className="text-green-500">+$434</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <p>Wallet</p>
              </div>
              <p className="text-green-500">+$349</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <p>BillPayment</p>
              </div>
              <p className="text-green-500">+$434</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                <p>Credit Card</p>
              </div>
              <p className="text-green-500">+$323</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                <p>Money Reversed</p>
              </div>
              <p className="text-green-500">+$323</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
                <p>Refund</p>
              </div>
              <p className="text-green-500">+$82</p>
            </div>
          </div>
          <button className="text-white px-4 py-2 rounded w-full mt-6 bg-blue-500 dark:bg-blue-700 transition-colors duration-300">
            View all Transactions
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-md font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start">
              <p className="mr-3 text-gray-500">09:30 am</p>
              <div>
                <p>Payment received from</p>
                <p>John Doe of $45.90</p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-3 text-gray-500">10:30 am</p>
              <div>
                <p>New sale recorded</p>
                <p>#ML-3467</p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-3 text-gray-500">12:30 pm</p>
              <div>
                <p>Payment was made of</p>
                <p>$64.95 to Michael</p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-3 text-gray-500">12:30 pm</p>
              <div>
                <p>New sale recorded</p>
                <p>#ML-3467</p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-3 text-gray-500">12:30 pm</p>
              <div>
                <p>New arrival recorded</p>
                <p>#ML-3467</p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-3 text-gray-500">12:30 pm</p>
              <div>
                <p>Payment Done</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="flex justify-between mb-4">
            <h3 className="text-md font-semibold">Top Products</h3>
            <p className="text-sm text-gray-500">March 2025 ▼</p>
          </div>
          <table className="w-full text-sm table-auto">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Product</th>
                <th className="pb-2">Progress</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 flex items-center">
                  <div className="w-8 h-8 bg-yellow-300 rounded mr-3 flex items-center justify-center text-xs">
                    🎮
                  </div>
                  <div>
                    <p>Gaming Console</p>
                    <p className="text-xs text-gray-500">Electronics</p>
                  </div>
                </td>
                <td>78.5%</td>
                <td>
                  <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-300">
                    Low
                  </span>
                </td>
                <td>$3.9k</td>
              </tr>
              <tr>
                <td className="py-2 flex items-center">
                  <div className="w-8 h-8 bg-pink-300 rounded mr-3 flex items-center justify-center text-xs">
                    👜
                  </div>
                  <div>
                    <p>Leather Purse</p>
                    <p className="text-xs text-gray-500">Fashion</p>
                  </div>
                </td>
                <td>55.6%</td>
                <td>
                  <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-300">
                    Medium
                  </span>
                </td>
                <td>$3.5k</td>
              </tr>
              <tr>
                <td className="py-2 flex items-center">
                  <div className="w-8 h-8 bg-red-300 rounded mr-3 flex items-center justify-center text-xs">
                    👗
                  </div>
                  <div>
                    <p>Red Velvet Dress</p>
                    <p className="text-xs text-gray-500">Fashion</p>
                  </div>
                </td>
                <td>23%</td>
                <td>
                  <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-300">
                    High
                  </span>
                </td>
                <td>$3.8k</td>
              </tr>
              <tr>
                <td className="py-2 flex items-center">
                  <div className="w-8 h-8 bg-blue-300 rounded mr-3 flex items-center justify-center text-xs">
                    🎧
                  </div>
                  <div>
                    <p>Headphone Boat</p>
                    <p className="text-xs text-gray-500">Electronics</p>
                  </div>
                </td>
                <td>94.3%</td>
                <td>
                  <span className="px-2 py-1 rounded text-xs bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-orange-300">
                    Critical
                  </span>
                </td>
                <td>$3.14k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDashboard;
