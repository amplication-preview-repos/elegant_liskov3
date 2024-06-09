import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VISITOR_TITLE_FIELD } from "./VisitorTitle";

export const VisitorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="VisitLog"
          target="visitorId"
          label="VisitLogs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="visitor"
              source="visitor.id"
              reference="Visitor"
            >
              <TextField source={VISITOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
