import * as Tooltip from "@radix-ui/react-tooltip";
import { Switch } from "@headlessui/react";

const GameOption = (props) => {
  return (
    <Tooltip.Provider delayDuration="500">
      <Tooltip.Root>
        <Tooltip.Trigger asChild className="cursor-default">
          <div className="flex items-center w-full">
            <div className="mr-auto">{props.option}</div>
            {
              {
                number: (
                  <input
                    type="number"
                    value={props.currentMode[props.option].value}
                    onChange={(e) => {
                      props.setCurrentMode({
                        [props.option]: {
                          value: parseInt(e.currentTarget.value),
                          description: props.currentMode[props.option].description,
                        },
                      });
                      props.setCurrentMode({ name: "custom" });
                    }}
                    className="text-center border-none shadow-sm rounded-sm bg-translucent placeholder-white/50 w-16 h-7 pb-[6px]
                      focus:border-transparent focus:ring-white/[.15] focus:ring-inset"
                  />
                ),
                boolean: (
                  <Switch
                    checked={props.currentMode[props.option].value}
                    onChange={() => {
                      props.setCurrentMode({
                        [props.option]: {
                          value: !props.currentMode[props.option].value,
                          description: props.currentMode[props.option].description,
                        },
                      });
                      props.setCurrentMode({ name: "custom" });
                    }}
                    className={`inline-flex items-center shadow-sm rounded-full h-7 w-14 mx-1 transition-colors ${
                      props.currentMode[props.option].value ? "bg-teal-500" : "bg-translucent"
                    }`}
                  >
                    <span
                      className={`shadow-sm rounded-full bg-white h-5 w-5 transform transition-transform ${
                        props.currentMode[props.option].value ? "translate-x-8" : "translate-x-1"
                      }`}
                    />
                  </Switch>
                ),
              }[typeof props.currentMode[props.option].value]
            }
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            className="bg-[#0c4441] rounded-md max-w-xs py-1 pt-[6px] px-3"
          >
            {props.currentMode[props.option].description}
            <Tooltip.Arrow className="fill-[#0c4441] mb-2" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default GameOption;
