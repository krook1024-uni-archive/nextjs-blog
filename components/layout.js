import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "krook1024";
export const siteTitle = "Next.js learning";

const layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg\`}`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />{" "}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>
        {children}
        {!home && (
          <div clsasName={styles.backToHome}>
            <Link href="/">
              <a>&larr; Back to home</a>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default layout;
