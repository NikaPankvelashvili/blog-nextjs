import Button from "./Button";

export default function JoinNow() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-32">
      <h2 className=" w-1/3 font-bold text-4xl text-black mb-4 text-center">
        Join our team to be a part of our story
      </h2>
      <p className="text-medium_grey w-[30%] text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button text="Join Now" />
    </div>
  );
}
