export function validateEmail(email: string) {
    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

export function validatePassword(password: string) {
    return password.length >= 8;
}

export function validateConfirmPassword(
    password: string,
    confirmPassword: string
) {
    return password === confirmPassword;
}

export function validateFullName(name: string) {
    return name.trim().length >= 3;
}
