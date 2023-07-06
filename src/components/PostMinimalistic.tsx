type Props = {
  title: string;
  author: string;
  date: string;
};

export default function PostMinimalistic({ title, author, date }: Props) {
  return (
    <div className="p-8 hover:bg-light_yellow">
      <p className=" font-medium text-dark_grey text-sm mb-2 ">
        By <span className=" text-purlpe">{author}</span> | {date}
      </p>
      <h4 className="text-black font-bold text-2xl">{title}</h4>
    </div>
  );
}
