import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VisitLogTitle } from "../visitLog/VisitLogTitle";

export const VisitorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="idNumber" source="idNumber" />
        <TextInput label="idPresented" source="idPresented" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="location" source="location" />
        <TextInput label="personToVisit" source="personToVisit" />
        <TextInput label="purposeOfVisit" source="purposeOfVisit" />
        <ReferenceArrayInput
          source="visitLogs"
          reference="VisitLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VisitLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
