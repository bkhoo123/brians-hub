"use client";

import { useState } from "react";
import {
  Home as HomeIcon,
  FolderKanban,
  CheckSquare,
  Users,
  Settings,
  Calendar,
  ThumbsUp,
  Timer,
  TrendingUp,
  TrendingDown,
  Phone,
  Video,
  MoreVertical,
  Smile,
  Search,
  Smartphone,
  Plus,
  Download,
  Info,
  LogOut,
  Hash,
  Clock,
  MessageCircle,
  Mic,
  Zap,
} from "lucide-react";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const menuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "tasks", label: "Tasks", icon: CheckSquare },
  { id: "team", label: "Team", icon: Users },
  { id: "automations", label: "Automations", icon: Zap },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("home");

  const renderContent = () => {
    switch (selectedItem) {
      case "home":
        return (
          <>
            {/* Main Content Area */}
            <div className="flex-1 p-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Hello, Margaret
                  </h1>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>16 May, 2023</span>
                    <Calendar size={16} className="text-gray-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Track team progress here. You almost reach a goal!
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Finished Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                      <ThumbsUp size={20} className="text-gray-600" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Finished</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-gray-900">
                      18
                    </span>
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <TrendingUp size={14} />
                      +8 tasks
                    </span>
                  </div>
                </div>

                {/* Tracked Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                      <Timer size={20} className="text-gray-600" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Tracked</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-gray-900">
                      31h
                    </span>
                    <span className="text-sm text-red-500 flex items-center gap-1">
                      <TrendingDown size={14} />
                      -6 hours
                    </span>
                  </div>
                </div>

                {/* Efficiency Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                      <TrendingUp size={20} className="text-gray-600" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Efficiency</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-gray-900">
                      93%
                    </span>
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <TrendingUp size={14} />
                      +12%
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Performance
                  </h2>
                  <select className="px-4 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700">
                    <option>01-07 May</option>
                    <option>08-14 May</option>
                    <option>15-21 May</option>
                  </select>
                </div>

                {/* Simple Chart Visualization */}
                <div className="relative h-64">
                  <div className="absolute inset-0 flex items-end justify-between gap-2">
                    {[4, 3, 2.5, 4.5, 3.5, 5, 6].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div
                          className="w-full bg-linear-to-t from-blue-100 to-blue-50 rounded-t-lg border-t-2 border-blue-400"
                          style={{ height: `${height * 16}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex justify-between text-xs text-gray-400 mt-2 pt-2">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                    <span>06</span>
                    <span>07</span>
                  </div>
                </div>

                {/* Chart Legend */}
                <div className="mt-8 flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600">This month</span>
                    <span className="font-medium text-gray-900">7h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600">Last month</span>
                    <span className="font-medium text-gray-900">6h</span>
                  </div>
                </div>
              </div>

              {/* Current Tasks */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Current Tasks
                    </h2>
                    <span className="text-sm text-gray-500">Done 30%</span>
                  </div>
                  <select className="px-4 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700">
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                </div>

                <div className="space-y-4">
                  {/* Task 1 */}
                  <div className="flex items-center gap-4 py-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                      <Smile size={20} className="text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">
                        Product Review for UIB Market
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full">
                        In progress
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock size={14} />
                        4h
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Task 2 */}
                  <div className="flex items-center gap-4 py-3">
                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Search size={20} className="text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">
                        UX Research for Product
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        On hold
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock size={14} />
                        8h
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Task 3 */}
                  <div className="flex items-center gap-4 py-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                      <Smartphone size={20} className="text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">
                        App design and development
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                        Done
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock size={14} />
                        32h
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Activity */}
            <div className="w-80 bg-gray-50 p-6 overflow-y-auto">
              {/* User Profile Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 bg-linear-to-br from-pink-400 to-orange-400 rounded-full mb-3 flex items-center justify-center text-white text-2xl relative">
                    <Users size={32} />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">Megan Norton</h3>
                  <p className="text-sm text-gray-500">@megnorton</p>
                </div>
                <div className="flex gap-2 justify-center">
                  <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100">
                    <Phone size={18} className="text-gray-600" />
                  </button>
                  <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100">
                    <Video size={18} className="text-gray-600" />
                  </button>
                  <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100">
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Activity Feed */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Activity
                </h3>

                <div className="space-y-6">
                  {/* Activity Item 1 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs shrink-0 relative">
                      FM
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-gray-50"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-gray-900 text-sm">
                          Floyd Miles
                        </span>
                        <span className="text-xs text-gray-400">10:15 AM</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">
                        Commented on Stark Project
                      </p>
                      <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-700 mt-2">
                        Hi! Next week we'll start a new project. I'll tell you
                        all the details later
                      </div>
                    </div>
                  </div>

                  {/* Activity Item 2 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-linear-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs shrink-0 relative">
                      GH
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-gray-50"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-gray-900 text-sm">
                          Guy Hawkins
                        </span>
                        <span className="text-xs text-gray-400">10:15 AM</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">
                        Added a file to 7Heros Project
                      </p>
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                          <Hash size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-900">
                            Homepage.fig
                          </div>
                          <div className="text-xs text-gray-400">13.4 Mb</div>
                        </div>
                        <button className="text-blue-500">
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Activity Item 3 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-linear-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xs shrink-0">
                      KW
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-gray-900 text-sm">
                          Kristin Watson
                        </span>
                        <span className="text-xs text-gray-400">10:15 AM</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Commented on 7Heros Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="mt-6 bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-2">
                <MessageCircle size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Write a message"
                  className="flex-1 text-sm outline-none text-gray-600"
                />
                <button className="text-gray-400 hover:text-gray-600">
                  <Smile size={18} />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Mic size={18} />
                </button>
              </div>
            </div>
          </>
        );

      case "projects":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Projects
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Manage all your projects
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-600">Projects content coming soon...</p>
            </div>
          </div>
        );

      case "tasks":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tasks</h1>
            <p className="text-sm text-gray-500 mb-8">View all your tasks</p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-600">Tasks content coming soon...</p>
            </div>
          </div>
        );

      case "team":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Team</h1>
            <p className="text-sm text-gray-500 mb-8">
              Collaborate with your team
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-600">Team content coming soon...</p>
            </div>
          </div>
        );

      case "automations":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Automations
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Create and manage your workflow automations
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-600">
                Automations content coming soon...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Settings
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Configure your preferences
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-600">Settings content coming soon...</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-200 border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-900 text-lg">
              Brian's Hub
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setSelectedItem(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3  transition-all text-sm ${
                      selectedItem === item.id
                        ? "bg-gray-100 text-gray-900 font-semibold"
                        : "text-gray-900 hover:bg-gray-50 font-medium"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Links */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50">
            <Info size={18} />
            <span>Help & information</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50">
            <LogOut size={18} />
            <span>Log out</span>
          </button>
        </div>
      </div>

      {/* Main Content + Right Sidebar */}
      <div className="flex flex-1">{renderContent()}</div>
    </div>
  );
}
