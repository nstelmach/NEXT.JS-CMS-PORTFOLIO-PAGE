import Layout from "../components/Layout";

import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import { PageBlockRenderer } from "../blocks/PageBlockRenderer";
import { NavLink, NavLinks } from "../types/types";

export default function Page({ story: initialStory }) {
  const story = useStoryblokState(initialStory);

  const navLinks: NavLinks = story?.content.navLinks.map(
    (navLink: NavLink) => ({
      key: navLink._uid,
      label: navLink.label,
      href:
        navLink.label === "resume"
          ? navLink.link.url
          : "#" + navLink.link.anchor,
    })
  );

  return (
    <Layout navLinks={navLinks}>
      {(story?.content?.body || []).map((props) => {
        return <PageBlockRenderer content={props} key={props._uid} />;
      })}
    </Layout>
  );
}

export async function getStaticProps({ params, preview }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: preview ? "draft" : "published",
  };

  let data = null;

  try {
    const storyblokApi = getStoryblokApi();
    let res = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    data = res.data;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: true,
  };
}
