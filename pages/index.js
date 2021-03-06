import Head from 'next/head'

import {  getPosts } from '../utils/wordpress';

import Post from "../components/Post";

export default function Home({posts}) {

  const jsxPosts = posts.map(post => {
    const featuredMedia = post['_embedded'];
    return (
      <Post post={post} featuredMedia={featuredMedia} key={post.id}/>
    )
  });



  return (
    <>
      <Head>
        <title>nb404</title>
        <meta name="description" content="nb404.cn" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container pt-5">
        <h1 className="text-center pb-5">Tech Blog</h1>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="pb-3">coolman的日常</h2>
            {jsxPosts}
          </div>
         
        </div>
      </div>
    </>
  )

}

export async function getStaticProps({ params }) {

  const posts = await getPosts();
  return {
    props: {
     posts
    },
    revalidate: 10, // In seconds
  }

}
