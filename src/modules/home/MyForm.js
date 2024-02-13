import React from "react";
import FormValidator from "./FormValidator";

const LoginForm = () => (
  <FormValidator
    render={({ formData, errors, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md">
        <div className="mb-4">
          <label className="mb-2 block font-medium">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username || ""}
            onChange={handleChange}
            className="w-full rounded-md border bg-grey-10 px-3 py-2"
          />
          {errors.username && (
            <span className="text-red-10">{errors.username}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            className="w-full rounded-md border bg-grey-10 px-3 py-2"
          />
          {errors.password && (
            <span className="text-red-10">{errors.password}</span>
          )}
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary-10 px-4 py-2 text-black-10"
        >
          Submit
        </button>
      </form>
    )}
  />
);

export default LoginForm;
