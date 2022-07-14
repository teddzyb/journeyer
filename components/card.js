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
          props.size === "sm" && "w-[8rem] h-[12rem]",
          props.size === "md" && "w-[10rem] h-[15rem]",
          props.size === "lg" && "w-[12rem] h-[18rem]"
        )
      }>
      <div className="flex justify-center items-center text-center background 
        border-2 border-black/50 rounded-md text-black w-full h-full">
        {props.children ? props.children :
          <div className="p-5">
            <Image
              src="/assets/card/soulless.png"
              height={1080}
              width={1080}
              quality={100}
              layout="responsive"
              alt="Card Art"
              draggable="false"
            />
          </div>
        }
      </div>
    </div>
  )
}