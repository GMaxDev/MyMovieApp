export default function TestComponent() {
  fetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <p>Test Component</p>
    </div>
  );
}
