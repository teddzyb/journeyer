import Image from 'next/future/image'

export default function Card(props) {
  return (
    // TODO: fix aspect ratio
    <div
      className="bg-yellow-50 rounded-md card-shadow -ml-32 p-1 w-40 h-56 
        hover:bg-amber-100 hover:mr-20 last:hover:mr-0">
      <div className="flex justify-center items-center text-center background border-2 border-black/50 rounded-md w-full h-full">
        <div className="h-28 w-28">
          <Image
            src="/assets/card/wolf.png"
            height={1080}
            width={1080}
            quality={100}
            layout="responsive"
            alt="Card Art"
            draggable="false"
          />
        </div>
        {props.data}
      </div>
    </div>
  )
}