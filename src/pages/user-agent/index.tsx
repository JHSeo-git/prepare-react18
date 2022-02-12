import { useRouter } from 'next/router';

export type UserAgentPageProps = {};

function UserAgentPage(props: UserAgentPageProps) {
  const { query } = useRouter();
  const os = query.os;

  if (os) {
    return <div>OS: {typeof os === 'string' ? os : os.join(' ')}</div>;
  }

  return <div>OS in Headers. Check yourself.</div>;
}

export default UserAgentPage;
