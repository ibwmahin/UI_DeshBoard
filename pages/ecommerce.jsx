import ProjectsChart from "../components/ui/Charts/ecommerce/ProjectsChart";
import RevenueUpdatesChart from "../components/ui/Charts/ecommerce/RevenueUpdatesChart";
import SalesOverviewChart from "../components/ui/Charts/ecommerce/SalesOverviewChart";
import TotalEarningChart from "../components/ui/Charts/ecommerce/TotalEarningChart";
import MonthlyEarningsChart from "../components/ui/Charts/ecommerce/MonthlyEarningsChart";
import WeeklyStats from "../components/ui/Charts/ecommerce/WeeklyStats";
import {
  ArrowUpCircleIcon,
  BanknotesIcon,
  QueueListIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const ecommerce = () => {
  // Define the paymentGateways array here
  const paymentGateways = [
    { name: "Paypal", desc: "Big Brands", amount: "+$6235", color: "#615dff" },
    {
      name: "Stripe",
      desc: "Online Payments",
      amount: "+$4580",
      color: "#6772e5",
    },
    {
      name: "Square",
      desc: "Retail Transactions",
      amount: "+$3200",
      color: "#00c4b4",
    },
  ];
  return (
    <section>
      {/* First Grid Section */}
      <div className="grid grid-cols-[50%_15%_15%] gap-5 justify-center mx-20 ">
        <div className="bg-[#e7edff] dark:bg-gray-700 rounded-xl flex items-center">
          <div className="ml-6">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Welcome back Mathew!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              You have earned 54% more than last month which is a great thing.
            </p>
            <button className="bg-[#5d87ff] dark:bg-gray-600 text-white dark:text-gray-200 px-4 py-2 rounded-lg mt-4">
              Check
            </button>
          </div>
          <div>
            <img
              src="https://modernize-angular-main.netlify.app/assets/images/backgrounds/welcome-bg2.png"
              alt="Welcome Image"
              className="max-w-[300px] h-auto translate-y-14 mr-2"
            />
          </div>
        </div>

        {/* Second Box */}
        <div className="shadow-black/10 dark:bg-gray-700  dark:text-white shadow-2xl rounded-xl p-5 text-sm flex flex-col justify-center gap-2">
          <BanknotesIcon className="h-8 w-8 " />
          <p className="mt-2 text-md">Payments</p>
          <h1 className="mt-2 text-xl font-semibold capitalize">$678,298</h1>
          <h1 className="mt-2 text-md flex items-center gap-4">
            <ArrowUpCircleIcon className="h-8 w-8 rotate-[45deg] bg-green-400 hover:bg-green-500 hover:rotate-0 hover:scale-110 transition-all duration-300 rounded-full text-white" />
            +9%
          </h1>
        </div>

        {/* Third Box */}
        <div className="shadow-black/10 dark:bg-gray-700 dark:text-white shadow-2xl rounded-xl p-3 text-sm flex justify-center items-start gap-3 flex-col">
          <div className="w-[100%] max-w-4xl">
            <h1 className="text-xl">Projects</h1>
            <p className="font-semibold">78,298</p>
            <div className="mt-10 w-auto ">
              <ProjectsChart />
            </div>
          </div>
        </div>
      </div>
      {/*! Second row ----------------------------*/}
      <div className="grid grid-cols-[32%_25%_25%] justify-center mx-20 gap-6 p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow dark:shadow-none">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Revenue Updates
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Overview of Profit
          </p>
          <RevenueUpdatesChart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow dark:shadow-none flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Sales Overview
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Every month
          </p>
          <SalesOverviewChart />
          <div className="flex justify-around mt-4 w-full">
            <div className="text-center flex justify-center items-center gap-2">
              <div className="h-10 w-10 text-white p-2 bg-[#4A90E2] dark:bg-[#3B82F6]  rounded-full ">
                <QueueListIcon />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                $23,450
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Profit
                </p>
              </span>
            </div>
            <div className="text-center flex justify-center items-center gap-2">
              <div className="h-10 w-10 text-white p-2 bg-[#4A90E2] dark:bg-[#3B82F6]  rounded-full ">
                <QueueListIcon />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                $23,450
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Profit
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow dark:shadow-none">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Total Earning
          </h2>
          <div className="flex items-center mt-2">
            <img
              src="https://img.icons8.com/ios-filled/50/FF6F61/shopping-bag.png"
              alt="Earning Icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              $78,298
            </span>
          </div>
          <TotalEarningChart />
          <p className="text-sm text-green-600 dark:text-green-500 mt-2">+9%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow dark:shadow-none col-span-3">
          <MonthlyEarningsChart />
        </div>
      </div>
      {/* Third Row ---------------------------------- */}

      <div className="grid grid-cols-[32%_25%_25%] justify-center mx-20 gap-6 p-6">
        <div
          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow dark:shadow-none flex flex-col gap-25
        "
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Weekly Stats
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Average sales
            </p>
          </div>
          <WeeklyStats />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow dark:shadow-none flex flex-col items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Payment Gateways
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Platform For Income
            </p>
          </div>
          {/* boxes */}
          <div className="flex w-full flex-col ">
            {/* first box */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full h-20 p-5 shadow-lg shadow-black/10 mt-5 flex flex-row justify-center gap-13 items-center">
              <div className="h-8 w-8 bg-[#615dff] text-white p-1 rounded-sm dark:bg-gray-700">
                <CreditCardIcon />
              </div>

              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Paypal
                </p>
                <p className="text-gray-600 dark:text-gray-400">Big Brands</p>
              </div>
              <div className="text-gray-800 dark:text-white">+$6235</div>
            </div>

            {/* second box */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full h-20 p-5 shadow-lg shadow-black/10 mt-5 flex flex-row justify-center gap-12 items-center">
              <div className="h-8 w-8 bg-[#615dff] text-white p-1 rounded-sm dark:bg-gray-700">
                <CreditCardIcon />
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Wallet
                </p>
                <p className="text-gray-600 dark:text-gray-400">Bill payment</p>
              </div>
              <div className="text-gray-800 dark:text-white">+$345</div>
            </div>

            {/* Third box */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full h-20 p-5 shadow-lg shadow-black/10 mt-5 flex flex-row justify-center gap-8 items-center">
              <div className="h-8 w-8 bg-[#615dff] text-white p-1 rounded-sm dark:bg-gray-700">
                <CreditCardIcon />
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Credit Card
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Money reversed
                </p>
              </div>
              <div className="text-gray-800 dark:text-white">+$6235</div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow dark:shadow-none">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Total Earning
          </h2>
          <div className="flex items-center mt-2">
            <img
              src="https://img.icons8.com/ios-filled/50/FF6F61/shopping-bag.png"
              alt="Earning Icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              $78,298
            </span>
          </div>
          <TotalEarningChart />
          <p className="text-sm text-green-600 dark:text-green-500 mt-2">+9%</p>
        </div>
      </div>

      {/* ============================================= */}
      <section className="p-6">
        {/* Grid Layout for Two Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recent Transactions Section */}
          <div className="col-span-1 md:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Recent Transactions
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-400"></span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    09:00 am
                  </p>
                  <p className="text-sm text-gray-800 dark:text-white">
                    Payment received from John Doe of $385.90
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-green-400"></span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    10:00 am
                  </p>
                  <p className="text-sm text-gray-800 dark:text-white">
                    New sale recorded #ML-3467
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-400"></span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    12:00 pm
                  </p>
                  <p className="text-sm text-gray-800 dark:text-white">
                    Payment made of $4.95 to Michael
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-orange-400"></span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    12:30 pm
                  </p>
                  <p className="text-sm text-gray-800 dark:text-white">
                    New sale recorded #ML-3467
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-red-400"></span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    12:30 pm
                  </p>
                  <p className="text-sm text-gray-800 dark:text-white">
                    New arrival recorded #ML-3467
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-green-400"></span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    12:30 pm
                  </p>
                  <p className="text-sm text-gray-800 dark:text-white">
                    Payment Done
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Projects Section */}
          <div className="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Top Projects{" "}
                <span className="text-sm text-gray-500">Best Products</span>
              </h2>
              <select className="p-2 border rounded text-sm text-gray-600 dark:text-gray-400 dark:bg-gray-700">
                <option>March 2025</option>
                {/* Add more months as needed */}
              </select>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-600 dark:text-gray-400">
                  <th className="p-2 text-left">Product</th>
                  <th className="p-2 text-center">Progress</th>
                  <th className="p-2 text-center">Status</th>
                  <th className="p-2 text-right">Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t dark:border-gray-700">
                  <td className="p-2 flex items-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/controller.png"
                      alt="Gaming Console"
                      className="w-6 h-6 mr-2"
                    />
                    <span>Gaming Console</span>
                  </td>
                  <td className="p-2 text-center">78.5%</td>
                  <td className="p-2 text-center">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Low
                    </span>
                  </td>
                  <td className="p-2 text-right">$3.9k</td>
                </tr>
                <tr className="border-t dark:border-gray-700">
                  <td className="p-2 flex items-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/purse.png"
                      alt="Leather Purse"
                      className="w-6 h-6 mr-2"
                    />
                    <span>Leather Purse</span>
                  </td>
                  <td className="p-2 text-center">58.6%</td>
                  <td className="p-2 text-center">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      Medium
                    </span>
                  </td>
                  <td className="p-2 text-right">$3.5k</td>
                </tr>
                <tr className="border-t dark:border-gray-700">
                  <td className="p-2 flex items-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/dress.png"
                      alt="Red Velvet Dress"
                      className="w-6 h-6 mr-2"
                    />
                    <span>Red Velvet Dress</span>
                  </td>
                  <td className="p-2 text-center">25%</td>
                  <td className="p-2 text-center">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      High
                    </span>
                  </td>
                  <td className="p-2 text-right">$3.8k</td>
                </tr>
                <tr className="border-t dark:border-gray-700">
                  <td className="p-2 flex items-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/headphones.png"
                      alt="Headphone Boat"
                      className="w-6 h-6 mr-2"
                    />
                    <span>Headphone Boat</span>
                  </td>
                  <td className="p-2 text-center">9.3%</td>
                  <td className="p-2 text-center">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      Critical
                    </span>
                  </td>
                  <td className="p-2 text-right">$3.54k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ecommerce;
