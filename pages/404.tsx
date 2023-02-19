import Link from 'next/link';

import Layout from 'layout/Layout';

export default function NotFound() {
  return (
    <Layout title="404">
      <div>
        <h1>404 – Unavailable For Legal Reasons</h1>
        <p>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that URL?
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </Layout>
  );
}
