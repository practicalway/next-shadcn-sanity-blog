import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity.config";

type Child = {
  _type: string;
  text: string;
};

type Block = {
  _type: "block";
  style: string;
  children: Child[];
};

type Header = {
  text: string;
  level: string;
  id: string;
};

export type Post = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  author: string;
  authorImg: string;
  authorBio: string;
  authorPosition: string;
  mainImage: string;
  category: string[];
  categorySlug: any;
  publishedAt: string;
  body: any;
  headers?: Header[];
  summary: string;
};

export type Category = {
  title: string;
  heroTitle: string;
  heroDescription: string;
  slug: string;
  categoryImage: any; // Burada categoryImage için daha spesifik bir tip kullanabilirsiniz.
  ordering: number;
};

export interface FavoriteOpenSourceProjectTypes {
  _id: string;
  title: string;
  description: string;
  iconUrl: string;
  url: string;
}

export interface FavoriteYouTubeVideo {
  _id: string;
  title: string;
  youtubeUrl: string;
  videoCategoryName: string;
}

export type VideoCategory = {
  _id: string;
  title: string;
  description: string;
  color: string;
};

export type Work = {
  _id: string;
  mainTitle: string;
  mainDescription: string;
  resume: Resume[];
  techStack: TechStack[];
  projects: Project[];
};

export type Resume = {
  _key: string;
  title: string;
  description: Block[];
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  startDate: string;
  endDate: string;
  isCurrent: boolean;
};

export type TechStack = {
  _key: string;
  language: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  proficiency: number;
};

export type Project = {
  _key: string;
  title: string;
  description: string;
  link: string;
};

export async function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"] | order(ordering asc) {
      title,
      heroTitle,
      heroDescription,
      "slug": slug.current,
      categoryImage,
      ordering
    }`,
  );
}

export async function getLatestPosts(): Promise<Post[]> {
  const query = groq`*[_type == "post"] | order(_createdAt desc) [0..10] {
    _id,
    _createdAt,
    title,
    summary,
    "slug": slug.current,
    "author": author->name,
    "authorImg": author->image.asset->url,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body,
    "tags": blogTags[]->{title, "color": color.hex},
    "categoryTitle": category->title, 
    "categorySlug": category->slug.current
  }`;

  const posts: Post[] = await createClient(clientConfig).fetch(query);
  return posts;
}

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"] | order(order asc) {
      _id,
      _createdAt,
      title,
      summary,
      "slug": slug.current,
      "author": author->name,
      "authorImg": author->image.asset->url,
      "authorPosition": author->position,
      "authorShortBio": author->shortBio,
      "mainImage": mainImage.asset->url,
      publishedAt,
      body,
      "tags": blogTags[]->{title, "color": color.hex} 
    }`,
  );
}
export async function getPostsByCategorySlug(
  categorySlug: string,
): Promise<Post[]> {
  try {
    if (categorySlug === "all") {
      const query = groq`*[_type == "post"] | order(_createdAt desc) {
        _id,
        _createdAt,
        title,
        summary,
        "slug": slug.current,
        "author": author->name,
        "authorImg": author->image.asset->url,
        "authorPosition": author->position,
        "authorShortBio": author->shortBio,
        "mainImage": mainImage.asset->url,
        publishedAt,
        body,
        "tags": blogTags[]->{title, "color": color.hex} 
      }`;

      const posts: Post[] = await createClient(clientConfig).fetch(query);
      return posts;
    } else {
      const query = groq`*[_type == "post" && category->slug.current == $categorySlug] | order(_createdAt desc) {
        _id,
        _createdAt,
        title,
        summary,
        "slug": slug.current,
        "author": author->name,
        "authorImg": author->image.asset->url,
        "mainImage": mainImage.asset->url,
        publishedAt,
        body,
        "tags": blogTags[]->{title, "color": color.hex} 
      }`;

      const posts: Post[] = await createClient(clientConfig).fetch(query, {
        categorySlug,
      });
      return posts;
    }
  } catch (error) {
    console.error("Hata:", error);
    throw error;
  }
}

export async function getPost(slug: string): Promise<Post> {
  try {
    const query = groq`*[_type == "post" && slug.current == $slug] | order(_createdAt desc)[0] {
      _id,
      _createdAt,
      title,
      summary,
      "slug": slug.current,
      "author": author->name,
      "authorImg": author->image.asset->url,
      "authorPosition": author->position,
      "mainImage": mainImage.asset->url,
      publishedAt,
      "category": category->title,
      "categorySlug": category->slug.current,
      body,
      "tags": blogTags[]->{title, "color": color.hex} 
    }`;

    const post: Post = await createClient(clientConfig).fetch(query, { slug });

    const headers: Header[] = [];
    post.body.forEach((block: Block) => {
      if (
        block._type === "block" &&
        block.style &&
        block.style.match(/h[1-6]/)
      ) {
        block.children.forEach((child: Child) => {
          if (child._type === "span" && child.text) {
            headers.push({
              text: child.text,
              level: block.style,
              id: child.text.replaceAll(" ", "-").toLowerCase(),
            });
          }
        });
      }
    });

    return { ...post, headers };
  } catch (error) {
    console.error("Hata:", error);
    throw error;
  }
}

export async function getPostsByCategoryName(
  categoryName: string,
): Promise<Post[]> {
  try {
    const query = groq`*[_type == "post" && category.title == $categoryName] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      summary,
      "slug": slug.current,
      "author": author->name,
      "authorImg": author->image.asset->url,
      "mainImage": mainImage.asset->url,
      publishedAt,
      body,
      "tags": blogTags[]->{title, "color": color.hex} 
    }`;

    const posts: Post[] = await createClient(clientConfig).fetch(query, {
      categoryName,
    });
    return posts;
  } catch (error) {
    console.error("Hata:", error);
    throw error;
  }
}

export async function getLatestFavoriteOpenSourceProjects() {
  const query = groq`*[_type == "favoriteOpenSourceProject"] | order(_createdAt desc)[0..3] {
    _id,
    title,
    description,
    url
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getAllFavoriteOpenSourceProjects() {
  const query = groq`*[_type == "favoriteOpenSourceProject"] | order(_createdAt desc) {
    _id,
    title,
    description,
    url
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getLatestFavoriteYouTubeVideos() {
  const query = groq`*[_type == "favoriteYouTubeVideo"] | order(_createdAt desc)[0..3] {
    _id,
    title,
    "youtubeUrl": youtubeUrl,
    "videoCategoryName": videoCategoryName
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getAllFavoriteYouTubeVideos() {
  const query = groq`*[_type == "favoriteYouTubeVideo"] | order(_createdAt desc) {
    _id,
    title,
    "youtubeUrl": youtubeUrl,
    "videoCategoryName": videoCategoryName
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getVideoCategories(): Promise<VideoCategory[]> {
  const query = groq`*[_type == "videoCategory"] {
    _id,
    title,
    description,
    "color": color.hex
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getFavoriteYoutubeVideosByCategory(
  categoryTitle: string,
): Promise<FavoriteYouTubeVideo[]> {
  const query = groq`*[_type == "favoriteYouTubeVideo" && videoCategory->title == $categoryTitle] | order(_createdAt desc) {
    _id,
    title,
    "youtubeUrl": youtubeUrl,
    "videoCategoryName": videoCategory->title
  }`;

  return createClient(clientConfig).fetch(query, { categoryTitle });
}

// Additional imports and types...

export async function getNextPostInSameCategory(
  postSlug: string,
  categorySlug: string,
) {
  const currentPostQuery = groq`
    *[_type == "post" && slug.current == $postSlug]{
      _createdAt
    }[0]
  `;

  const currentPost = await createClient(clientConfig).fetch(currentPostQuery, {
    postSlug,
  });

  if (!currentPost) {
    console.error("Current post not found");
    return null;
  }

  const nextPostQuery = groq`
    *[
      _type == "post" &&
      category->slug.current == $categorySlug &&
      slug.current != $postSlug &&
      _createdAt > $currentPostCreatedAt
    ] | order(_createdAt asc) [0] {
      _id,
      _createdAt,
      title,
      summary,
      "slug": slug.current,
      "author": author->name,
      "authorImg": author->image.asset->url,
      "mainImage": mainImage.asset->url,
      publishedAt,
      "tags": blogTags[]->{title, "color": color.hex},
      "categoryTitle": category->title
    }
  `;

  const nextPost = await createClient(clientConfig).fetch(nextPostQuery, {
    postSlug,
    categorySlug,
    currentPostCreatedAt: currentPost._createdAt,
  });

  return nextPost;
}

export async function getPreviousPostInSameCategory(
  postSlug: string,
  categorySlug: string,
) {
  const currentPostQuery = groq`
    *[_type == "post" && slug.current == $postSlug]{
      _createdAt
    }[0]
  `;

  const currentPost = await createClient(clientConfig).fetch(currentPostQuery, {
    postSlug,
  });

  if (!currentPost) {
    console.error("Current post not found");
    return null;
  }

  const previousPostQuery = groq`
    *[
      _type == "post" &&
      category->slug.current == $categorySlug &&
      slug.current != $postSlug &&
      _createdAt < $currentPostCreatedAt
    ] | order(_createdAt desc) [0] {
      _id,
      _createdAt,
      title,
      summary,
      "slug": slug.current,
      "author": author->name,
      "authorImg": author->image.asset->url,
      "mainImage": mainImage.asset->url,
      publishedAt,
      "tags": blogTags[]->{title, "color": color.hex},
      "categoryTitle": category->title
    }
  `;

  const previousPost = await createClient(clientConfig).fetch(
    previousPostQuery,
    {
      postSlug,
      categorySlug,
      currentPostCreatedAt: currentPost._createdAt,
    },
  );

  return previousPost;
}

export async function getWork(): Promise<Work> {
  const query = groq`*[_type == "work"][0] {
    _id,
    mainTitle,
    mainDescription,
    resume[]{
      _key,
      title,
      description,
      image{
        asset->{
          _id,
          url
        }
      },
      startDate,
      endDate,
      isCurrent
    },
    techStack[]{
      _key,
      language,
      image{
        asset->{
          _id,
          url
        }
      },
      proficiency
    },
  }`;

  return createClient(clientConfig).fetch(query);
}
