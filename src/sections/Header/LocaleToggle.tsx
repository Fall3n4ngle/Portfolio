"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui";
import { Globe } from "lucide-react";

export default function LocaleToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center rounded-md p-2 transition-all"
        >
          <Globe className="text-text-secondary mr-1.5 h-4 w-4" />
          <span className="text-lg">en</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Pick a language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <button className="p-2 text-left">English (en)</button>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <button className="p-2 text-left">Ukrainian (ua)</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
