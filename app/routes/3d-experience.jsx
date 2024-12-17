import React, { useEffect, Suspense } from "react";
import { useNavigate } from "@remix-run/react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/main");
    }, 44000);
  }, []);

  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading...
          </div>
        }
      >
        <Spline scene="https://prod.spline.design/Oj6YiffX43vaT8ub/scene.splinecode" />
      </Suspense>
    </div>
  );
}
