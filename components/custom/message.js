function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Message(props) {
  return (
    <div
      className={classNames(
        {
          create: "text-blue-300",
          join: "text-green-300",
          leave: "text-red-300",
        }[props.type],
      )}
    >
      {props.sender !== "system" && <span className="text-teal-300">{props.sender}: </span>}
      {props.children}
    </div>
  );
}
