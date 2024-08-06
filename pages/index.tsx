import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.auth.isUserLoggedIn
  );
  const userInfo = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <h1>{userInfo?.fullName}</h1>
    </div>
  );
}
