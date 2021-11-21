import React from "react";

const Login = () => {
  return (
    <div class="bg-white shadow p-12 mt-32 max-w-sm mx-auto rounded">
      <h1 class="mb-6 text-3xl text-center">Login</h1>

      <form>
        <label for="email-input" class="block mb-2">
          Email
        </label>
        <input
          id="email-input"
          type="email"
          maxlength="40"
          required
          autofocus
          placeholder="user@example.com"
          class="block border rounded p-3 mb-3 w-full"
        />
        <label for="password-input" class="block mb-2">
          Password
        </label>
        <input
          id="password-input"
          type="password"
          required
          maxlength="40"
          class="block border rounded p-3 mb-6 w-full"
        />

        <button class="block text-lg font-bold bg-red-500 w-full p-3 rounded text-white hover:bg-red-900 hover:shadow-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
