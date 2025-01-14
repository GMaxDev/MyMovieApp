"use client"

import TestComponent from "./TestComponent";

export default function Like() {
  return (
    <div>
      <div>
        <button onClick={() => console.log("like")}>like</button>
      </div>
      <TestComponent />
    </div>
  );
}
