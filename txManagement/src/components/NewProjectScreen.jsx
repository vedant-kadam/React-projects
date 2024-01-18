import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProjectScreen = (props) => {
  const { onNewProjectAdd, onCacelNewProject } = props;

  const modalRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);

  function saveProject() {
    let projecInfo = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };

    if (
      projecInfo.title.trim() === "" ||
      projecInfo.description.trim() === "" ||
      projecInfo.dueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onNewProjectAdd(projecInfo);
    console.log(projecInfo);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-600 mt-4">
          {" "}
          Invalid Input
        </h2>
        <p className="text-stone-500 mb-4">
          {" "}
          Please fill in valid values for all the inputs in the new project
          section
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCacelNewProject}
              className="text-stone-800 hover:text-stone-950 "
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={saveProject}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" isTextarea={false} type="text" />
          <Input ref={descriptionRef} label="Description" isTextarea={true} />
          <Input
            ref={dueDateRef}
            label="Due Date"
            isTextarea={false}
            type="date"
          />
        </div>
      </div>
    </>
  );
};

export default NewProjectScreen;
