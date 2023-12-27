import React, { PropsWithChildren } from "react";
export const ListboxWrapper = ({ children }: PropsWithChildren) => (
  <div className="w-[200px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
