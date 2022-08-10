import Image from 'next/future/image'
import cost from '../public/assets/card/cost-coin-1.svg'
import cardArt from '../public/assets/card/wolf.svg'
import ability from '../public/assets/card/ability-maul.svg'
import atk from '../public/assets/card/atk-v2.svg'
import def from '../public/assets/card/def-v2.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Card(props) {
  return (
    <div
      className={
        classNames(
          "rounded-md select-none",
          props.placeholder ?
            "bg-black/[.05] outline-2 outline-black/50 outline-dashed" :
            "bg-yellow-50 card-shadow",
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
                "sm": "text-sm pt-[6px] px-[6px]",
                "md": "text-md pt-[8px] px-[8px]",
                "lg": "text-lg pt-[10px] px-[10px]",
                "xl": "text-xl pt-[12px] px-[12px]",
                "2xl": "text-2xl pt-[14px] px-[14px]",
              }[props.size],
            )}>
              <Image
                src={cost}
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
                  "w-fit"
                )}
                draggable="false"
              />
              WOLF
            </div>
            <div className="flex justify-center items-center grow">
              <Image
                src={cardArt}
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
                src={ability}
                layout="responsive"
                alt=""
                className={classNames(
                  "outline outline-offset-1 outline-black aspect-square rounded-[1px] w-fit",
                  {
                    "sm": "outline-1 h-[20px]",
                    "md": "outline-1 h-[24px]",
                    "lg": "outline-1 h-[28px]",
                    "xl": "outline-2 h-[32px]",
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
                src={atk}
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
                  "w-fit"
                )}
                draggable="false"
              />
              <div className={classNames(
                "font-card2",
                {
                  "sm": "text-sm w-4 h-4 pt-[3.5px] -ml-[89px]",
                  "md": "text-md w-5 h-5 pt-[5px] -ml-[111px]",
                  "lg": "text-lg w-6 h-6 pt-[4.5px] -ml-[134px]",
                  "xl": "text-xl w-7 h-7 pt-[6px] -ml-[157px]",
                  "2xl": "text-2xl w-8 h-8 pt-[7px] -ml-[178px]",
                }[props.size],
              )}>
                2
              </div>
              <div className={classNames(
                "font-card2",
                {
                  "sm": "text-sm w-4 h-4 pt-[2.5px] -mr-[89px]",
                  "md": "text-md w-5 h-5 pt-[3px] -mr-[111px]",
                  "lg": "text-lg w-6 h-6 pt-[2px] -mr-[134px]",
                  "xl": "text-xl w-7 h-7 pt-[4px] -mr-[157px]",
                  "2xl": "text-2xl w-8 h-8 pt-[4.5px] -mr-[178px]",
                }[props.size],
              )}>
                3
              </div>
              <Image
                src={def}
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
                  "w-fit"
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