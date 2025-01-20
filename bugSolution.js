```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
    // Correct dependency array: includes `count`
  }, [count]);

  return <div>Count: {count}</div>;
}
```