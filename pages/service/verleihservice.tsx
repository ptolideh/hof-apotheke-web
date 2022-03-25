import { getEntries } from '../../store';

export async function getStaticProps(context: any) {
  try {
    const rentalServiceData = await getEntries('rentalServicePage');
    console.log(rentalServiceData);
    const content = rentalServiceData
      ? rentalServiceData.items[0].fields
      : null;
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

export { RentalPage as default } from '../../components/page/RentalPage';
