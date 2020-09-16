import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ users, loading, error, fetchUsers }) {
  useEffect(()=>{
    fetchUsers()
  },[fetchUsers])
  return (
    <div>
      <h2>users</h2>
      <div>
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>error: {error}</div>
        ) : (
          users && users.map((user) => <div key={user.id}>{user.name}</div>)
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { users, loading, error } = state.user;
  return {
    users,
    loading,
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
