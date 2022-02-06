import { useRouter } from 'next/router';

export type OSDetailProps = {};

function OSDetail(props: OSDetailProps) {
  const router = useRouter();
  const os = router.query.os as string;

  return <div>Os: {os}</div>;
}

export default OSDetail;
