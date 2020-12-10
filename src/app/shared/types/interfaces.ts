export interface CurrentUserInterface {
  id: number
  email: string
  createdAt: string
  updatedAt: string
  username: string
  bio?: string | null
  image?: string | null
  token: string
}

export interface BackendErrorsInterface {
  [key: string]: string[]
}

export interface ArticleInterface {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: PopularTagType[]
  description: string
  author: ProfileInterface
  favorited: boolean
  favoritesCount: number
}

export interface ProfileInterface {
  username: string
  bio: string | null
  image: string
  following: boolean
}

export type PopularTagType = string
