import React from "react";
import { Button } from "react-bootstrap";

const editModes = {
    view: (props: any) => (
        <Button bsSize="xs" bsStyle="link" onClick={props.onEdit}>
            Edit
        </Button>
    ),
    edit: (props: any) => (
        <React.Fragment>
            <Button type="submit" bsStyle="link" bsSize="xs">
                Save
      </Button>

            <Button bsStyle="link" bsSize="xs" onClick={props.onCancel}>
                Cancel
      </Button>
        </React.Fragment>
    )
};

export default function ActionsCell(props: any) {
    const {
        mode,
        actions: { onEdit, onCancel }
    } = props.columnProps.rest as any;
    // const Buttons = editModes[mode];
    // return <Buttons onEdit={() => onEdit(props.index)} onCancel={onCancel} />;
}
