import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  //dynamically create array of DayListItem components using .map
  const days = props.value.map(day => {
    return (
      <DayListItem
        key={day.id} 
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    )
  });
  return days;
};