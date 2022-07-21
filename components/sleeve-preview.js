import Card from './card'

export default function SleevePreview(props) {
  return (
    <div className="grow scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent">
      <div className="flex justify-center items-center h-full">
        <div className="-mr-20 -mb-2 -rotate-6">
          <Card size="lg">{props.selectedItem}</Card>
        </div>
        <div className="z-20">
          <Card size="xl">{props.selectedItem}</Card>
        </div>
        <div className="-ml-20 -mb-2 rotate-6">
          <Card size="lg">{props.selectedItem}</Card>
        </div>
      </div>
    </div>
  )
}