export type MyServerComponentProps = {};

function MyServerComponent(props: MyServerComponentProps) {
  // server handling like db connection, api call, etc.

  return <div>MyServerComponent render at server-side</div>;
}

export default MyServerComponent;
