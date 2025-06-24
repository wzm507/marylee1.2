import { HomeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import MaryProjects from "@/components/MaryProjects";

/**
* Central place for defining the navigation items. Used for navigation components and routing.
*/
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Mary项目",
    to: "/mary-projects",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <MaryProjects />,
  },
];
