import Layout from "../components/Layout";

import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import { PageBlockRenderer } from "../blocks/PageBlockRenderer";
import { SBNavLink, NavLinks } from "../types/types";

export default function Page({ story: initialStory }) {
  const story = useStoryblokState<Record<string, any>>(initialStory);

  const navLinks: NavLinks = story?.content.navLinks.map(
    (navLink: SBNavLink) => ({
      key: navLink._uid,
      label: navLink.label,
      href: navLink.link.url || "#" + navLink.link.anchor,
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

  const version = preview ? "draft" : ("published" as "draft" | "published");

  let sbParams = {
    version,
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
      story: data?.story,
      key: data?.story?.id,
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
