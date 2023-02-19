import Link from 'next/link';

import Layout from 'layout/Layout';

export default function NotFound() {
  return (
    <Layout title="404">
      <div>
        <h1>404 – Unavailable For Legal Reasons</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </Layout>
  );
}
