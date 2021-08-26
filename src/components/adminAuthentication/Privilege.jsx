import React from "react";
import NotFound from "./NotFound";

export function withPrivilege(options) {
  const { role } = options;
  return function (Comp) {
    return class PrivilegeHOC extends React.Component {
      constructor(props) {
        super(props);
      }
      checkIfAuthorized = () => {
        return JSON.parse(localStorage.getItem("userinfo")) || [];
      };
      render() {
        const isAuthorized = this.checkIfAuthorized().role === role;
        console.log({ isAuthorized });
        return !isAuthorized ? <NotFound /> : <Comp {...this.props} />;
      }
    };
  };
}
