import Head from 'next/head'
import { getStoryblokApi } from '@storyblok/react'
import Page from '../components/Page'
import App from './landing-page'

export const getStaticProps = async () => {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home'

  // load the draft version
  let sbParams = {
    version: 'published', // or 'published'
  }

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  }
}

export default function Home({ story }) {
  return (
    <>
      <Head>
        <title>My Island.</title>
      </Head>
      <main>
        <App />
      </main>
    </>
  )
}
