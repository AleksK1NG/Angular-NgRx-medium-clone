export interface CurrentUser {
  id: number
  email: string
  createdAt: string
  updatedAt: string
  username: string
  bio?: string | null
  image?: string | null
  token: string
}

export interface UserProfile extends CurrentUser {
  password: string
}

export interface BackendErrors {
  [key: string]: string[]
}

export interface Article {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: PopularTagType[]
  description: string
  author: Profile
  favorited: boolean
  favoritesCount: number
}

export interface Profile {
  username: string
  bio: string | null
  image: string
  following: boolean
}

export type PopularTagType = string

export interface GetArticleResponse {
  article: Article
}

export interface ArticleForm {
  title: string
  description: string
  body: string
  tagList: string[]
}

export interface CreateArticleResponse {
  article: Article
}

export interface UserProfile {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface GetUserProfileResponse {
  profile: UserProfile
}
