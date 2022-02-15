import Layout from '@/components/Layout.client';
import MyClientComponent from '@/components/rsc/MyClientComponent.client';
import MyServerComponent from '@/components/rsc/MyServerComponent.server';

export type MyPageProps = {};

function MyPage(props: MyPageProps) {
  return (
    <Layout title="RSC - 2">
      <MyServerComponent />
      <MyClientComponent />
    </Layout>
  );
}

export default MyPage;
