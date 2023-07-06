export default function Button({ text }: { text: string }) {
  return (
    <button className="py-4 px-12 bg-yellow text-black font-bold">
      {text}
    </button>
  );
}
