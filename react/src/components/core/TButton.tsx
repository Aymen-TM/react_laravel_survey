import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";


interface Props{
    color?:String|"indigo",
    to:string | undefined,
    circle?:Boolean,
    href?: string | undefined,
    link?:Boolean,
    target?:React.HTMLAttributeAnchorTarget | undefined |"_blank",
    onClick ?:MouseEventHandler<HTMLButtonElement> | undefined,
    children:any
}

export default function TButton(props:Props) {
  let classes = [
    "flex",
    "items-center",
    "whitespace-nowrap",
    "text-sm",
    "border",
    "border-2",
    "border-transparent",
  ];

  if (props.link) {
    classes = [...classes, "transition-colors"];

    switch (props.color) {
      case "indigo":
        classes = [...classes, "text-indigo-500", "focus:border-indigo-500"];
        break;
      case "red":
        classes = [...classes, "text-red-500", "focus:border-red-500"];
    }
  } else {
    classes = [...classes, "text-white", "focus:ring-2", "focus:ring-offset-2"];

    switch (props.color) {
      case "indigo":
        classes = [
          ...classes,
          "bg-indigo-600",
          "hover:bg-indigo-700",
          "focus:ring-indigo-500",
        ];
        break;
      case "red":
        classes = [
          ...classes,
          "bg-red-600",
          "hover:bg-red-700",
          "focus:ring-red-500",
        ];
        break;
      case "green":
        classes = [
          ...classes,
          "bg-emerald-500",
          "hover:bg-emerald-600",
          "focus:ring-emerald-400",
        ];
        break;
    }
  }

  if (props.circle) {
    classes = [
      ...classes,
      "h-8",
      "w-8",
      "items-center",
      "justify-center",
      "rounded-full",
      "text-sm",
    ];
  } else {
    classes = [...classes, "p-0", "py-2", "px-4", "rounded-md"];
  }

  return (
    <>
      {props.href && (
        <a href={props.href} className={classes.join(" ")} target={props.target}>
          {props.children}
        </a>
      )}
      {props.to && (
        <Link to={props.to} className={classes.join(" ")}>
          {props.children}
        </Link>
      )}
      {!props.to && !props.href && (
        <button onClick={props.onClick} className={classes.join(" ")}>{props.children}</button>
      )}
    </>
  );
}