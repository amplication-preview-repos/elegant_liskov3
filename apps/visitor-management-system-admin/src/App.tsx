import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VisitorList } from "./visitor/VisitorList";
import { VisitorCreate } from "./visitor/VisitorCreate";
import { VisitorEdit } from "./visitor/VisitorEdit";
import { VisitorShow } from "./visitor/VisitorShow";
import { VisitLogList } from "./visitLog/VisitLogList";
import { VisitLogCreate } from "./visitLog/VisitLogCreate";
import { VisitLogEdit } from "./visitLog/VisitLogEdit";
import { VisitLogShow } from "./visitLog/VisitLogShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VisitorManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Visitor"
          list={VisitorList}
          edit={VisitorEdit}
          create={VisitorCreate}
          show={VisitorShow}
        />
        <Resource
          name="VisitLog"
          list={VisitLogList}
          edit={VisitLogEdit}
          create={VisitLogCreate}
          show={VisitLogShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
