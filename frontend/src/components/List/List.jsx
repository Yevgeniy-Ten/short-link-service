import React from "react";
import {Pane, Paragraph, majorScale} from "evergreen-ui";
import LItem from "./LItem";

const List = ({data}) => {
    return (
        <Pane marginY={majorScale(2)}>
            {
                data.length ? data.map(link => (<LItem key={link.id}
                                                       shortLink={link.short}
                                                       link={link.main}/>)) :
                    <Paragraph size={400}>
                        No links items
                    </Paragraph>
            }
        </Pane>
    );
};

export default List;
