//@ts-ignore
import { mount } from "analytics/AnalyticsMf";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
