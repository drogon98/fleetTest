import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import "./style.css";
import { ImPlus } from "react-icons/im";
import MainHeader from "../MainHeader";

function NewList(props) {
  const [task, setTask] = useState("");
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (task.length === 0) {
      return;
    }
    if (e.keyCode === "Enter") {
      // save list
      const t = {
        title: task,
        checked: false,
        starred: false,
        color: "white",
        dueDate: null,
      };
      const list = {
        listName: `My to-do list ${processDate()}`,
        current: "normal",
        currentId: null,
        tasks: [t],
      };

      // persist list id
      // redirect to dashboard
    }
  };

  const processDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${month}1/${day}/${year}`;
  };

  console.log(processDate());

  return (
    <div className="new-list">
      <div className="create-list-top-header">
        <Link to="/account" className="link mr-3">
          <span className="mx-1">
            <FaUser />
          </span>
          mike@gmail.com
        </Link>

        <Link to="/saved-lists" className="link mr-3">
          <span className="mr-1">
            <AiOutlineBars />
          </span>
          Manage Lists
        </Link>
        <Link to="/new-list" className="link mr-3">
          <span className="mr-1">
            <ImPlus />
          </span>
          New List
        </Link>
      </div>
      <MainHeader />
      <div className="create-list-secondary-header">
        <div className="container ">
          <h2>Create your to-do list below</h2>
        </div>
      </div>
      <div className="container">
        <input
          className="mt-3 new-list-input"
          placeholder="Type here e.g. Buy Bacon"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default NewList;
