export default function StreakBar(props) {
  return (
    <div className="flex rounded-sm bg-translucent outline outline-1 outline-translucent overflow-hidden w-64 h-5">
      {
        {
          0:
            <>
              <div className="border-r border-translucent w-1/3 h-full" />
              <div className="border-r border-translucent w-1/3 h-full" />
            </>,
          1:
            <>
              <div className="bg-orange-400 border-r border-translucent w-1/3 h-full" />
              <div className="border-r border-translucent w-1/3 h-full" />
            </>,
          2:
            <>
              <div className="bg-orange-400 border-r border-translucent w-1/3 h-full" />
              <div className="bg-amber-400 border-r border-translucent w-1/3 h-full" />
            </>,
          3:
            <>
              <div className="bg-orange-400 border-r border-translucent w-1/3 h-full" />
              <div className="bg-amber-400 border-r border-translucent w-1/3 h-full" />
              <div className="bg-yellow-300 border-r border-translucent w-1/3 h-full" />
            </>,
        }[props.streak]
      }
    </div>
  )
}