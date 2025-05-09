export function isPalindrome(str: string): boolean {
    const normalized = str.toLowerCase().replace(/[\W_]/g, '');
    return normalized === normalized.split('').reverse().join('');
}
