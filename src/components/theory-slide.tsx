import type { SlideContent } from "@/types/lesson";

interface TheorySlideProps {
  content: SlideContent;
}

export function TheorySlide({ content }: TheorySlideProps) {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          {content.title}
        </h1>
      </div>

      {content.sections && content.sections.length > 0 && (
        <div className="space-y-6">
          {content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {section.content.split("\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
