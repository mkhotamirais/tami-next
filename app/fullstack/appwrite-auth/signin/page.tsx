"use client";

import React, { useEffect, useState } from "react";
import { ID, Models } from "appwrite";
import { account } from "@/lib/appwrite_auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function getUser() {
      setUser(await account.get());
      setLoad(false);
    }
    getUser();
  }, []);

  const handleLogin = async () => {
    try {
      await account.createEmailPasswordSession(email, password);
      setUser(await account.get());
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      await account.create(ID.unique(), email, password);
      await handleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  if (load) {
    return <div>loading...</div>;
  }

  if (user) {
    return (
      <div>
        kamu sudah login{" "}
        <button
          type="button"
          aria-label="logout"
          onClick={handleLogout}
          className="border rounded p-2 bg-black text-white"
        >
          logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>login</h1>
      <form>
        <input
          type="email"
          value={email}
          className="border rounded p-2"
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border rounded p-2"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin} aria-label="login" className="border p-2 bg-black text-white">
          Login
        </button>
        <button type="button" onClick={handleRegister} aria-label="login" className="border p-2 bg-black text-white">
          register
        </button>
      </form>
    </div>
  );
}
