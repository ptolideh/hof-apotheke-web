import { getEntries } from '../../store';

export async function getStaticProps(context: any) {
  try {
    const preOrderPageData = await getEntries('deliveryServicePage');
    console.log(preOrderPageData);
    const content = preOrderPageData ? preOrderPageData.items[0].fields : null;
    return {
      props: {
        content
      },
      revalidate: 1
    };
  } catch (e) {
    console.log(e);
  }
}

export { CustomerCardPage as default } from '../../components/page/CustomerCardPage';
