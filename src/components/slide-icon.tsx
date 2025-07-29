import { Code, FileText, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface SlideIconProps {
  type: "task" | "theory" | "video"
  className?: string
}

export function SlideIcon({ type, className }: SlideIconProps) {
  const icons = {
    task: Code,
    theory: FileText,
    video: Play,
  }

  const Icon = icons[type]

  return <Icon className={cn("w-4 h-4", className)} />
}
