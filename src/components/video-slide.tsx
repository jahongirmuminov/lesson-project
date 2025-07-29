import type { SlideContent } from "@/types/lesson";
import { getYouTubeEmbedUrl } from "@/utils/embedurl";
import { Play } from "lucide-react";

interface VideoSlideProps {
  content: SlideContent;
  url?: string;
}

export function VideoSlide({ content, url }: VideoSlideProps) {
  const embedUrl = url ? getYouTubeEmbedUrl(url) : "";

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          {content.title}
        </h1>
        {content.description && (
          <p className="text-gray-600">{content.description}</p>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          {embedUrl ? (
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          ) : (
            <div className="text-center">
              <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Видео будет загружено здесь</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
