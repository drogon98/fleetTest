import React from "react";
import { connect } from "react-redux";
import "./style.css";

function Sidebar(props) {
  const { lists, persistedList } = props;
  return (
    <div className="sidebar">
      <ul>
        {lists.map((list, idx) => {
          return <li key={idx}>{list.listName}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.listReducer.lists,
    persistedList: state.listReducer.persistedList,
  };
};

export default connect(mapStateToProps)(Sidebar);
