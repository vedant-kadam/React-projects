import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  console.log(mode);
  if (mode !== "login" && mode !== "signup") {
    throw json(
      {
        message: "invalid mode",
      },
      {
        status: 422,
      }
    );
  }
  console.log(mode, 1);

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const url = "http://localhost:8080/" + mode;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  console.log(mode, 2);

  if (res.status === 422 || res.status === 401) {
    return res;
  }
  console.log(mode, 3);

  if (!res.ok) {
    throw json({ message: "could not authenticte the user" }, { status: 500 });
  }
  console.log(mode, 4);
  const resData = await res.json();
  const token = resData.token;
  localStorage.setItem("token", token);
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);
  localStorage.setItem("exp", expirationDate.toISOString());

  return redirect("/");
}
