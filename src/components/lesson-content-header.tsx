"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LessonContentHeaderProps {
  currentSlideNumber: number;
  currentSlideTypeLabel: string;
  currentSlideTitle: string;

  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

export function LessonContentHeader({
  currentSlideNumber,
  currentSlideTypeLabel,
  currentSlideTitle,

  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
}: LessonContentHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-gray-500 text-base font-normal whitespace-nowrap">
          Слайд {currentSlideNumber} - {currentSlideTypeLabel}
        </div>
        <div className="text-gray-900 text-lg font-semibold whitespace-nowrap">
          {currentSlideTitle}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={isPreviousDisabled}
          className={cn(
            "h-8 w-8 rounded-md",
            isPreviousDisabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="default"
          size="icon"
          onClick={onNext}
          disabled={isNextDisabled}
          className={cn(
            "h-8 w-8 rounded-md",
            isNextDisabled
              ? "bg-blue-300 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
