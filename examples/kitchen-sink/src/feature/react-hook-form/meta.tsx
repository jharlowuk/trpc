import { ExampleProps } from 'utils/ExamplePage';

export const meta: ExampleProps = {
  title: 'React Hook Form',
  href: '/react-hook-form',
  summary: (
    <>
      <p>
        Using tRPC &amp; <code>react-hook-form</code>
      </p>
    </>
  ),
  detail: (
    <>
      <p>
        Using tRPC &amp;{' '}
        <a
          href="https://react-hook-form.com/"
          target="_blank"
          rel="noreferrer"
          className="font-mono"
        >
          react-hook-form
        </a>
      </p>
    </>
  ),
  files: [
    { title: 'Router', path: 'feature/react-hook-form/router.ts' },
    { title: 'Page', path: 'feature/react-hook-form/index.tsx' },
  ],
};
