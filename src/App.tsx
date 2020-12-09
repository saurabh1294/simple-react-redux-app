/*import React from "react";

import TableEditablePage from "./TableEditable";

export default function App() {


  return <TableEditablePage />;
}*/


import React from "react";
import set from "lodash/fp/set";
import { Field } from "redux-form";
import Table from "react-table";
import * as BS from "react-bootstrap";
import initialData from "./dataFactory";
import FormProvider from "./FormProvider";
import { avatarColumnProps } from "./AvatarCell";
import ActionsCell from "./ActionsCell";
import HighlightCell from "./HighlightCell";
import GridFilters from "./GridFilters";

export default class App extends React.Component {
  state = { data: initialData, editing: null };

  editableComponent = ({ input, editing, value, ...rest }: any) => {
    const Component = editing ? BS.FormControl : BS.FormControl.Static;
    const children =
      (!editing && <HighlightCell value={value} {...rest} />) || undefined;
    return <Component {...input} {...rest} children={children} />;
  };

  editableColumnProps = {
    ...GridFilters,
    Cell: (props: any) => {
      const editing = this.state.editing === props.original;
      const fieldProps = {
        component: this.editableComponent,
        editing,
        props
      };

      return <Field name={props.column.id} {...fieldProps} />;
    }
  };

  getActionProps = (gridState: any, rowProps: any) =>
    (rowProps && {
      mode: this.state.editing === rowProps.original ? "edit" : "view",
      actions: {
        onEdit: () => this.setState({ editing: rowProps.original }),
        onCancel: () => this.setState({ editing: null })
      }
    }) ||
    {};

  columns = [
    {
      Header: "",
      maxWidth: 90,
      filterable: false,
      getProps: this.getActionProps,
      Cell: ActionsCell
    },
    { Header: "", accessor: "avatar", ...avatarColumnProps },
    { Header: "Name", accessor: "name", ...this.editableColumnProps },
    { Header: "Email", accessor: "email", ...this.editableColumnProps },
    { Header: "Phone", accessor: "phone", ...this.editableColumnProps }
  ];

  handleSubmit = (values: any) => {
    this.setState((state: any) => {
      const index = this.state.data.indexOf(this.state.editing);
      return {
        data: set(`[${index}]`, values, state.data)
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>react-table inline editing</h1>
        {/* <BS.Panel bsStyle="primary"> */}
        {/* <BS.Panel.Heading> */}
        {/* <BS.Clearfix> */}
        <BS.Button className="pull-right">Add New</BS.Button>
        {/* </BS.Clearfix> */}
        {/* </BS.Panel.Heading> */}

        <FormProvider
          form="inline"
          onSubmit={this.handleSubmit}
          onSubmitSuccess={() => this.setState({ editing: null })}
          initialValues={this.state.editing}
          enableReinitialize
        >
          {formProps => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <Table
                  columns={this.columns}
                  data={this.state.data}
                  defaultPageSize={5}
                />
              </form>
            );
          }}
        </FormProvider>
        {/* </BS.Panel> */}
      </React.Fragment>
    );
  }
}

