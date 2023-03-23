import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  //dynamically create array of DayListItem components using .map
  const days = props.days.map( day => {
    return (
      <DayListItem 
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    )
  });
  return days;
};