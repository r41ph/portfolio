import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

export function CustomError() {
  const error = useRouteError();
  const navigate = useNavigate();
  let errorMessage: string | number;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.status || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-gray-900">Oops!</h1>
      <h2 className="text-lg font-bold text-gray-900 my-4">
        {errorMessage ? errorMessage : "An error occurred. Please try again."}
      </h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
