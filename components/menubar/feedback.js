const Feedback = (props) => {
  return (
    <div className="rounded-lg select-none bg-teal-900 border border-translucent shadow-md overflow-hidden w-96">
      <div className="sticky top-0 flex justify-between items-center border-b border-translucent px-4 py-3">
        <div className="flex gap-4 text-lg pt-1 pl-1">
          <button>FEEDBACK</button>
        </div>
        {props.children}
      </div>
      <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
        <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
          {/* <div className="flex justify-center items-center h-24">
              Nothing here yet...
            </div> */}
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96 p-4">
            <div className="flex flex-col gap-3">
              <div className="group flex flex-col text-sm text-justify rounded-lg bg-translucent p-3 pb-2.5">
                Found any bugs or have any suggestions? Your feedback is extremely valuable to us,
                so please drop them here!
              </div>
              <form className="flex flex-col items-center gap-5 w-full mt-2">
                <div className="w-full">
                  <label htmlFor="subject">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block shadow-sm rounded-sm bg-translucent/10 border-translucent 
                    focus:bg-translucent focus:border-transparent w-full focus:ring-white/[.15]"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    required
                    className="block shadow-sm rounded-sm bg-translucent/10 border-translucent 
                    focus:bg-translucent focus:border-transparent w-full focus:ring-white/[.15]
                    scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent"
                  />
                </div>
                <button className="btn-primary w-36 h-10 my-2">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
