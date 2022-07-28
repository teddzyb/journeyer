import Image from 'next/future/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Card(props) {
  return (
    <div
      className={
        classNames(
          "bg-yellow-50 rounded-md card-shadow",
          props.className,
          {
            "sm": "w-[8rem] h-[12rem] p-[3px]",
            "md": "w-[10rem] h-[15rem] p-[4px]",
            "lg": "w-[12rem] h-[18rem] p-[5px]",
            "xl": "w-[14rem] h-[21rem] p-[6px]",
            "2xl": "w-[16rem] h-[24rem] p-[7px]",
          }[props.size],
          props.hover && "hover:bg-amber-100",
        )
      }>
      <div className="flex justify-center items-center text-center card-background 
        border-2 border-black/50 rounded-md text-black w-full h-full">
        {
          props.children ??
          <div className="flex flex-col w-full h-full">
            <div className={classNames(
              {
                "sm": "text-xs pt-[6px] px-[6px]",
                "md": "text-sm pt-[8px] px-[8px]",
                "lg": "text-md pt-[10px] px-[10px]",
                "xl": "text-lg pt-[12px] px-[12px]",
                "2xl": "text-xl pt-[14px] px-[14px]",
              }[props.size],
            )}>
              <Image
                src="/assets/card/cost-coin-1.svg"
                layout="responsive"
                alt=""
                className={classNames(
                  {
                    "sm": "h-[8px]",
                    "md": "h-[10px]",
                    "lg": "h-[12px]",
                    "xl": "h-[14px]",
                    "2xl": "h-[16px]",
                  }[props.size],
                )}
                draggable="false"
              />
              WOLF
            </div>
            <div className="flex justify-center items-center grow">
              <Image
                src="/assets/card/wolf.svg"
                layout="responsive"
                alt=""
                className={classNames(
                  {
                    "sm": "w-16",
                    "md": "w-20",
                    "lg": "w-24",
                    "xl": "w-28",
                    "2xl": "w-32",
                  }[props.size],
                )}
                draggable="false"
              />
            </div>
            <div className={classNames(
              "flex justify-center -mb-3",
              {
                "sm": "gap-[6px]",
                "md": "gap-[8px]",
                "lg": "gap-[10px]",
                "xl": "gap-[12px]",
                "2xl": "gap-[14px]",
              }[props.size],
            )}>
              <Image
                src="/assets/card/ability-maul.svg"
                layout="responsive"
                alt=""
                className={classNames(
                  "outline outline-1 outline-offset-1 outline-black aspect-square rounded-[1px]",
                  {
                    "sm": "h-[20px]",
                    "md": "h-[24px]",
                    "lg": "h-[28px]",
                    "xl": "h-[32px]",
                    "2xl": "outline-2 h-[36px]",
                  }[props.size],
                )}
                draggable="false"
              /><Image
                src="/assets/card/ability-maul.svg"
                layout="responsive"
                alt=""
                className={classNames(
                  "outline outline-1 outline-offset-1 outline-black aspect-square rounded-[1px]",
                  {
                    "sm": "h-[20px]",
                    "md": "h-[24px]",
                    "lg": "h-[28px]",
                    "xl": "h-[32px]",
                    "2xl": "outline-2 h-[36px]",
                  }[props.size],
                )}
                draggable="false"
              />
            </div>
            <div className={classNames(
              "flex justify-between",
              {
                "sm": "pb-[6px] px-[6px]",
                "md": "pb-[8px] px-[8px]",
                "lg": "pb-[10px] px-[10px]",
                "xl": "pb-[12px] px-[12px]",
                "2xl": "pb-[14px] px-[14px]",
              }[props.size],
            )}>
              <Image
                src="/assets/card/atk.svg"
                layout="responsive"
                alt=""
                className={classNames(
                  {
                    "sm": "h-[24px]",
                    "md": "h-[28px]",
                    "lg": "h-[32px]",
                    "xl": "h-[36px]",
                    "2xl": "h-[40px]",
                  }[props.size],
                )}
                draggable="false"
              />
              <Image
                src="/assets/card/def.svg"
                layout="responsive"
                alt=""
                className={classNames(
                  {
                    "sm": "h-[24px]",
                    "md": "h-[28px]",
                    "lg": "h-[32px]",
                    "xl": "h-[36px]",
                    "2xl": "h-[40px]",
                  }[props.size],
                )}
                draggable="false"
              />
            </div>
          </div>
        }
      </div>
    </div>
  )
}