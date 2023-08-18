interface IProps {
  onClick: () => void;
}

export default function Overlay({ onClick }: IProps) {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: "0",
        top: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}
