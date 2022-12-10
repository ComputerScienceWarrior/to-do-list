import React from "react";
import { items } from "../constants";
import ListItem from "./ListItem";

const List = (props) => {
    return(
        <div>
            {
                Object.values(items).map((item, key) => {
                    return(
                        <ListItem 
                            key={key}
                            title={item.title}
                            startDate={item.startDate}
                            dueDate={item.dueDate}
                            priorityLevel={item.priorityLevel}
                        />
                    )
                })
            }
        </div>
    )
}

export default List