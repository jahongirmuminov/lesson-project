"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { SlideContent } from "@/types/lesson";
import { Star, Upload } from "lucide-react";

interface TaskSlideProps {
  content: SlideContent;
}

export function TaskSlide({ content }: TaskSlideProps) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");

  const handleSubmit = () => {
    console.log("Submitting:", { code, language });
  };

  return (
    <div className="flex gap-6 h-full">
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-900">
            {content.title}
          </h1>
          <Star className="w-5 h-5 text-gray-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
        </div>

        {content.sections &&
          content.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-base font-semibold text-gray-900">
                {section.title}
              </h2>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-gray-50 p-4 rounded">
                {section.content}
              </div>
            </div>
          ))}

        {content.examples && content.examples.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">Примеры</h2>
            {content.examples.map((example, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Входные данные
                    </span>
                    <button className="text-xs text-blue-600 hover:text-blue-800">
                      Скопировать
                    </button>
                  </div>
                  <pre className="bg-gray-50 p-3 rounded text-sm font-mono  border text-red-600">
                    {example.input}
                  </pre>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Выходные данные
                    </span>
                    <button className="text-xs text-blue-600 hover:text-blue-800">
                      Скопировать
                    </button>
                  </div>
                  <pre className="bg-gray-50 p-3 rounded text-sm font-mono  border text-red-600">
                    {example.output}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Примечание
          </h3>
          <p className="text-sm text-gray-700">
            Рассмотрим первый тестовый пример. В нем достаточно попытать цветы в
            течение следующего месяца, когда цветов будет достаточно для
            покупки. Тогда Петя сможет покупать цветы на складе не более чем в k
            симметричных.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Во втором тестовом примере рассмотрим решение Петя, даже если цветы
            состоят не вещества: r = 0i. Эксплуатация Петя может покупать цветы
            на складе не более чем в k симметричных.
          </p>
        </div>
      </div>

      <div className="w-80 space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Отослать
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Язык
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm bg-white"
              >
                <option value="python">Python 3.9</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Исходный код
              </label>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Добавить исходный код"
                className="min-h-[120px] font-mono text-sm resize-none"
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Отправить
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-3 bg-transparent"
              >
                <Upload className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-xs text-gray-500">
              <p>Загружать или перетаскивать файл</p>
              <p className="mt-1">
                Если файл не загружается в браузере, то можно загрузить файл и
                выбрать его в ЛК/Файл
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
