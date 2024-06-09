import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VisitorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Visitors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="capturedImage" source="capturedImage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="idNumber" source="idNumber" />
        <TextField label="idPresented" source="idPresented" />
        <TextField label="lastName" source="lastName" />
        <TextField label="location" source="location" />
        <TextField label="personToVisit" source="personToVisit" />
        <TextField label="purposeOfVisit" source="purposeOfVisit" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
