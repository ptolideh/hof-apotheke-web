import { getEntries } from '../store';

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

export { AboutUsPage as default } from '../components/page/AboutUsPage';
