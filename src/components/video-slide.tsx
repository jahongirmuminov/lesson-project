import type { SlideContent } from "@/types/lesson"
import { Play } from "lucide-react"

interface VideoSlideProps {
  content: SlideContent
}

export function VideoSlide({ content }: VideoSlideProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">{content.title}</h1>
        {content.description && <p className="text-gray-600">{content.description}</p>}
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Видео будет загружено здесь</p>
          </div>
        </div>
      </div>
    </div>
  )
}
