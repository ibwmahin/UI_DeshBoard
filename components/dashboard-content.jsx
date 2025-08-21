"use client";

import {
  UsersIcon,
  CurrencyDollarIcon,
  FolderIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ChartBarIcon,
  ArrowUpIcon,
  EnvelopeIcon,
  PhoneIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  CheckIcon,
  XMarkIcon,
  ClockIcon,
  DocumentTextIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TicketIcon,
  ListBulletIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  Bars3Icon,
  TagIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

import HomePage from "@/pages/homepage";
import AboutUs from "@/pages/aboutus";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blogdetails";
import Portfolio from "@/pages/portfolio";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import Analytical from "@/pages/analytical";
import Ecommerce from "@/pages/ecommerce";
import Login from "@/pages/login";
import Register from "@/pages/register";

export default function DashboardContent({ currentPage }) {
  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <DashboardHomePage />;
      case "homepage":
        return <HomePage />;
      case "aboutus":
        return <AboutUs />;
      case "blog":
        return <Blog />;
      case "blogdetails":
        return <BlogDetails />;
      case "portfolio":
        return <Portfolio />;
      case "pricing":
        return <Pricing />;
      case "contact":
        return <Contact />;
      case "analytical":
        return <Analytical />;
      case "ecommerce":
        return <Ecommerce />;
      case "frontend":
        return <FrontendPage />;
      case "chat":
        return <ChatPage />;
      case "calendar":
        return <CalendarPage />;
      case "email":
        return <EmailPage />;
      case "kanban":
        return <KanbanPage />;
      case "userprofile":
        return <UserProfilePage />;
      case "ecommerce-app":
        return <EcommerceAppPage />;
      case "contacts":
        return <ContactsPage />;
      case "courses":
        return <CoursesPage />;
      case "employee":
        return <EmployeePage />;
      case "notes":
        return <NotesPage />;
      case "tickets":
        return <TicketsPage />;
      case "contact-list":
        return <ContactListPage />;
      case "invoice":
        return <InvoicePage />;
      case "todo":
        return <TodoPage />;
      case "ui-components":
        return <UIComponentsPage />;
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "forgot-password":
        return <ForgotPasswordPage />;
      case "two-steps":
        return <TwoStepsPage />;
      case "error":
        return <ErrorPage />;
      case "maintenance":
        return <MaintenancePage />;
      case "menu-level":
        return <MenuLevelPage />;
      case "chip":
        return <ChipPage />;
      case "outlined":
        return <OutlinedPage />;
      case "external-link":
        return <ExternalLinkPage />;
      default:
        return <DashboardHomePage />;
    }
  };

  return <div className="space-y-6">{renderPageContent()}</div>;
}

function DashboardHomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Dashboard Home
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {[
          {
            title: "Employees",
            value: "96",
            icon: UsersIcon,
            color: "bg-blue-500",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
          },
          {
            title: "Clients",
            value: "3,650",
            icon: CurrencyDollarIcon,
            color: "bg-orange-500",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
          },
          {
            title: "Projects",
            value: "356",
            icon: FolderIcon,
            color: "bg-cyan-500",
            bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
          },
          {
            title: "Events",
            value: "696",
            icon: CalendarDaysIcon,
            color: "bg-red-500",
            bgColor: "bg-red-50 dark:bg-red-900/20",
          },
          {
            title: "Payroll",
            value: "$96k",
            icon: CreditCardIcon,
            color: "bg-green-500",
            bgColor: "bg-green-50 dark:bg-green-900/20",
          },
          {
            title: "Reports",
            value: "59",
            icon: ChartBarIcon,
            color: "bg-purple-500",
            bgColor: "bg-purple-50 dark:bg-purple-900/20",
          },
        ].map((stat, index) => (
          <div key={index} className={`${stat.bgColor} p-6 rounded-xl`}>
            <div
              className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue Updates Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Revenue Updates
            </h3>
            <select className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>March 2024</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Overview of Profit
            </p>
          </div>

          {/* Chart placeholder with sample data */}
          <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                $63,489.50
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Earnings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Earnings this month
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  $48,820
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Expense this month
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  $26,498
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Yearly Breakup */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Yearly Breakup
          </h3>
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              $36,358
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-green-600">
              <ArrowUpIcon className="w-4 h-4" />
              <span>+9% last year</span>
            </div>
          </div>

          {/* Circular progress placeholder */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mb-4">
            <div className="text-2xl font-bold text-blue-600">68%</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  2023
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Earnings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Earnings
          </h3>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            $6,820
          </div>
          <div className="flex items-center space-x-1 text-sm text-green-600 mb-4">
            <ArrowUpIcon className="w-4 h-4" />
            <span>+9% last year</span>
          </div>
          <div className="h-20 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg"></div>
        </div>

        {/* Employee Salary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Employee Salary
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Every month
          </p>
          <div className="h-32 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg flex items-end justify-center pb-4">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                $36,358
              </div>
              <div className="text-sm text-green-600">+9%</div>
            </div>
          </div>
        </div>

        {/* Best Selling Products */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Best selling products
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Overview 2024
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  MaterialPro
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  $3,650
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-blue-600">55%</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Flexy Admin
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  $2,100
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600">20%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FrontendPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Frontend Pages
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">
          Frontend page templates including landing pages, pricing, about, and
          contact pages.
        </p>
      </div>
    </div>
  );
}

function ChatPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Chat Application
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>New Chat</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Chat List */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="mb-4">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            {[
              {
                name: "John Doe",
                message: "Hey, how are you?",
                time: "2m",
                active: true,
              },
              {
                name: "Jane Smith",
                message: "Meeting at 3 PM",
                time: "1h",
                active: false,
              },
              {
                name: "Team Alpha",
                message: "Project update",
                time: "3h",
                active: false,
              },
            ].map((chat, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg cursor-pointer ${
                  chat.active
                    ? "bg-blue-50 dark:bg-blue-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {chat.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white truncate">
                      {chat.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {chat.message}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                J
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  John Doe
                </h3>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                <p className="text-gray-900 dark:text-white">
                  Hey, how are you doing?
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  10:30 AM
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 rounded-lg p-3 max-w-xs">
                <p className="text-white">I'm doing great! How about you?</p>
                <span className="text-xs text-blue-200">10:32 AM</span>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Calendar
        </h1>
        <div className="flex space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <PlusIcon className="w-5 h-5" />
            <span>Add Event</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Mini Calendar
            </h3>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div
                  key={day}
                  className="p-2 font-medium text-gray-500 dark:text-gray-400"
                >
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => (
                <div
                  key={i}
                  className={`p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded cursor-pointer ${
                    i === 15
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {i < 5 ? "" : i - 4}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {[
                {
                  title: "Team Meeting",
                  time: "10:00 AM",
                  color: "bg-blue-500",
                },
                {
                  title: "Client Call",
                  time: "2:00 PM",
                  color: "bg-green-500",
                },
                {
                  title: "Project Review",
                  time: "4:00 PM",
                  color: "bg-purple-500",
                },
              ].map((event, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 ${event.color} rounded-full`}></div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {event.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Calendar */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              March 2024
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                ←
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <div
                key={day}
                className="p-4 text-center font-medium text-gray-500 dark:text-gray-400"
              >
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => (
              <div
                key={i}
                className="min-h-[100px] p-2 border border-gray-200 dark:border-gray-700 rounded"
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  {i < 5 ? "" : i - 4}
                </div>
                {i === 15 && (
                  <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs rounded">
                    Team Meeting
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Email
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Compose</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Email Sidebar */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="space-y-2">
            {[
              { name: "Inbox", count: 12, active: true },
              { name: "Sent", count: 0, active: false },
              { name: "Drafts", count: 3, active: false },
              { name: "Spam", count: 1, active: false },
              { name: "Trash", count: 0, active: false },
            ].map((folder, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg cursor-pointer flex items-center justify-between ${
                  folder.active
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <span className="font-medium">{folder.name}</span>
                {folder.count > 0 && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {folder.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Email List */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search emails..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                sender: "John Doe",
                subject: "Project Update Required",
                preview:
                  "Hi, I need the latest project updates for the client meeting...",
                time: "10:30 AM",
                unread: true,
              },
              {
                sender: "Marketing Team",
                subject: "Weekly Newsletter",
                preview:
                  "Check out this week's highlights and upcoming events...",
                time: "Yesterday",
                unread: false,
              },
              {
                sender: "Support",
                subject: "Ticket #12345 Resolved",
                preview:
                  "Your support ticket has been resolved. Please review...",
                time: "2 days ago",
                unread: false,
              },
            ].map((email, index) => (
              <div
                key={index}
                className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                  email.unread ? "bg-blue-50 dark:bg-blue-900/10" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="rounded" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p
                        className={`font-medium ${
                          email.unread
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {email.sender}
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {email.time}
                      </span>
                    </div>
                    <p
                      className={`${
                        email.unread
                          ? "font-medium text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-300"
                      } truncate`}
                    >
                      {email.subject}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {email.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KanbanPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Kanban Board
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "To Do", count: 4, color: "bg-gray-500" },
          { title: "In Progress", count: 3, color: "bg-blue-500" },
          { title: "Review", count: 2, color: "bg-yellow-500" },
          { title: "Done", count: 5, color: "bg-green-500" },
        ].map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 ${column.color} rounded-full`}></div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {column.title}
                </h3>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm px-2 py-1 rounded">
                  {column.count}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {Array.from({ length: column.count }, (_, taskIndex) => (
                <div
                  key={taskIndex}
                  className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Task {taskIndex + 1} - {column.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Description for task {taskIndex + 1} in{" "}
                    {column.title.toLowerCase()} column.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2].map((avatar) => (
                        <div
                          key={avatar}
                          className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-700 flex items-center justify-center text-xs text-white"
                        >
                          {avatar}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Due: Mar 15
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        User Profile
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              MA
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Mathew Anderson
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Designer</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              info@modernize.com
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <UserGroupIcon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  My Profile
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Account Settings
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <EnvelopeIcon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  My Inbox
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Messages & Email
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <ListBulletIcon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  My Tasks
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  To-do and Daily Tasks
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
            <h4 className="font-semibold mb-2">Unlimited Access</h4>
            <p className="text-sm mb-3">
              Upgrade your account to get unlimited access to all features.
            </p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium">
              Upgrade
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Profile Information
            </h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <PencilIcon className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                value="Mathew"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                value="Anderson"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value="info@modernize.com"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value="+1 (555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                readOnly
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                rows={4}
                value="Passionate designer with 5+ years of experience in creating beautiful and functional user interfaces."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                readOnly
              />
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h4>
            <div className="space-y-3">
              {[
                { action: "Updated profile picture", time: "2 hours ago" },
                { action: "Changed password", time: "1 day ago" },
                { action: "Logged in from new device", time: "3 days ago" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <p className="text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommerceAppPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Ecommerce App
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">
          Full ecommerce application with shopping cart and checkout.
        </p>
      </div>
    </div>
  );
}

function ContactsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contacts
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add Contact</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>All Contacts</option>
              <option>Favorites</option>
              <option>Recent</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  name: "John Doe",
                  email: "john@example.com",
                  phone: "+1 234-567-8900",
                  company: "Tech Corp",
                },
                {
                  name: "Jane Smith",
                  email: "jane@example.com",
                  phone: "+1 234-567-8901",
                  company: "Design Studio",
                },
                {
                  name: "Mike Johnson",
                  email: "mike@example.com",
                  phone: "+1 234-567-8902",
                  company: "Marketing Inc",
                },
              ].map((contact, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {contact.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {contact.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {contact.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {contact.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CoursesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Courses
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "React Fundamentals",
            instructor: "John Doe",
            students: 1250,
            rating: 4.8,
            price: "$99",
            image: "bg-blue-500",
          },
          {
            title: "Advanced JavaScript",
            instructor: "Jane Smith",
            students: 890,
            rating: 4.9,
            price: "$129",
            image: "bg-green-500",
          },
          {
            title: "UI/UX Design",
            instructor: "Mike Johnson",
            students: 2100,
            rating: 4.7,
            price: "$79",
            image: "bg-purple-500",
          },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            <div
              className={`h-48 ${course.image} flex items-center justify-center`}
            >
              <AcademicCapIcon className="w-16 h-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                by {course.instructor}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {course.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {course.students} students
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  {course.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          My Enrolled Courses
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "React Fundamentals",
              progress: 75,
              status: "In Progress",
            },
            { title: "JavaScript Basics", progress: 100, status: "Completed" },
            { title: "CSS Grid Layout", progress: 45, status: "In Progress" },
          ].map((course, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {course.title}
                </h4>
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {course.progress}% complete
                </p>
              </div>
              <span
                className={`ml-4 px-3 py-1 rounded-full text-sm ${
                  course.status === "Completed"
                    ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                    : "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200"
                }`}
              >
                {course.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmployeePage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Employee Management
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add Employee</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {[
          {
            title: "Total Employees",
            value: "156",
            change: "+12%",
            color: "bg-blue-500",
          },
          {
            title: "Active",
            value: "142",
            change: "+5%",
            color: "bg-green-500",
          },
          {
            title: "On Leave",
            value: "8",
            change: "-2%",
            color: "bg-yellow-500",
          },
          {
            title: "New Hires",
            value: "6",
            change: "+3%",
            color: "bg-purple-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <div
              className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}
            >
              <UsersIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {stat.title}
            </p>
            <span className="text-green-600 text-sm">{stat.change}</span>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Employee List
            </h3>
            <div className="flex space-x-2">
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  name: "John Doe",
                  email: "john@company.com",
                  department: "Engineering",
                  position: "Senior Developer",
                  status: "Active",
                },
                {
                  name: "Jane Smith",
                  email: "jane@company.com",
                  department: "Design",
                  position: "UI Designer",
                  status: "Active",
                },
                {
                  name: "Mike Johnson",
                  email: "mike@company.com",
                  department: "Marketing",
                  position: "Marketing Manager",
                  status: "On Leave",
                },
              ].map((employee, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {employee.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {employee.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {employee.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        employee.status === "Active"
                          ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                          : "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function NotesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Notes
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>New Note</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Notes Sidebar */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="mb-4">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Meeting Notes
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Today's team meeting discussion points...
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                2 hours ago
              </span>
            </div>
            <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Project Ideas
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Brainstorming session results...
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Yesterday
              </span>
            </div>
            <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Code Snippets
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Useful code examples and references...
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                3 days ago
              </span>
            </div>
          </div>
        </div>

        {/* Note Editor */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Note title..."
              className="w-full text-xl font-semibold bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              defaultValue="Meeting Notes"
            />
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <strong>B</strong>
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <em>I</em>
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <u>U</u>
              </button>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <ListBulletIcon className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>

            <textarea
              className="w-full h-96 bg-transparent border-none outline-none resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Start writing your note..."
              defaultValue={`Team Meeting - March 15, 2024

Attendees:
- John Doe (Project Manager)
- Jane Smith (Designer)
- Mike Johnson (Developer)

Discussion Points:
1. Project timeline review
2. Budget allocation
3. Resource planning
4. Next milestone targets

Action Items:
- Update project documentation
- Schedule client review meeting
- Prepare design mockups
- Code review session

Next Meeting: March 22, 2024`}
            />
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Last saved: 2 minutes ago
              </span>
              <div className="flex items-center space-x-2">
                <TagIcon className="w-4 h-4 text-gray-400" />
                <span className="text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Meeting
                </span>
                <span className="text-sm bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                  Important
                </span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TicketsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Support Tickets
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>New Ticket</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Open Tickets", value: "24", color: "bg-blue-500" },
          { title: "In Progress", value: "12", color: "bg-yellow-500" },
          { title: "Resolved", value: "156", color: "bg-green-500" },
          { title: "Closed", value: "89", color: "bg-gray-500" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <div
              className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}
            >
              <TicketIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Tickets
            </h3>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>All Status</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  id: "#12345",
                  subject: "Login Issue",
                  customer: "John Doe",
                  priority: "High",
                  status: "Open",
                  created: "2 hours ago",
                },
                {
                  id: "#12346",
                  subject: "Payment Problem",
                  customer: "Jane Smith",
                  priority: "Medium",
                  status: "In Progress",
                  created: "1 day ago",
                },
                {
                  id: "#12347",
                  subject: "Feature Request",
                  customer: "Mike Johnson",
                  priority: "Low",
                  status: "Resolved",
                  created: "3 days ago",
                },
              ].map((ticket, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {ticket.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {ticket.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {ticket.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        ticket.priority === "High"
                          ? "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                          : ticket.priority === "Medium"
                          ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
                          : "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        ticket.status === "Open"
                          ? "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200"
                          : ticket.status === "In Progress"
                          ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
                          : "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {ticket.created}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ContactListPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact List
        </h1>
        <div className="flex space-x-2">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <PlusIcon className="w-5 h-5" />
            <span>Add Contact</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          {
            title: "Total Contacts",
            value: "2,847",
            change: "+12%",
            color: "bg-blue-500",
          },
          {
            title: "Active",
            value: "2,234",
            change: "+8%",
            color: "bg-green-500",
          },
          {
            title: "Inactive",
            value: "613",
            change: "-3%",
            color: "bg-gray-500",
          },
          {
            title: "New This Month",
            value: "156",
            change: "+25%",
            color: "bg-purple-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <div
              className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}
            >
              <UserGroupIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {stat.title}
            </p>
            <span className="text-green-600 text-sm">{stat.change}</span>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>All Contacts</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>VIP</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>All Categories</option>
                <option>Customers</option>
                <option>Suppliers</option>
                <option>Partners</option>
              </select>
            </div>
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {[
            {
              name: "John Doe",
              email: "john@example.com",
              phone: "+1 234-567-8900",
              company: "Tech Corp",
              category: "Customer",
              status: "Active",
            },
            {
              name: "Jane Smith",
              email: "jane@example.com",
              phone: "+1 234-567-8901",
              company: "Design Studio",
              category: "Partner",
              status: "Active",
            },
            {
              name: "Mike Johnson",
              email: "mike@example.com",
              phone: "+1 234-567-8902",
              company: "Marketing Inc",
              category: "Supplier",
              status: "Inactive",
            },
            {
              name: "Sarah Wilson",
              email: "sarah@example.com",
              phone: "+1 234-567-8903",
              company: "Consulting LLC",
              category: "Customer",
              status: "Active",
            },
            {
              name: "David Brown",
              email: "david@example.com",
              phone: "+1 234-567-8904",
              company: "Finance Group",
              category: "Partner",
              status: "Active",
            },
            {
              name: "Lisa Davis",
              email: "lisa@example.com",
              phone: "+1 234-567-8905",
              company: "Media House",
              category: "Customer",
              status: "Active",
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {contact.company}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    contact.status === "Active"
                      ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                      : "bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {contact.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.email}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  {contact.category}
                </span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <EyeIcon className="w-4 h-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InvoicePage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Invoice Management
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Create Invoice</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          {
            title: "Total Invoices",
            value: "1,247",
            change: "+12%",
            color: "bg-blue-500",
          },
          { title: "Paid", value: "892", change: "+8%", color: "bg-green-500" },
          {
            title: "Pending",
            value: "234",
            change: "+15%",
            color: "bg-yellow-500",
          },
          {
            title: "Overdue",
            value: "121",
            change: "-5%",
            color: "bg-red-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <div
              className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}
            >
              <DocumentTextIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {stat.title}
            </p>
            <span className="text-green-600 text-sm">{stat.change}</span>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Invoices
            </h3>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>All Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Overdue</option>
              </select>
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search invoices..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Invoice #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  id: "INV-001",
                  client: "Tech Corp",
                  amount: "$2,500.00",
                  status: "Paid",
                  dueDate: "Mar 15, 2024",
                },
                {
                  id: "INV-002",
                  client: "Design Studio",
                  amount: "$1,800.00",
                  status: "Pending",
                  dueDate: "Mar 20, 2024",
                },
                {
                  id: "INV-003",
                  client: "Marketing Inc",
                  amount: "$3,200.00",
                  status: "Overdue",
                  dueDate: "Mar 10, 2024",
                },
                {
                  id: "INV-004",
                  client: "Consulting LLC",
                  amount: "$950.00",
                  status: "Paid",
                  dueDate: "Mar 18, 2024",
                },
              ].map((invoice, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {invoice.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {invoice.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        invoice.status === "Paid"
                          ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                          : invoice.status === "Pending"
                          ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
                          : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {invoice.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="text-purple-600 hover:text-purple-900">
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TodoPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Todo List
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Add Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Total Tasks", value: "48", color: "bg-blue-500" },
          { title: "Completed", value: "32", color: "bg-green-500" },
          { title: "In Progress", value: "12", color: "bg-yellow-500" },
          { title: "Overdue", value: "4", color: "bg-red-500" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          >
            <div
              className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}
            >
              <ListBulletIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Task Form */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Add New Task
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter task title..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Task description..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Priority
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Due Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Add Task
            </button>
          </div>
        </div>

        {/* Task List */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Tasks
              </h3>
              <div className="flex space-x-2">
                <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option>All Tasks</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Overdue</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {[
              {
                title: "Complete project documentation",
                description:
                  "Write comprehensive documentation for the new feature",
                priority: "High",
                dueDate: "Mar 20",
                completed: false,
                overdue: false,
              },
              {
                title: "Review code changes",
                description: "Review pull requests from team members",
                priority: "Medium",
                dueDate: "Mar 18",
                completed: true,
                overdue: false,
              },
              {
                title: "Update website content",
                description: "Update homepage with new product information",
                priority: "Low",
                dueDate: "Mar 15",
                completed: false,
                overdue: true,
              },
              {
                title: "Prepare presentation",
                description: "Create slides for client meeting",
                priority: "High",
                dueDate: "Mar 22",
                completed: false,
                overdue: false,
              },
            ].map((task, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg ${
                  task.completed
                    ? "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
                    : task.overdue
                    ? "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="mt-1 rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`font-medium ${
                          task.completed
                            ? "text-green-800 dark:text-green-200 line-through"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {task.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            task.priority === "High"
                              ? "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                              : task.priority === "Medium"
                              ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200"
                              : "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                          }`}
                        >
                          {task.priority}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {task.dueDate}
                        </span>
                      </div>
                    </div>
                    <p
                      className={`text-sm mt-1 ${
                        task.completed
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {task.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UIComponentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        UI Components
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Buttons */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Buttons
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Primary
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                Secondary
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                Success
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                Danger
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-lg">
                Outline Primary
              </button>
              <button className="border border-gray-600 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg">
                Outline Secondary
              </button>
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Form Elements
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Input Field
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Textarea
              </label>
              <textarea
                rows={3}
                placeholder="Enter message..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Cards
          </h3>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Basic Card
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                This is a basic card component with some content.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-4">
              <h4 className="font-medium mb-2">Gradient Card</h4>
              <p className="text-blue-100 text-sm">
                This card has a gradient background.
              </p>
            </div>
          </div>
        </div>

        {/* Badges & Tags */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Badges & Tags
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
                Primary
              </span>
              <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">
                Success
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-sm">
                Warning
              </span>
              <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 px-2 py-1 rounded-full text-sm">
                Danger
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                Tag 1
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                Tag 2
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
                Tag 3
              </span>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Alerts
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 px-4 py-3 rounded-lg">
              <strong>Info:</strong> This is an informational alert message.
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg">
              <strong>Success:</strong> Operation completed successfully!
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200 px-4 py-3 rounded-lg">
              <strong>Warning:</strong> Please check your input data.
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-lg">
              <strong>Error:</strong> Something went wrong. Please try again.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Login
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">
          User authentication and login interface.
        </p>
      </div>
    </div>
  );
}

function RegisterPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Register
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">
          User registration and account creation interface.
        </p>
      </div>
    </div>
  );
}

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Forgot Password
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-lg rounded-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Send Reset Link
            </button>

            <div className="text-center">
              <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">
                Back to Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function TwoStepsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Two-Step Verification
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Enter the verification code sent to your phone
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-lg rounded-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Verification Code
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Verify Code
            </button>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Didn't receive the code?
              </p>
              <button className="text-blue-600 hover:text-blue-500 text-sm">
                Resend Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExclamationTriangleIcon className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            Go Back Home
          </button>
          <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <WrenchScrewdriverIcon className="w-12 h-12 text-yellow-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Under Maintenance
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're currently performing scheduled maintenance. We'll be back
            shortly.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Estimated Downtime
          </h3>
          <div className="flex items-center justify-center space-x-2 text-2xl font-mono text-blue-600">
            <span>02</span>
            <span>:</span>
            <span>45</span>
            <span>:</span>
            <span>30</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Hours : Minutes : Seconds
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            Get Notified
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Follow us on social media for updates
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuLevelPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Menu Level Examples
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vertical Menu */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Vertical Multi-Level Menu
          </h3>
          <div className="space-y-2">
            <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white">
                  Level 1 - Dashboard
                </span>
              </div>
            </div>
            <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white">
                  Level 1 - Components
                </span>
                <Bars3Icon className="w-4 h-4 text-gray-400" />
              </div>
              <div className="ml-4 mt-2 space-y-1">
                <div className="p-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
                  Level 2 - Buttons
                </div>
                <div className="p-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
                  Level 2 - Forms
                </div>
                <div className="p-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span>Level 2 - Advanced</span>
                    <Bars3Icon className="w-3 h-3" />
                  </div>
                  <div className="ml-4 mt-1 space-y-1">
                    <div className="p-1 text-xs text-gray-500 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-500 rounded cursor-pointer">
                      Level 3 - Charts
                    </div>
                    <div className="p-1 text-xs text-gray-500 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-500 rounded cursor-pointer">
                      Level 3 - Tables
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <span className="text-gray-900 dark:text-white">
                Level 1 - Settings
              </span>
            </div>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Breadcrumb Navigation
          </h3>
          <div className="space-y-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Components
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <span className="text-gray-500 dark:text-gray-400">
                    Menu Level
                  </span>
                </li>
              </ol>
            </nav>

            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Dashboard
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">›</span>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    UI Elements
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">›</span>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Advanced
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">›</span>
                </li>
                <li>
                  <span className="text-gray-500 dark:text-gray-400">
                    Current Page
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Horizontal Menu */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Horizontal Multi-Level Menu
          </h3>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <nav className="flex space-x-8">
              <div className="relative group">
                <button className="text-gray-900 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-900 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Components
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Buttons
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Forms
                    </a>
                    <div className="relative group/sub">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-between"
                      >
                        Advanced
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <div className="absolute left-full top-0 mt-0 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                        <div className="py-1">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            Charts
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            Tables
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-900 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Settings
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChipPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Chip Components
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Chips */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Chips
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                Primary
              </span>
              <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                Success
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                Warning
              </span>
              <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                Danger
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Filled Primary
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                Filled Success
              </span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
                Filled Warning
              </span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                Filled Danger
              </span>
            </div>
          </div>
        </div>

        {/* Chips with Icons */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Chips with Icons
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <UsersIcon className="w-4 h-4" />
                <span>Users</span>
              </span>
              <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <CheckIcon className="w-4 h-4" />
                <span>Completed</span>
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <ClockIcon className="w-4 h-4" />
                <span>Pending</span>
              </span>
            </div>
          </div>
        </div>

        {/* Removable Chips */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Removable Chips
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                <span>JavaScript</span>
                <button className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1">
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                <span>React</span>
                <button className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1">
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                <span>Tailwind CSS</span>
                <button className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1">
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Size Variations
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full text-xs">
                Small
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                Medium
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-base">
                Large
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Chips */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Interactive Chips
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Clickable Chips:
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors">
                  All
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm transition-colors">
                  Active
                </button>
                <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors">
                  Completed
                </button>
                <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors">
                  Archived
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Filter Chips with Count:
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors flex items-center space-x-1">
                  <span>Inbox</span>
                  <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    12
                  </span>
                </button>
                <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors flex items-center space-x-1">
                  <span>Sent</span>
                  <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    5
                  </span>
                </button>
                <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors flex items-center space-x-1">
                  <span>Draft</span>
                  <span className="bg-yellow-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutlinedPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Outlined Components
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Outlined Buttons */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Outlined Buttons
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-lg transition-colors">
                Primary
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-4 py-2 rounded-lg transition-colors">
                Success
              </button>
              <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 px-4 py-2 rounded-lg transition-colors">
                Warning
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-lg transition-colors">
                Danger
              </button>
            </div>
          </div>
        </div>

        {/* Outlined Cards */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Outlined Cards
          </h3>
          <div className="space-y-4">
            <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                Primary Card
              </h4>
              <p className="text-blue-600 dark:text-blue-300 text-sm">
                This is an outlined card with primary styling.
              </p>
            </div>
            <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                Success Card
              </h4>
              <p className="text-green-600 dark:text-green-300 text-sm">
                This is an outlined card with success styling.
              </p>
            </div>
          </div>
        </div>

        {/* Outlined Form Elements */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Outlined Form Elements
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Outlined Input
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:border-blue-500 focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Outlined Select
              </label>
              <select className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:border-blue-500 focus:ring-0">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Outlined Textarea
              </label>
              <textarea
                rows={3}
                placeholder="Enter message..."
                className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:border-blue-500 focus:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Outlined Badges */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Outlined Badges
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="border border-blue-600 text-blue-600 px-2 py-1 rounded-full text-sm">
                Primary
              </span>
              <span className="border border-green-600 text-green-600 px-2 py-1 rounded-full text-sm">
                Success
              </span>
              <span className="border border-yellow-600 text-yellow-600 px-2 py-1 rounded-full text-sm">
                Warning
              </span>
              <span className="border border-red-600 text-red-600 px-2 py-1 rounded-full text-sm">
                Danger
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExternalLinkPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        External Links
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Link Styles */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Link Styles
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Basic Links:
              </p>
              <div className="space-y-2">
                <div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Standard Link
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Hover Underline Link
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 no-underline font-medium"
                  >
                    No Underline Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* External Link Indicators */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            External Link Indicators
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1"
                >
                  <span>Visit Google</span>
                  <LinkIcon className="w-4 h-4" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1"
                >
                  <span>GitHub Repository</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1"
                >
                  <span>Documentation</span>
                  <DocumentTextIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Link Buttons */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Link Buttons
          </h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 transition-colors"
              >
                <span>Visit Site</span>
                <LinkIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-lg inline-flex items-center space-x-2 transition-colors"
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Social Links
          </h3>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-sm font-bold">t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-sm font-bold">gh</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Link Management Table */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Link Management
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  title: "Company Website",
                  url: "https://company.com",
                  type: "External",
                  status: "Active",
                },
                {
                  title: "Documentation",
                  url: "https://docs.company.com",
                  type: "External",
                  status: "Active",
                },
                {
                  title: "Support Portal",
                  url: "https://support.company.com",
                  type: "External",
                  status: "Inactive",
                },
              ].map((link, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {link.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                    <a href="#" className="flex items-center space-x-1">
                      <span>{link.url}</span>
                      <LinkIcon className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {link.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        link.status === "Active"
                          ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                          : "bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {link.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
