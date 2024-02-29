import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();
  function cancelHandler() {
    navigate("..");
  }
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className={classes.form} method={method}>
      {actionData && actionData.errors && (
        <ul>
          {Object.values(actionData.errors).map((data) => {
            return <li key={data.err}>{data.err}</li>;
          })}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export const addEventAction = async ({ request, params }) => {
  const meth = request.method;
  let url = "http://localhost:8080/events";
  if (meth === "PATCH") {
    const eventId = params.id;
    url += "/";
    url += eventId;
  }
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  };
  const res = await fetch(url, {
    method: meth,
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status === 422) {
    return res;
  }

  if (!res.ok) {
    throw json(
      {
        message: "Could not save the event",
      },
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
};
