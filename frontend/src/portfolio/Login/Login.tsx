import { Button } from "../../components/Button/Button";
import { ButtonSize } from "../../../types/types";
import { Form, useActionData, useNavigation } from "react-router-dom";

export function Login() {
  const navigation = useNavigation();
  const error = useActionData() as string;
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="flex flex-col justify-center items-center">
      {error?.length && <p className="text-red">{error}</p>}
      <Form method="post" className="max-w-md">
        <fieldset className="flex flex-col">
          <legend className="text-xl mb-4">Log in</legend>
          <label htmlFor="username" className="my-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="border p-3"
            aria-label="username"
          />
          <label htmlFor="password" className="my-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border p-3"
            aria-label="password"
          />
          <Button
            size={ButtonSize.MD}
            type="submit"
            className="mt-6"
            isDisabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Log in"}
          </Button>
        </fieldset>
      </Form>
    </div>
  );
}
