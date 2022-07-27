import Image from 'next/future/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Card(props) {
  return (
    <div
      className={
        classNames(
          "bg-yellow-50 rounded-md card-shadow p-1",
          props.className,
          {
            "sm": "w-[8rem] h-[12rem]",
            "md": "w-[10rem] h-[15rem]",
            "lg": "w-[12rem] h-[18rem]",
            "xl": "w-[14rem] h-[21rem]",
            "2xl": "w-[16rem] h-[24rem]",
          }[props.size],
          props.hover && "hover:bg-amber-100",
        )
      }>
      <div className="flex justify-center items-center text-center card-background 
        border-2 border-black/50 rounded-md text-black w-full h-full">
        {props.children ??
          <div className="select-none p-5">
            <Image
              src="/assets/card/soullesscat.svg"
              height={64}
              width={64}
              quality={100}
              alt=""
              draggable="false"
            />
          </div>}
      </div>
    </div>
  )
}