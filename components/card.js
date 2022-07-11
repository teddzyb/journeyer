export default function Card(props) {
  return (
    <div
      className="bg-neutral-300 rounded-md card-shadow -ml-32 p-1 w-40 h-56 
        hover:bg-slate-400 hover:mr-20 last:hover:mr-0">
      {props.data}
    </div>
  )
}