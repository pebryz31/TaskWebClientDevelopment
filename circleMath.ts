const PI = Math.PI;

export function circleMetrics(radius: number) {
  const diameter = 2 * radius;
  const circumference = 2 * PI * radius;
  const area = PI * radius * radius;

  return {
    diameter,
    circumference: parseFloat(circumference.toFixed(4)),
    area: parseFloat(area.toFixed(3))
  };
}

// Example
console.log(circleMetrics(5));
