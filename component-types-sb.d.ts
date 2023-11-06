import { StoryblokStory } from "storyblok-generate-ts"

export interface AssetStoryblok {
  alt?: string
  copyright?: string
  id: number
  filename: string
  name: string
  title?: string
  focus?: string
  [k: string]: any
}

export interface RichtextStoryblok {
  type: string
  content?: RichtextStoryblok[]
  marks?: RichtextStoryblok[]
  attrs?: any
  text?: string
  [k: string]: any
}

export interface AboutStoryblok {
  myImage?: AssetStoryblok
  title?: string
  aboutMe?: RichtextStoryblok
  _uid: string
  component: "about"
  [k: string]: any
}

export interface AllArticlesStoryblok {
  title?: string
  _uid: string
  component: "all-articles"
  [k: string]: any
}

export type MultilinkStoryblok =
  | {
      id?: string
      cached_url?: string
      anchor?: string
      linktype?: "story"
      story?: {
        name: string
        created_at?: string
        published_at?: string
        id: number
        uuid: string
        content?: {
          [k: string]: any
        }
        slug: string
        full_slug: string
        sort_by_date?: null | string
        position?: number
        tag_list?: string[]
        is_startpage?: boolean
        parent_id?: null | number
        meta_data?: null | {
          [k: string]: any
        }
        group_id?: string
        first_published_at?: string
        release_id?: null | number
        lang?: string
        path?: null | string
        alternates?: any[]
        default_full_slug?: null | string
        translated_slugs?: null | any[]
        [k: string]: any
      }
      [k: string]: any
    }
  | {
      url?: string
      cached_url?: string
      anchor?: string
      linktype?: "asset" | "url"
      [k: string]: any
    }
  | {
      email?: string
      linktype?: "email"
      [k: string]: any
    }

export interface ArticleStoryblok {
  image?: AssetStoryblok
  title?: string
  subtitle?: string
  teaser?: string
  content?: RichtextStoryblok
  link?: Exclude<
    MultilinkStoryblok,
    { linktype?: "email" } | { linktype?: "asset" }
  >
  _uid?: string
  component?: "article"
  [k: string]: any
}

export interface PageStoryblok {
  body?: (
    | AboutStoryblok
    | AllArticlesStoryblok
    | ArticleStoryblok
    | PageStoryblok
    | SkillStoryblok
    | SkillsListStoryblok
  )[]
  _uid: string
  component: "page"
  uuid?: string
  [k: string]: any
}

export interface SkillStoryblok {
  name?: string
  icon?: AssetStoryblok
  _uid: string
  component: "skill"
  [k: string]: any
}

export interface SkillsListStoryblok {
  list?: (
    | AboutStoryblok
    | AllArticlesStoryblok
    | ArticleStoryblok
    | PageStoryblok
    | SkillStoryblok
    | SkillsListStoryblok
  )[]
  _uid: string
  component: "skills-list"
  [k: string]: any
}