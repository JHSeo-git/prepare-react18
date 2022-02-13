export type ServerInfoProps = {};

function ServerInfo(props: ServerInfoProps) {
  return (
    <h3 className="text-center font-bold text-lg">
      Rendered at {new Date().toTimeString()} with Edge Middleware.
    </h3>
  );
}

export default ServerInfo;
