export interface TrainingSession {
    id: string | number;
    title: string;
    insight: string;
    description: string;
    pdfUrlNational: string;       // Path for Pakistani Nationals
    pdfUrlInternational: string;  // Path for International/Saudi
    thumbnail: string;
    date: string;
  }
  
  export const trainingData: TrainingSession[] = [
    {
      id: 1,
      title: "Abstract Writing",
      insight: "Master the art of summarizing research effectively.",
      description: "This session covers the essentials of abstract writing, distinguishing it from introductions, and structuring it correctly. Learn the types of abstracts, common pitfalls to avoid, and view practical examples to enhance your research visibility.",
      // Updated paths based on your uploaded files
      pdfUrlNational: "/pdfs/abstract-writing-national.pdf", 
      pdfUrlInternational: "/pdfs/abstract-writing.pdf",
      thumbnail: "/thumbnails/session_1_cover.webp",
      date: "2024-03-10",
    },
    {
      id: 2,
      title: "Article Writing",
      insight: "A complete guide to structuring and publishing medical research articles.",
      description: "A comprehensive workshop on the full cycle of article writing, from crafting a compelling introduction to defining methodology and variables. It includes tips on referencing, coherence, and precise conclusion writing for high-impact journals.",
      pdfUrlNational: "/pdfs/article-writing-national.pdf",
      pdfUrlInternational: "/pdfs/article-writing.pdf",
      thumbnail: "/thumbnails/session_3_cover.webp",
      date: "2024-03-15",
    },
    {
      id: 3,
      title: "Effective Research Presentation",
      insight: "Deliver impactful research presentations with confidence and clarity.",
      description: "Learn how to design effective slides, manage presentation time, and communicate complex research findings clearly. This session focuses on formatting, content selection, and building the confidence needed for academic conferences.",
      pdfUrlNational: "/pdfs/effective-research-presentation-national.pdf",
      pdfUrlInternational: "/pdfs/effective-research-presentation.pdf",
      thumbnail: "/thumbnails/session_5_cover.webp",
      date: "2024-03-20",
    },
    {
      id: 4,
      title: "SPSS & Results Making",
      insight: "Hands-on training for statistical analysis using SPSS software.",
      description: "Master data entry, transformation, and statistical analysis using SPSS. This technical workshop covers a wide range of tests including T-tests, ANOVA, Chi-square, and regression to help you accurately interpret and present your study results.",
      pdfUrlNational: "/pdfs/spss-results-making-national.pdf",
      pdfUrlInternational: "/pdfs/spss-results-making.pdf",
      thumbnail: "/thumbnails/session_2_cover.webp",
      date: "2024-04-05",
    },
    {
      id: 5,
      title: "Synopsis Writing",
      insight: "The blueprint for successful research proposals and thesis planning.",
      description: "This session guides researchers through drafting a solid synopsis, including hypothesis formulation, rationale, and study design. It details the essential components required for approval, such as sampling techniques, inclusion criteria, and data collection procedures.",
      pdfUrlNational: "/pdfs/synopsis-writing-national.pdf",
      pdfUrlInternational: "/pdfs/synopsis-writing.pdf",
      thumbnail: "/thumbnails/session_4_cover.webp",
      date: "2024-04-12",
    },
  ];