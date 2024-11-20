'use client'

import * as React from "react"
import { Check, ChevronDown, Folder, Menu, Play, Plus, Send, Sidebar, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import TopBar from "./TopBar/TopBar"
import SideBar from "./SideBar/SideBar"
import MainScreen from "./MainScreen/MainScreen"

export function PostmanUi() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="flex h-screen flex-col">
      <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="flex flex-1 overflow-hidden">
        <SideBar/>
        <MainScreen/>
      </div>
    </div>
  )
}