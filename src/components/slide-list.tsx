"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Slide } from "@/types/lesson";
import {
  FileText,
  Play,
  CheckSquare,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { IconCode } from "@/res/icons";

interface SlideListProps {
  slides: Slide[];
  currentSlideId: number;
  onSlideSelect: (slideId: number) => void;
}

export function SlideList({
  slides,
  currentSlideId,
  onSlideSelect,
}: SlideListProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const getSlideIcon = (
    type: "task" | "theory" | "video" | "test" | "presentation",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any
  ) => {
    switch (type) {
      case "task":
        return <IconCode className={style} />;
      case "theory":
        return <FileText className={style} />;
      case "video":
        return <Play className={style} />;
      case "test":
        return <CheckSquare className={style} />;
      case "presentation":
        return <MessageSquare className={style} />;
      default:
        return null;
    }
  };

  const getSlideColor = (slide: Slide) => {
    if (slide.variant === "homework") {
      return "border-l-red-400";
    }
    switch (slide.type) {
      case "task":
        return "border-l-[#8EE38E]";
      default:
        return "border-l-gray-400";
    }
  };

  const getSlideTypeLabel = (
    type: "task" | "theory" | "video" | "test" | "presentation"
  ) => {
    switch (type) {
      case "task":
        return "Задача";
      case "theory":
        return "Теория";
      case "video":
        return "Видео";
      case "test":
        return "Тест";
      case "presentation":
        return "Презентация";
      default:
        return "";
    }
  };

  return (
    <div
      className={cn(
        "bg-gray-50 rounded-lg border-r border-gray-200 h-full flex flex-col transition-all duration-300 ease-in-out",
        isSidebarOpen ? "w-[440px]" : "w-[90px]"
      )}
    >
      {/* Header */}
      <div className="px-3 relative rounded-lg py-2.5 border-b border-gray-200 bg-white flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900 whitespace-nowrap">
          Слайды
        </h2>

        <button
          onClick={toggleSidebar}
          className="p-[7px] shadow-md absolute  bg-white  -right-3 rounded-full hover:bg-gray-200 transition-colors ml-auto"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Slide List */}
      <div className="p-2 space-y-6 flex-1 overflow-y-auto">
        {slides.map((slide) => {
          const isActive = currentSlideId === slide.id;
          const slideColor = getSlideColor(slide);

          return (
            <div
              key={slide.id}
              onClick={() => onSlideSelect(slide.id)}
              className={cn(
                "rounded border-l-[4px] cursor-pointer transition-all hover:shadow-sm",
                isActive && " bg-[#BABFC2] text-[#D2D7DB]",
                slideColor
              )}
            >
              {/* If sidebar is open - show full content */}
              {isSidebarOpen ? (
                <div className="px-3 py-2.5 space-y-1 ">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-3">
                        <p
                          className={cn(
                            "text-[36px] font-medium",
                            isActive ? "text-[#D2D7DB]" : "text-[#D2D7DB]"
                          )}
                        >
                          {String(slide.id).padStart(2, "0")}
                        </p>

                        <div className="flex flex-col items-start">
                          <p
                            className={cn(
                              "text-xs  py-0.5 font-semibold rounded",
                              isActive ? "  text-[#F7F7F7]" : "  text-gray-600"
                            )}
                          >
                            {getSlideTypeLabel(slide.type)}
                          </p>

                          <h3
                            className={cn(
                              "text-[16px] font-bold leading-tight line-clamp-2",
                              isActive ? "text-[#F7F7F7]" : "text-[#75787A]"
                            )}
                          >
                            {slide.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#D2D7DB]">
                      {getSlideIcon(
                        slide.type,
                        `${
                          isActive ? "text-[#D2D7DB]" : "text-[#D2D7DB]"
                        } w-[34px] h-[34px]`
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                // If sidebar is closed - show just icon
                <div
                  className={`p-3 flex w-full rounded-r-lg items-center justify-center   ${
                    isActive && " bg-[#BABFC2] text-[#D2D7DB]"
                  }`}
                >
                  <div>
                    {getSlideIcon(
                      slide.type,
                      `${
                        isActive ? "text-[#D2D7DB]  " : "text-[#D2D7DB] "
                      } w-[34px] h-[34px]`
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
