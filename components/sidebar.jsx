"use client";

import { useState } from "react";
import {
  HomeIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  CalendarIcon,
  EnvelopeIcon,
  ViewColumnsIcon,
  UserIcon,
  PhoneIcon,
  AcademicCapIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
  TicketIcon,
  DocumentIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  LinkIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const navigationItems = [
  {
    section: "MAIN",
    items: [
      { id: "home", label: "HOME", icon: HomeIcon, active: true },
      {
        id: "analytical",
        label: "Analytical",
        icon: ChartBarIcon,
        highlight: false,
      },
      { id: "ecommerce", label: "eCommerce", icon: ShoppingCartIcon },
      {
        id: "frontend",
        label: "Frontend pages",
        icon: DocumentTextIcon,
        hasSubmenu: true,
        submenu: [
          { id: "homepage", label: "Home Page" },
          { id: "aboutus", label: "About Us" },
          { id: "blog", label: "Blog" },
          { id: "blogdetails", label: "Blog Details" },
          { id: "portfolio", label: "Portfolio" },
          { id: "pricing", label: "Pricing" },
          { id: "contact", label: "Contact" },
        ],
      },
    ],
  },
  {
    section: "APPS",
    items: [
      { id: "chat", label: "Chat", icon: ChatBubbleLeftIcon },
      { id: "calendar", label: "Calendar", icon: CalendarIcon },
      { id: "email", label: "Email", icon: EnvelopeIcon },
      { id: "kanban", label: "Kanban", icon: ViewColumnsIcon },
      { id: "userprofile", label: "UserProfile", icon: UserIcon, badge: "New" },
      {
        id: "ecommerce-app",
        label: "Ecommerce",
        icon: ShoppingCartIcon,
        badge: "New",
      },
      { id: "contacts", label: "Contacts", icon: PhoneIcon },
      { id: "courses", label: "Courses", icon: AcademicCapIcon },
      { id: "employee", label: "Employee", icon: HeartIcon },
      { id: "notes", label: "Notes", icon: ClipboardDocumentListIcon },
      { id: "tickets", label: "Tickets", icon: TicketIcon },
      { id: "contact-list", label: "Contact List", icon: PhoneIcon },
      {
        id: "invoice",
        label: "Invoice",
        icon: DocumentIcon,
        hasSubmenu: true,
        submenu: ["Create", "List", "Details"],
      },
      { id: "todo", label: "ToDo", icon: ClipboardDocumentCheckIcon },
    ],
  },
  {
    section: "UI",
    items: [
      {
        id: "ui-components",
        label: "Ui Components",
        icon: ViewColumnsIcon,
        hasSubmenu: true,
        submenu: ["Buttons", "Forms", "Cards", "Tables"],
      },
    ],
  },
  {
    section: "AUTH",
    items: [
      {
        id: "login",
        label: "Login",
        icon: UserIcon,
        hasSubmenu: true,
        submenu: ["Login v1", "Login v2"],
      },
      {
        id: "register",
        label: "Register",
        icon: UserIcon,
        hasSubmenu: true,
        submenu: ["Register v1", "Register v2"],
      },
      {
        id: "forgot-password",
        label: "Forgot Password",
        icon: ShieldCheckIcon,
        hasSubmenu: true,
        submenu: ["Forgot v1", "Forgot v2"],
      },
      {
        id: "two-steps",
        label: "Two Steps",
        icon: ShieldCheckIcon,
        hasSubmenu: true,
        submenu: ["Two Steps v1", "Two Steps v2"],
      },
      { id: "error", label: "Error", icon: ShieldCheckIcon },
      { id: "maintenance", label: "Maintenance", icon: Cog6ToothIcon },
    ],
  },
  {
    section: "OTHER",
    items: [
      {
        id: "menu-level",
        label: "Menu Level",
        icon: ViewColumnsIcon,
        hasSubmenu: true,
        submenu: ["Level 1", "Level 2"],
      },
      {
        id: "disabled",
        label: "Disabled",
        icon: ShieldCheckIcon,
        disabled: true,
      },
      { id: "chip", label: "Chip", icon: ViewColumnsIcon, badge: "9" },
      {
        id: "outlined",
        label: "Outlined",
        icon: ViewColumnsIcon,
        badge: "Outlined",
      },
      { id: "external-link", label: "External Link", icon: LinkIcon },
    ],
  },
];

export default function Sidebar({ collapsed, currentPage, setCurrentPage }) {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (itemId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleNavigation = (item, submenuItem = null) => {
    if (submenuItem) {
      setCurrentPage(submenuItem.id);
    } else if (item.hasSubmenu) {
      toggleSubmenu(item.id);
    } else if (!item.disabled) {
      setCurrentPage(item.id);
    }
  };

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700   flex flex-col`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          {!collapsed && (
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              Modernize
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div
        className="flex-1 overflow-y-auto py-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}</style>

        {navigationItems.map((section) => (
          <div key={section.section} className="mb-6">
            {!collapsed && (
              <div className="px-4 mb-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {section.section}
                </span>
              </div>
            )}

            <div className="space-y-1">
              {section.items.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium ${
                      currentPage === item.id
                        ? "bg-blue-600 text-white"
                        : item.disabled
                        ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    } ${item.highlight ? "bg-blue-600 text-white" : ""}`}
                    disabled={item.disabled}
                  >
                    <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />

                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>

                        {item.badge && (
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              item.badge === "New"
                                ? "bg-orange-500 text-white"
                                : item.badge === "Outlined"
                                ? "border border-orange-500 text-orange-500"
                                : "bg-blue-500 text-white"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}

                        {item.hasSubmenu &&
                          (expandedMenus[item.id] ? (
                            <ChevronDownIcon className="w-4 h-4" />
                          ) : (
                            <ChevronRightIcon className="w-4 h-4" />
                          ))}
                      </>
                    )}
                  </button>

                  {!collapsed && item.hasSubmenu && expandedMenus[item.id] && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((submenuItem) => (
                        <button
                          key={submenuItem.id}
                          onClick={() => handleNavigation(item, submenuItem)}
                          className={`w-full flex items-center px-4 py-2 text-sm ${
                            currentPage === submenuItem.id
                              ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                          }`}
                        >
                          <span className="text-left">{submenuItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Mathew
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Designer
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
