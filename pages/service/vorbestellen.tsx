import { getEntries } from '../../store';

export async function getStaticProps(context: any) {
  try {
    const preOrderPageData = await getEntries('preorderPage');
    console.log(preOrderPageData);
    const content = preOrderPageData ? preOrderPageData.items[0].fields : null;
    return {
      props: {
        content
      }
    };
  } catch (e) {
    console.log(e);
  }
}

export { PreOrderPage as default } from '../../components/page/PreOrderPage';
