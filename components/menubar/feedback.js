import { useAuth0 } from "@auth0/auth0-react";

const Feedback = (props) => {
  const { logout } = useAuth0();

  return (
    <div className="rounded-lg select-none bg-teal-900 border border-translucent shadow-md overflow-hidden w-96">
      <div className="sticky top-0 flex justify-between items-center border-b border-translucent px-4 py-3">
        <div className="flex gap-4 text-lg pt-1 pl-1">
          <button>OPTIONS</button>
        </div>
        {props.children}
      </div>
      <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
        <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96">
          <div className="scrollbar-thin scrollbar-thumb-translucent scrollbar-track-transparent max-h-96 p-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center gap-5 w-full mt-2">
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="btn-primary w-36 h-10 my-2"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
