import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { VisitorTitle } from "../visitor/VisitorTitle";

export const VisitLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="visitor.id" reference="Visitor" label="visitor">
          <SelectInput optionText={VisitorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
