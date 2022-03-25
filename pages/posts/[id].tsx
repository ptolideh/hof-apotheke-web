import { getEntries } from '../../store';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
  // try {
  //   const postsData = await getEntries('posts');
  //   return {
  //     // const promoData = await getEntries('promos');
  //     posts: postsData ? postsData.items[0]?.fields : null,
  //     // promos: promoData ? promoData.items[0]?.fields : null,
  //   };
  // } catch (e) {
  //   console.log(e);
  // }
}

export async function getStaticProps(context: any) {
  try {
    const aboutUsContent = await getEntries('aboutUsPage');
    console.log(aboutUsContent);
    const content = aboutUsContent ? aboutUsContent.items[0].fields : null;
    return {
      props: {
        content,
      },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
  }
}

export { PostPage as default } from '../../components/page/postPage';
