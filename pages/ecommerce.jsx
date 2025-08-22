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
} from "@heroicons/react/24/outline";

const ecommerce = () => {
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
          <div></div>
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
    </section>
  );
};

export default ecommerce;
