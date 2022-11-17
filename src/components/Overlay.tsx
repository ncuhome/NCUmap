export default function Overlay({ children }) {
  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none ">
      {children}
    </div>
  );
}
