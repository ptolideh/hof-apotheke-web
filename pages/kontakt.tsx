import { getEntries } from '../store';

export async function getStaticProps(context: any) {
  try {
    const contactUsContent = await getEntries('contactUsPage');
    const storeInfoData = await getEntries('storeInformation');
    return {
      props: {
        content: {
          main: contactUsContent ? contactUsContent.items[0].fields : null,
          storeInfo: storeInfoData ? storeInfoData.items[0].fields : null,
        },
      },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
  }
}

export { ContactUsPage as default } from '../components/page/ContactUsPage';
