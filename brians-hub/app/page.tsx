"use client";

import { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  FolderKanban,
  Settings,
  Moon,
  Sun,
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
  Download,
  Info,
  LogOut,
  Hash,
  Clock,
  MessageCircle,
  Mic,
  Zap,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const menuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "automations", label: "Automations", icon: Zap },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("home");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
                <p className="text-sm text-muted-foreground">
                  Track team progress here. You almost reach a goal!
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Finished Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <ThumbsUp size={20} className="text-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Finished</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-semibold">18</span>
                      <span className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp size={14} />
                        +8 tasks
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Tracked Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <Timer size={20} className="text-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Tracked</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-semibold">31h</span>
                      <span className="text-sm text-red-500 flex items-center gap-1">
                        <TrendingDown size={14} />
                        -6 hours
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Efficiency Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <TrendingUp size={20} className="text-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Efficiency</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-semibold">93%</span>
                      <span className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp size={14} />
                        +12%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Chart */}
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">Performance</CardTitle>
                  <Select defaultValue="01-07">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01-07">01-07 May</SelectItem>
                      <SelectItem value="08-14">08-14 May</SelectItem>
                      <SelectItem value="15-21">15-21 May</SelectItem>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent>
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
                    <div className="absolute inset-x-0 bottom-0 flex justify-between text-xs text-muted-foreground mt-2 pt-2">
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
                      <span className="text-muted-foreground">This month</span>
                      <span className="font-medium">7h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-muted-foreground">Last month</span>
                      <span className="font-medium">6h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Tasks */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg font-semibold">Current Tasks</CardTitle>
                    <span className="text-sm text-muted-foreground">Done 30%</span>
                  </div>
                  <Select defaultValue="week">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Week</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Task 1 */}
                    <div className="flex items-center gap-4 py-3">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <Smile size={20} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          Product Review for UIB Market
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-100">
                          In progress
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={14} />
                          4h
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark Complete</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <Separator />

                    {/* Task 2 */}
                    <div className="flex items-center gap-4 py-3">
                      <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                        <Search size={20} className="text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          UX Research for Product
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                          On hold
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={14} />
                          8h
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark Complete</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <Separator />

                    {/* Task 3 */}
                    <div className="flex items-center gap-4 py-3">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <Smartphone size={20} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          App design and development
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-50 text-green-600 hover:bg-green-100">
                          Done
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={14} />
                          32h
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark Complete</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Activity */}
            <div className="w-80 bg-muted/30 p-6 overflow-y-auto">
              {/* User Profile Card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <Avatar className="w-20 h-20 mb-3">
                      <AvatarFallback className="bg-linear-to-br from-pink-400 to-orange-400 text-white text-xl">
                        MN
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">Megan Norton</h3>
                    <p className="text-sm text-muted-foreground">@megnorton</p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <Button variant="secondary" size="icon" className="rounded-xl">
                      <Phone size={18} />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-xl">
                      <Video size={18} />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-xl">
                      <MoreVertical size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Feed */}
              <div>
                <h3 className="text-sm font-semibold mb-4">Activity</h3>

                <div className="space-y-6">
                  {/* Activity Item 1 */}
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8 shrink-0">
                      <AvatarFallback className="bg-linear-to-br from-blue-400 to-blue-600 text-white text-xs">
                        FM
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-sm">Floyd Miles</span>
                        <span className="text-xs text-muted-foreground">10:15 AM</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Commented on Stark Project
                      </p>
                      <Card className="mt-2">
                        <CardContent className="p-3 text-xs">
                          Hi! Next week we'll start a new project. I'll tell you
                          all the details later
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Activity Item 2 */}
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8 shrink-0">
                      <AvatarFallback className="bg-linear-to-br from-purple-400 to-purple-600 text-white text-xs">
                        GH
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-sm">Guy Hawkins</span>
                        <span className="text-xs text-muted-foreground">10:15 AM</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Added a file to 7Heros Project
                      </p>
                      <Card>
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                            <Hash size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium">Homepage.fig</div>
                            <div className="text-xs text-muted-foreground">13.4 Mb</div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500">
                            <Download size={18} />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Activity Item 3 */}
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8 shrink-0">
                      <AvatarFallback className="bg-linear-to-br from-pink-400 to-pink-600 text-white text-xs">
                        KW
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-sm">Kristin Watson</span>
                        <span className="text-xs text-muted-foreground">10:15 AM</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Commented on 7Heros Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="mt-6 flex items-center gap-2">
                <div className="flex-1 relative">
                  <MessageCircle size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Write a message"
                    className="pl-10 pr-20"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Smile size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Mic size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "projects":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold mb-2">Projects</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Manage all your projects
            </p>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground">Projects content coming soon...</p>
              </CardContent>
            </Card>
          </div>
        );

      case "automations":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold mb-2">Automations</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Create and manage your workflow automations
            </p>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground">
                  Automations content coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case "settings":
        return (
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-semibold mb-2">Settings</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Configure your preferences
            </p>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground">Settings content coming soon...</p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-200 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-900 dark:text-white text-lg">
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
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedItem(item.id)}
                    className={`w-full justify-start gap-3 px-4 py-3 h-auto rounded-none transition-all text-sm ${
                      selectedItem === item.id
                        ? "bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white font-semibold"
                        : "text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 font-medium"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>

        <Separator />

        {/* Bottom Links */}
        <div className="p-4 space-y-2">
          <Button 
            variant="ghost" 
            onClick={toggleDarkMode}
            className="w-full justify-start gap-3 px-4 py-2 h-auto text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 px-4 py-2 h-auto text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Info size={18} />
            <span>Help & information</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 px-4 py-2 h-auto text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <LogOut size={18} />
            <span>Log out</span>
          </Button>
        </div>
      </div>

      {/* Main Content + Right Sidebar */}
      <div className="flex flex-1">{renderContent()}</div>
    </div>
  );
}
