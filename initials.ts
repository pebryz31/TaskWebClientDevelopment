export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('');
}

// Example
console.log(getInitials('John Doe')); // Output: JD
