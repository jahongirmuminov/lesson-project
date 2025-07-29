export interface Slide {
  id: number
  title: string
  type: "task" | "theory" | "video" | "test" | "presentation" // Added new types
  variant?: "homework" // For red border tasks
  content: SlideContent
}

export interface SlideContent {
  title: string
  description?: string
  sections?: Section[]
  examples?: Example[]
  inputData?: string
  outputData?: string
  videoUrl?: string
}

export interface Section {
  title: string
  content: string
}

export interface Example {
  input: string
  output: string
  explanation?: string
}

export interface TaskSubmission {
  code: string
  language: string
}
