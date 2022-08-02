import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function GameOption(props) {
  return (
    <div className="flex items-center w-full">
      <div className="mr-auto">{props.option}</div>
      {
        {
          "number":
            <input
              type="number"
              value={props.currentMode[props.option].value}
              className="text-center border-none shadow-sm rounded-sm bg-translucent placeholder-white/50 w-16 h-7 pb-[6px]
                            focus:border-transparent focus:ring-white/[.15] focus:ring-inset"
            />,
          "boolean":
            <Switch
              checked={props.currentMode[props.option].value}
              onChange={() => props.setCurrentMode({ [props.option]: { value: !props.currentMode[props.option].value } })}
              className={classNames(
                "relative inline-flex h-7 w-14 mx-1 items-center rounded-full transition-colors",
                props.currentMode[props.option].value ? "bg-teal-500" : "bg-translucent"
              )}
            >
              <span className={classNames(
                "inline-block h-5 w-5 transform rounded-full bg-white transition-transform",
                props.currentMode[props.option].value ? "translate-x-8" : "translate-x-1"
              )}
              />
            </Switch>,
        }[typeof props.currentMode[props.option].value]
      }
    </div>
  )
}