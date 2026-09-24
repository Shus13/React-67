import type { BaseSyntheticEvent, ReactNode } from "react";
import { useNavigate } from "react-router";

export const GoBackButton = ({children}: Readonly<{children: ReactNode}>) => {
  const navigate = useNavigate();

  const redirectBack = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    navigate("/cms/users");
  };

  return (
    <>
      <a
        href="/cms/user/create"
        onClick={redirectBack}
        className="bg-teal-800 w-50 p-2 flex items-center justify-center text-white rounded-full"
      >
        {children}
      </a>
    </>
  );
};
