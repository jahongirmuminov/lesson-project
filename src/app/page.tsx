"use client";

import { useState } from "react";
import { lessonData } from "@/data/lesson-data";
import { SlideList } from "@/components/slide-list";
import { TaskSlide } from "@/components/task-slide";
import { TheorySlide } from "@/components/theory-slide";
import { VideoSlide } from "@/components/video-slide";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LessonContentHeader } from "@/components/lesson-content-header";

export default function LessonPage() {
  const [currentSlideId, setCurrentSlideId] = useState(1); // Start with theory slide like in image
  const [activeTab, setActiveTab] = useState("main");

  const currentSlide = lessonData.find((slide) => slide.id === currentSlideId);

  const currentSlideIndex = lessonData.findIndex(
    (slide) => slide.id === currentSlideId
  );

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideId(lessonData[currentSlideIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < lessonData.length - 1) {
      setCurrentSlideId(lessonData[currentSlideIndex + 1].id);
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

  if (!currentSlide) {
    return <div>Слайд не найден</div>;
  }

  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case "task":
        return <TaskSlide content={currentSlide.content} />;
      case "theory":
        return <TheorySlide content={currentSlide.content} />;
      case "video":
        return <VideoSlide content={currentSlide.content} />;
      case "test":
        return <TaskSlide content={currentSlide.content} />;
      case "presentation":
        return <TheorySlide content={currentSlide.content} />;
      default:
        return <div>Неизвестный тип слайда</div>;
    }
  };

  const tabs = [
    { id: "main", label: "Главная слайда" },
    { id: "tasks", label: "Задачи урока" },
    { id: "results", label: "Результаты" },
    { id: "sent", label: "Послали" },
    { id: "stats", label: "Статистика" },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#F0F1F2]">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex flex-col h-full"
      >
        <div className="flex w-full bg-white">
          <TabsList className="bg-white border-b border-gray-200 rounded-none h-auto p-0 justify-start">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-6 py-4 text-sm  font-medium outline-none  !border-b-2 border-transparent data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:shadow-none rounded-none transition-colors hover:text-gray-700  hover:cursor-pointer hover:bg-gray-100"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Main Content - Now correctly inside TabsContent */}
        <TabsContent
          value="main"
          className="flex-1m  flex overflow-hidden mt-2 w-full"
        >
          {/* Slide List Sidebar */}
          <SlideList
            slides={lessonData}
            currentSlideId={currentSlideId}
            onSlideSelect={setCurrentSlideId}
          />

          {/* Content Area */}
          <div className="flex-1   ml-5 flex flex-col overflow-hidden">
            {/* Content Header */}
            <LessonContentHeader
              currentSlideNumber={currentSlideId}
              currentSlideTypeLabel={getSlideTypeLabel(currentSlide.type)}
              currentSlideTitle={currentSlide.content.title}
              onPrevious={handlePrevious}
              onNext={handleNext}
              isPreviousDisabled={currentSlideIndex === 0}
              isNextDisabled={currentSlideIndex === lessonData.length - 1}
            />

            {/* Content */}
            <div className="flex-1 overflow-y-auto  bg-white">
              <div className="p-6">{renderSlideContent()}</div>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="tasks"
          className="flex-1 flex overflow-hidden mt-0 w-full p-6"
        >
          <div className="text-gray-700">Задачи урока контент будет здесь.</div>
        </TabsContent>
        <TabsContent
          value="results"
          className="flex-1 flex overflow-hidden mt-0 w-full p-6"
        >
          <div className="text-gray-700">Результаты контент будет здесь.</div>
        </TabsContent>
        <TabsContent
          value="sent"
          className="flex-1 flex overflow-hidden mt-0 w-full p-6"
        >
          <div className="text-gray-700">Послали контент будет здесь.</div>
        </TabsContent>
        <TabsContent
          value="stats"
          className="flex-1 flex overflow-hidden mt-0 w-full p-6"
        >
          <div className="text-gray-700">Статистика контент будет здесь.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
