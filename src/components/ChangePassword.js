import React from "react";

function ChangePassword() {
  return (
    <>
    <div className="container w-50">
      <h3 className="text-center mt-5">Change Password</h3>
      <form className="bg-light mt-3 border rounded">
        
        <div class="m-4">
          <label for="exampleInputPassword1" class="form-label mt-4">
          Old  Password
          </label>
          <input
            type="password"
            class="form-control "
            id="exampleInputPassword1"
          />
        </div>
        <div class="m-4">
          <label for="exampleInputPassword1" class="form-label">
          New  Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="m-4">
          <label for="exampleInputPassword1" class="form-label">
          Repeat  Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
          
        <button type="submit" class="btn btn-primary m-4">
          Update
        </button>
      </form>
      </div>
    </>
  );
}

export default ChangePassword;