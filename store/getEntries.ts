import { client } from './client';

const getEntries = async (content_type: string) => {
  try {
    return await client.getEntries({ content_type });
  } catch (err) {
    console.error(
      `Something wrong with "getEntries" of "content_type": "${content_type}"`
    );
    console.log(err);
    return null;
  }
};

export { getEntries };
