import { useRouteError } from "react-router-dom";

export function CustomError({ message }: { message: string }) {
  const error = useRouteError();
  console.log("🚀 ~ file: CustomError.tsx:5 ~ CustomError ~ error:", error);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-gray-900">{message}</h1>
    </div>
  );
}
