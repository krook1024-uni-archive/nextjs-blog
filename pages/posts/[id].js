import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXL}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary blog data using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
