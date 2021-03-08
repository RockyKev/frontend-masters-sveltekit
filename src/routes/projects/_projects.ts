export interface Project {
  title: string;
  slug: string;
  date: string;
  summary: string;
  coverImageUrl?: string;
  link?: string;
  repo?: string;
  articleUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio site",
    slug: "portfolio-site-2021",
    date: "2021-02-26",
    summary: "Updated portfolio for 2021.",
    coverImageUrl: "https://cass.moe/media/projects/website/embed.jpg",
    repo: "https://github.com/c-bandy/website"
  },
  {
    title: "Type Kana",
    slug: "type-kana",
    date: "2020-08-02",
    summary: "A quiz app to help you learn hiragana and katakana, the Japanese syllabaries.",
    // TODO: cover image is hardcoded, find a better way here
    coverImageUrl: "https://cass.moe/media/projects/type-kana/session.jpg",
    link: "https://type-kana.cass.moe/",
    repo: "https://github.com/c-bandy/type-kana",
    articleUrl: "/articles/type-kana.md"
  }
]
