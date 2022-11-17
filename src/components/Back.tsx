
export default function Back({ onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className="px-6 py-1 absolute bottom-2 left-2 text-center bg-white rounded-full shadow-2xl opacity-90 pointer-events-auto"
    >
      返回
    </div>
  );
}
